/* ============================================================
   CAPÍTULO 07 — ARQUITECTURA TÉCNICA
   Refleja el MVP real: Polygon, 3 contratos UUPS, R2 privado + IPFS,
   gasless via relayer, ECDSA. Multi-chain/HLS/Authenticity = Roadmap.
   ============================================================ */
registerChapter('arquitectura', {
  order: 7,
  es: `
    <div class="ch-eyebrow">
      <span class="num">CAPÍTULO 07</span>
      <span class="rule"></span>
      <span class="ch-status op"><span class="dot"></span> Operativo</span>
    </div>

    <h1 class="ch-title">Arquitectura — <em>la complejidad, invisible</em></h1>
    <p class="ch-lead">Grooves está diseñado como un sistema de tres capas: presentación, lógica de negocio y registro inmutable en blockchain. La arquitectura garantiza que la complejidad técnica sea invisible para el usuario, manteniendo la seguridad y transparencia de la blockchain.</p>

    <div class="figure">
      <svg viewBox="0 0 560 300" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="ar-g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <!-- three stacked layers -->
        <g>
          <rect x="120" y="30" width="320" height="62" rx="12" fill="#131318" stroke="#4a6fa5" stroke-width="1.4"/>
          <text x="140" y="56" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Frontend</text>
          <text x="140" y="76" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="10">React · Web + Móvil · marketplace, player, studio</text>
        </g>
        <g>
          <rect x="120" y="118" width="320" height="62" rx="12" fill="#131318" stroke="#C8A96E" stroke-width="1.4"/>
          <text x="140" y="144" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Backend</text>
          <text x="140" y="164" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="10">Node.js · Fastify · Prisma · relayer (gasless)</text>
        </g>
        <g>
          <rect x="120" y="206" width="320" height="62" rx="12" fill="#131318" stroke="#4a8c5c" stroke-width="1.4"/>
          <text x="140" y="232" fill="#9fd9b4" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Blockchain</text>
          <text x="140" y="252" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="10">Polygon · contratos UUPS · ERC-721 / 1155</text>
        </g>
        <!-- connecting data flow -->
        <line x1="280" y1="92" x2="280" y2="118" stroke="url(#ar-g)" stroke-width="2" stroke-dasharray="4 4"><animate attributeName="stroke-dashoffset" values="16;0" dur="1s" repeatCount="indefinite"/></line>
        <line x1="280" y1="180" x2="280" y2="206" stroke="url(#ar-g)" stroke-width="2" stroke-dasharray="4 4"><animate attributeName="stroke-dashoffset" values="16;0" dur="1s" repeatCount="indefinite"/></line>
      </svg>
      <svg viewBox="0 0 300 320" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="ar-gv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <g>
          <rect x="20" y="20" width="260" height="70" rx="12" fill="#131318" stroke="#4a6fa5" stroke-width="1.4"/>
          <text x="38" y="48" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="14" font-weight="600">Frontend</text>
          <text x="38" y="70" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="10">React · Web + Móvil</text>
        </g>
        <g>
          <rect x="20" y="125" width="260" height="70" rx="12" fill="#131318" stroke="#C8A96E" stroke-width="1.4"/>
          <text x="38" y="153" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="14" font-weight="600">Backend</text>
          <text x="38" y="175" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="10">Fastify · Prisma · relayer</text>
        </g>
        <g>
          <rect x="20" y="230" width="260" height="70" rx="12" fill="#131318" stroke="#4a8c5c" stroke-width="1.4"/>
          <text x="38" y="258" fill="#9fd9b4" font-family="'Spline Sans',sans-serif" font-size="14" font-weight="600">Blockchain</text>
          <text x="38" y="280" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="10">Polygon · ERC-721 / 1155</text>
        </g>
        <line x1="150" y1="90" x2="150" y2="125" stroke="url(#ar-gv)" stroke-width="2" stroke-dasharray="4 4"><animate attributeName="stroke-dashoffset" values="16;0" dur="1s" repeatCount="indefinite"/></line>
        <line x1="150" y1="195" x2="150" y2="230" stroke="url(#ar-gv)" stroke-width="2" stroke-dasharray="4 4"><animate attributeName="stroke-dashoffset" values="16;0" dur="1s" repeatCount="indefinite"/></line>
      </svg>
      <div class="figure-cap">Fig. 7.1 — Las tres capas del sistema</div>
    </div>

    <table>
      <thead><tr><th>Capa</th><th>Tecnología</th><th>Función</th></tr></thead>
      <tbody>
        <tr><td><strong>Frontend</strong></td><td>React (web + móvil)</td><td>Marketplace, player, Pressing Studio</td></tr>
        <tr><td><strong>Backend</strong></td><td>Node.js · Fastify · Prisma</td><td>Lógica de negocio, autenticación, contenido, relayer</td></tr>
        <tr><td><strong>Blockchain</strong></td><td>Solidity · contratos UUPS</td><td>Propiedad, royalties automáticos, marketplace</td></tr>
        <tr><td><strong>Almacenamiento</strong></td><td>IPFS + Cloudflare R2</td><td>Previews públicos + masters y Bound Content privados</td></tr>
      </tbody>
    </table>

    <h2>Los contratos inteligentes</h2>
    <p>Los contratos de Grooves están escritos en Solidity y desplegados en Polygon. Utilizan el patrón <strong>UUPS Proxy</strong> para ser actualizables de forma segura. Existen tres contratos principales, todos auditables públicamente en la blockchain:</p>

    <div class="cards c3">
      <div class="card">
        <span class="card-tag">ERC-721 + EIP-2981</span>
        <h4>Grooves721</h4>
        <p>Para las Sealed Editions. Supply fijo e inmutable, cada Pressing es único. Royalties automáticos en reventa y revenue splits configurables.</p>
      </div>
      <div class="card">
        <span class="card-tag">ERC-1155 + EIP-2981</span>
        <h4>Grooves1155</h4>
        <p>Para las Open Editions. Supply flexible: el creador puede añadir stock sin desplegar un nuevo contrato. Un contrato por catálogo.</p>
      </div>
      <div class="card">
        <span class="card-tag">Marketplace</span>
        <h4>GroovesMarket</h4>
        <p>El mercado secundario on-chain. Distribución atómica en cada venta: royalty al artista + comisión de plataforma + pago al vendedor, en una sola transacción.</p>
      </div>
    </div>

    <div class="callout note">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/></svg>
      <p><strong>Seguridad por firma criptográfica.</strong> El backend es el único que puede autorizar la creación de un Pressing mediante una firma ECDSA. Aunque un usuario intente llamar al contrato directamente desde su wallet, sin la firma del servidor el contrato rechaza la operación. Las firmas son de un solo uso (nonce) para prevenir ataques de repetición.</p>
    </div>

    <h2>Compra sin gas: el relayer</h2>
    <p>En la venta primaria, el usuario no necesita tener la criptomoneda nativa de la red para pagar las comisiones de transacción. Un componente del backend —el <em>relayer</em>— registra la operación en la blockchain en nombre del usuario, y el costo se descuenta de forma transparente del pago. Esto elimina la barrera más grande para un usuario nuevo: tener que conseguir "gas" antes de poder comprar.</p>

    <h2>Custodia y wallets: las llaves son del usuario</h2>
    <p>Grooves es <strong>no-custodial</strong>, y no como postura de marketing sino como propiedad de la arquitectura. La plataforma no genera, no almacena y no tiene acceso a ninguna llave privada de usuario. El backend opera con una única llave propia —la del firmante/relayer— cuyas funciones están acotadas a dos: firmar las autorizaciones que los contratos exigen y pagar el gas al retransmitir transacciones. Esa llave jamás puede mover los activos de un usuario.</p>
    <p>El reparto de responsabilidades es estricto y verificable on-chain:</p>
    <ul>
      <li><strong>El usuario firma sus propios activos.</strong> Comprar, crear o revender exige una firma desde su wallet —un permit EIP-2612 en la compra; su propia transacción en la creación—. Sin esa firma, nada se mueve.</li>
      <li><strong>El backend solo firma autorizaciones.</strong> Su firma funciona como un sello que habilita o bloquea una operación según las reglas de la plataforma, pero no transfiere ni fondos ni Pressings. Es un rol de portero, no de custodio.</li>
      <li><strong>Los contratos honran ambas firmas.</strong> En una compra, el USDC del comprador se mueve únicamente porque él firmó el permit que lo autoriza; el contrato no tiene forma de tomarlo de otro modo.</li>
    </ul>
    <p>A nivel de datos, el registro de cada usuario guarda solo su dirección pública —nunca una llave privada, una frase semilla ni una llave cifrada—. No existe en ningún punto del sistema un lugar donde Grooves pudiera custodiar la llave de un usuario, aunque quisiera.</p>

    <div class="callout">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/></svg>
      <p><strong>No-custodial, sin asteriscos.</strong> Grooves nunca tiene las llaves, nunca custodia los fondos y no puede mover, congelar ni acceder a los activos de ningún usuario. La propiedad vive en la wallet del usuario; la plataforma solo facilita y atestigua.</p>
    </div>

    <p><strong>La wallet integrada conservará esta propiedad. <span class="rm-badge">Roadmap</span></strong> La wallet sin fricción para usuarios nuevos —generada a partir de su cuenta, sin instalar nada ni gestionar una semilla— preservará exactamente este modelo. La llave se generará y se resguardará bajo el control exclusivo del usuario mediante cómputo multipartito (MPC) o passkeys del propio dispositivo: la llave se divide en partes y ninguna entidad —ni Grooves ni el proveedor de la tecnología— llega a tener la llave completa. Las partes solo se combinan, en el dispositivo del usuario y con su autorización, en el instante de firmar. Auto-custodia sin fricción: invisible en la experiencia, soberana en el control.</p>

    <h2>Almacenamiento de tres niveles</h2>
    <p>Grooves separa deliberadamente dónde vive cada cosa, según deba ser pública o privada:</p>

    <ul>
      <li><strong>Metadata y propiedad:</strong> on-chain, en la blockchain. Público y auditable por cualquiera, para siempre.</li>
      <li><strong>Preview de 30 segundos:</strong> en IPFS público. Es la vitrina — cualquiera puede oírlo, no requiere wallet.</li>
      <li><strong>Master completo y Bound Content:</strong> en almacenamiento privado (Cloudflare R2), sin acceso público. Se entrega solo al dueño, mediante una URL firmada temporal, tras verificar la propiedad on-chain.</li>
    </ul>

    <div class="callout">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
      <p>El master nunca se publica en una URL pública ni aparece en los metadatos del NFT. La única forma de acceder al audio completo o al Bound Content es siendo el dueño verificado del Pressing — la propiedad on-chain es la llave.</p>
    </div>

    <h2>En la hoja de ruta</h2>
    <p>Varias capacidades descritas como la visión completa de Grooves están en desarrollo y se incorporarán en fases posteriores:</p>

    <div class="cards c2">
      <div class="card"><span class="card-tag">Roadmap</span><h4>Authenticity Engine</h4><p>Verificación automática de copyright por fingerprinting acústico (estilo Content ID) y análisis de similitud visual, al momento de crear el Pressing.</p></div>
      <div class="card"><span class="card-tag">Roadmap</span><h4>Multi-chain & on-ramp</h4><p>Soporte para redes adicionales EVM-compatibles, biblioteca unificada entre chains, y pago con tarjeta/PayPal integrado.</p></div>
    </div>
  `,
  en: `
    <div class="ch-eyebrow">
      <span class="num">CHAPTER 07</span>
      <span class="rule"></span>
      <span class="ch-status op"><span class="dot"></span> Live</span>
    </div>

    <h1 class="ch-title">Architecture — <em>complexity, invisible</em></h1>
    <p class="ch-lead">Grooves is designed as a three-layer system: presentation, business logic, and immutable blockchain record. The architecture ensures technical complexity stays invisible to the user, while preserving the blockchain's security and transparency.</p>

    <div class="figure">
      <svg viewBox="0 0 560 300" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="ar-g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <!-- three stacked layers -->
        <g>
          <rect x="120" y="30" width="320" height="62" rx="12" fill="#131318" stroke="#4a6fa5" stroke-width="1.4"/>
          <text x="140" y="56" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Frontend</text>
          <text x="140" y="76" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="10">React · Web + Móvil · marketplace, player, studio</text>
        </g>
        <g>
          <rect x="120" y="118" width="320" height="62" rx="12" fill="#131318" stroke="#C8A96E" stroke-width="1.4"/>
          <text x="140" y="144" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Backend</text>
          <text x="140" y="164" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="10">Node.js · Fastify · Prisma · relayer (gasless)</text>
        </g>
        <g>
          <rect x="120" y="206" width="320" height="62" rx="12" fill="#131318" stroke="#4a8c5c" stroke-width="1.4"/>
          <text x="140" y="232" fill="#9fd9b4" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Blockchain</text>
          <text x="140" y="252" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="10">Polygon · contratos UUPS · ERC-721 / 1155</text>
        </g>
        <!-- connecting data flow -->
        <line x1="280" y1="92" x2="280" y2="118" stroke="url(#ar-g)" stroke-width="2" stroke-dasharray="4 4"><animate attributeName="stroke-dashoffset" values="16;0" dur="1s" repeatCount="indefinite"/></line>
        <line x1="280" y1="180" x2="280" y2="206" stroke="url(#ar-g)" stroke-width="2" stroke-dasharray="4 4"><animate attributeName="stroke-dashoffset" values="16;0" dur="1s" repeatCount="indefinite"/></line>
      </svg>
      <svg viewBox="0 0 300 320" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="ar-gv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <g>
          <rect x="20" y="20" width="260" height="70" rx="12" fill="#131318" stroke="#4a6fa5" stroke-width="1.4"/>
          <text x="38" y="48" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="14" font-weight="600">Frontend</text>
          <text x="38" y="70" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="10">React · Web + Móvil</text>
        </g>
        <g>
          <rect x="20" y="125" width="260" height="70" rx="12" fill="#131318" stroke="#C8A96E" stroke-width="1.4"/>
          <text x="38" y="153" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="14" font-weight="600">Backend</text>
          <text x="38" y="175" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="10">Fastify · Prisma · relayer</text>
        </g>
        <g>
          <rect x="20" y="230" width="260" height="70" rx="12" fill="#131318" stroke="#4a8c5c" stroke-width="1.4"/>
          <text x="38" y="258" fill="#9fd9b4" font-family="'Spline Sans',sans-serif" font-size="14" font-weight="600">Blockchain</text>
          <text x="38" y="280" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="10">Polygon · ERC-721 / 1155</text>
        </g>
        <line x1="150" y1="90" x2="150" y2="125" stroke="url(#ar-gv)" stroke-width="2" stroke-dasharray="4 4"><animate attributeName="stroke-dashoffset" values="16;0" dur="1s" repeatCount="indefinite"/></line>
        <line x1="150" y1="195" x2="150" y2="230" stroke="url(#ar-gv)" stroke-width="2" stroke-dasharray="4 4"><animate attributeName="stroke-dashoffset" values="16;0" dur="1s" repeatCount="indefinite"/></line>
      </svg>
      <div class="figure-cap">Fig. 7.1 — The system's three layers</div>
    </div>

    <table>
      <thead><tr><th>Layer</th><th>Technology</th><th>Function</th></tr></thead>
      <tbody>
        <tr><td><strong>Frontend</strong></td><td>React (web + mobile)</td><td>Marketplace, player, Pressing Studio</td></tr>
        <tr><td><strong>Backend</strong></td><td>Node.js · Fastify · Prisma</td><td>Business logic, authentication, content, relayer</td></tr>
        <tr><td><strong>Blockchain</strong></td><td>Solidity · UUPS contracts</td><td>Ownership, automatic royalties, marketplace</td></tr>
        <tr><td><strong>Storage</strong></td><td>IPFS + Cloudflare R2</td><td>Public previews + private masters and Bound Content</td></tr>
      </tbody>
    </table>

    <h2>The smart contracts</h2>
    <p>Grooves' contracts are written in Solidity and deployed on Polygon. They use the <strong>UUPS Proxy</strong> pattern to be safely upgradeable. There are three main contracts, all publicly auditable on the blockchain:</p>

    <div class="cards c3">
      <div class="card">
        <span class="card-tag">ERC-721 + EIP-2981</span>
        <h4>Grooves721</h4>
        <p>For Sealed Editions. Fixed, immutable supply; each Pressing is unique. Automatic resale royalties and configurable revenue splits.</p>
      </div>
      <div class="card">
        <span class="card-tag">ERC-1155 + EIP-2981</span>
        <h4>Grooves1155</h4>
        <p>For Open Editions. Flexible supply: the creator can add stock without deploying a new contract. One contract per catalog.</p>
      </div>
      <div class="card">
        <span class="card-tag">Marketplace</span>
        <h4>GroovesMarket</h4>
        <p>The on-chain secondary market. Atomic distribution on every sale: royalty to the artist + platform commission + payment to the seller, in a single transaction.</p>
      </div>
    </div>

    <div class="callout note">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/></svg>
      <p><strong>Security by cryptographic signature.</strong> The backend is the only party that can authorize creating a Pressing, via an ECDSA signature. Even if a user tries to call the contract directly from their wallet, without the server's signature the contract rejects the operation. Signatures are single-use (nonce) to prevent replay attacks.</p>
    </div>

    <h2>Buying without gas: the relayer</h2>
    <p>On the primary sale, the user doesn't need to hold the network's native cryptocurrency to pay transaction fees. A backend component — the <em>relayer</em> — records the operation on the blockchain on the user's behalf, and the cost is deducted transparently from the payment. This removes the biggest barrier for a new user: having to obtain "gas" before they can buy.</p>

    <h2>Custody and wallets: the keys belong to the user</h2>
    <p>Grooves is <strong>non-custodial</strong> — not as a marketing stance but as a property of the architecture. The platform does not generate, store, or have access to any user's private key. The backend operates with a single key of its own — the signer/relayer key — whose functions are limited to two: signing the authorizations the contracts require, and paying gas when relaying transactions. That key can never move a user's assets.</p>
    <p>The division of responsibilities is strict and verifiable on-chain:</p>
    <ul>
      <li><strong>The user signs their own assets.</strong> Buying, creating, or reselling requires a signature from their wallet — an EIP-2612 permit on a purchase; their own transaction on a creation. Without that signature, nothing moves.</li>
      <li><strong>The backend only signs authorizations.</strong> Its signature acts as a seal that enables or blocks an operation according to the platform's rules, but transfers neither funds nor Pressings. It is a gatekeeper role, not a custodian.</li>
      <li><strong>The contracts honor both signatures.</strong> On a purchase, the buyer's USDC moves only because they signed the permit authorizing it; the contract has no way to take it otherwise.</li>
    </ul>
    <p>At the data level, each user's record stores only their public address — never a private key, a seed phrase, or an encrypted key. There is no point anywhere in the system where Grooves could take custody of a user's key, even if it wanted to.</p>

    <div class="callout">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/></svg>
      <p><strong>Non-custodial, no asterisks.</strong> Grooves never holds the keys, never takes custody of funds, and cannot move, freeze, or access anyone's assets. Ownership lives in the user's wallet; the platform only facilitates and attests.</p>
    </div>

    <p><strong>The built-in wallet will preserve this property. <span class="rm-badge">Roadmap</span></strong> The frictionless wallet for new users — generated from their account, with nothing to install and no seed to manage — will preserve exactly this model. The key will be generated and secured under the user's exclusive control through multi-party computation (MPC) or device passkeys: the key is split into parts, and no single entity — neither Grooves nor the technology provider — ever holds the complete key. The parts combine only on the user's device, with their authorization, at the moment of signing. Frictionless self-custody: invisible in the experience, sovereign in control.</p>

    <h2>Three-tier storage</h2>
    <p>Grooves deliberately separates where each thing lives, depending on whether it must be public or private:</p>

    <ul>
      <li><strong>Metadata and ownership:</strong> on-chain, on the blockchain. Public and auditable by anyone, forever.</li>
      <li><strong>30-second preview:</strong> on public IPFS. It's the shop window — anyone can hear it, no wallet required.</li>
      <li><strong>Full master and Bound Content:</strong> in private storage (Cloudflare R2), with no public access. Delivered only to the owner, via a temporary signed URL, after verifying ownership on-chain.</li>
    </ul>

    <div class="callout">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
      <p>The master is never published at a public URL nor appears in the NFT metadata. The only way to access the full audio or the Bound Content is by being the verified owner of the Pressing — on-chain ownership is the key.</p>
    </div>

    <h2>On the roadmap</h2>
    <p>Several capabilities described as Grooves' full vision are in development and will be incorporated in later phases:</p>

    <div class="cards c2">
      <div class="card"><span class="card-tag">Roadmap</span><h4>Authenticity Engine</h4><p>Automatic copyright verification via acoustic fingerprinting (Content ID style) and visual similarity analysis, at the moment of creating the Pressing.</p></div>
      <div class="card"><span class="card-tag">Roadmap</span><h4>Multi-chain & on-ramp</h4><p>Support for additional EVM-compatible networks, a unified library across chains, and integrated card/PayPal payments.</p></div>
    </div>

  `
});
