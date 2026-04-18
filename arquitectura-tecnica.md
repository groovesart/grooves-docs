# V. Arquitectura Técnica

## 5.1 — Visión General del Sistema

Grooves está diseñado como un sistema de tres capas: la capa de presentación (frontend), la capa de lógica de negocio (backend), y la capa de registro inmutable (blockchain). La arquitectura garantiza que la complejidad técnica sea invisible para el usuario final, mientras mantiene la seguridad y transparencia que la blockchain ofrece.

| Capa | Componente | Tecnología | Función |
|---|---|---|---|
| Frontend | Web App + Móvil | React / React Native | Interfaz de usuario: marketplace, player, Pressing Studio |
| Backend | API Server | Node.js / Fastify / Prisma | Lógica de negocio, autenticación, gestión de contenido |
| Backend | Authenticity Engine | ACRCloud + IA de similitud | Análisis de copyright en audio y arte visual |
| Backend | Streaming Server | HLS + Cloudflare R2 | Entrega de audio con URLs firmadas temporalmente |
| Blockchain | Smart Contracts | Solidity (ERC-721 / ERC-1155) | Registro de propiedad, royalties automáticos, marketplace |
| Blockchain | Multi-Chain | Polygon / Avalanche | Redes EVM-compatibles, selección por el creador |
| Storage | Descentralizado + CDN | IPFS + Cloudflare R2 | Permanencia de archivos + velocidad de reproducción |

---

## 5.2 — Blockchain Multi-Chain

Grooves soporta múltiples blockchains EVM-compatibles. El creador elige dónde publicar; el usuario final ve su colección unificada sin importar la chain. El backend abstrae toda la complejidad: lee las wallets del usuario en todas las chains soportadas y presenta una biblioteca unificada.

| Blockchain | Costo por Pressing | Velocidad | Ventaja Principal |
|---|---|---|---|
| **Polygon (PoS)** | ~$0.01 - $0.05 | ~2 segundos | Ecosistema maduro, alta liquidez, bajo costo. **Recomendado.** |
| **Avalanche (C-Chain)** | ~$0.05 - $0.25 | <1 segundo | Máxima velocidad de confirmación, creciente adopción. |

---

## 5.3 — Smart Contracts

Los contratos inteligentes de Grooves se escriben una sola vez en Solidity y se despliegan en las tres chains (todas son EVM-compatibles). Utilizan el patrón **UUPS Proxy** para ser actualizables. Existen tres contratos principales:

| Contrato | Estándar | Uso | Características |
|---|---|---|---|
| **Grooves721** | ERC-721 + EIP-2981 | Sealed Editions | Supply fijo e inmutable. IDs únicos. Royalties automáticos. Revenue splits. Time limits. Whitelist. Gifts. Firma ECDSA obligatoria. |
| **Grooves1155** | ERC-1155 + EIP-2981 | Open Editions | Supply flexible. Un contrato por catálogo. Creación por lotes (batch). Revenue splits. El sello puede añadir stock sin nuevo contrato. |
| **GroovesMarket** | Custom | Marketplace on-chain | Distribución atómica: royalty + comisión + pago al vendedor. Listings, ofertas, subastas. Sistema de referidos. |

> [!NOTE]
> **Nota de seguridad:** El backend es el único que puede firmar la transacción de creación. Aunque un usuario intente llamar al smart contract directamente desde su wallet, sin la firma del servidor el contrato rechaza la operación. Esto hace imposible saltarse el Authenticity Engine.


---

## 5.4 — Authenticity Engine (Motor de Autenticidad)

El Authenticity Engine es el componente más crítico de Grooves. Garantiza que ninguna obra que infrinja derechos de autor existentes pueda ser creada como Pressing. Opera en dos niveles: análisis de audio y análisis de arte visual.

### Análisis de Audio — Acoustic Fingerprinting

El fingerprinting acústico genera una "huella digital" única de cualquier grabación de audio. Funciona extrayendo características espectrales del audio — patrones de frecuencia, energía, transiciones tonales — y convirtiéndolos en un hash compacto que puede compararse contra una base de datos masiva de obras registradas.

| Paso | Proceso | Detalle Técnico |
|---|---|---|
| 1 | Ingesta de audio | El usuario sube archivos WAV/FLAC/MP3. El sistema extrae el audio crudo (PCM) para análisis. |
| 2 | Extracción espectral | Se aplica Short-Time Fourier Transform (STFT) para descomponer el audio en frecuencias a lo largo del tiempo, generando un espectrograma. |
| 3 | Generación de fingerprint | Se identifican picos espectrales y se codifican en un hash compacto. Cada track genera un fingerprint único de ~100KB. |
| 4 | Consulta a base de datos | El fingerprint se compara contra la base de datos de ACRCloud (~100M+ tracks registrados de majors e independientes). |
| 5 | Resultado | Si hay match con >85% de similitud, se bloquea la creación y se notifica al usuario con detalles de la obra infractora. |

Este proceso es análogo a cómo funciona Content ID de YouTube, pero aplicado al momento de creación del Pressing en lugar de después de la publicación. La diferencia clave es que en Grooves, una obra que no pasa el análisis nunca llega a existir en blockchain.

### Análisis de Arte Visual — Similarity Detection

Para el arte de portada y material visual, el sistema utiliza redes neuronales convolucionales (CNN) preentrenadas para extraer vectores de características de cada imagen. Estos vectores se comparan contra una base de datos de imágenes protegidas usando búsqueda de similitud por vectores (approximate nearest neighbor search). Si la similitud supera el umbral definido, se bloquea la creación.

### Arquitectura de Seguridad del Engine

El Authenticity Engine no es un servicio opcional ni un paso que pueda saltarse. La arquitectura de Grooves garantiza esto mediante un diseño de firma criptográfica:

* El smart contract de creación requiere una firma ECDSA (Elliptic Curve Digital Signature Algorithm) del servidor de Grooves.
* El servidor solo genera esta firma si el Authenticity Engine aprueba la obra.
* Sin esta firma, el contrato rechaza cualquier intento de creación, incluso si se llama directamente desde una wallet.
* Las firmas son de un solo uso (nonce) para prevenir ataques de replay.

### Referencias y Tecnologías Base

* **ACRCloud** — Servicio de reconocimiento de audio utilizado por Spotify, Deezer, YouTube. Base de datos de +100M de tracks. [acrcloud.com](https://www.acrcloud.com)
* **Chromaprint / AcoustID** — Librería open-source de fingerprinting acústico. [acoustid.org/chromaprint](https://acoustid.org/chromaprint)
* **YouTube Content ID** — Sistema de referencia para detección de copyright a escala.
* **EIP-2981** — Estándar de Ethereum para royalties on-chain. [eips.ethereum.org](https://eips.ethereum.org/EIPS/eip-2981)
* **ECDSA** — Algoritmo de firma digital usado en Ethereum/Polygon/Avalanche. Referencia: NIST FIPS 186-4.
* **FAISS (Meta AI)** — Búsqueda de similitud por vectores. [github.com/facebookresearch/faiss](https://github.com/facebookresearch/faiss)
* **CNN para similitud visual** — ResNet / EfficientNet como extractores de features. He et al. (2015) "Deep Residual Learning."

---

## 5.5 — Streaming y Reproducción

El sistema de reproducción de Grooves está diseñado para ofrecer una experiencia idéntica a Spotify en usabilidad, pero fundamentalmente diferente en su modelo de acceso: solo los poseedores verificados de un Pressing pueden reproducir el audio completo.

| Componente | Tecnología | Función |
|---|---|---|
| Protocolo de streaming | HLS (HTTP Live Streaming) | Audio segmentado en chunks de 10s. Adaptive bitrate. Compatible con todos los dispositivos. |
| Almacenamiento | Cloudflare R2 + IPFS | R2 para velocidad de reproducción (CDN global). IPFS para permanencia descentralizada. |
| Control de acceso | URLs firmadas (signed URLs) | Cada URL de audio expira en 60 minutos. El backend verifica ownership del Pressing antes de firmar. |
| Verificación | Lectura multi-chain de wallet | El backend consulta Polygon y Avalanche simultáneamente para verificar que la wallet posee el Pressing. |
| Preview | 30 segundos sin restricción | Todos los usuarios del marketplace pueden escuchar previews. No requiere wallet ni Pressing. |

---

## 5.6 — Almacenamiento

* **Metadata y contratos:** On-chain en la blockchain seleccionada por el creador.
* **Audio y arte:** IPFS para permanencia descentralizada + Cloudflare R2 (CDN) para velocidad de reproducción.
* **Bound Content:** Almacenamiento cifrado (AES-256) con acceso controlado por ownership del Pressing. Las claves de descifrado se entregan solo tras verificación on-chain.
