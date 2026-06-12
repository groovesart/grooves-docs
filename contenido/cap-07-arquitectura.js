/* ============================================================
   CAPÍTULO 07 — ARQUITECTURA TÉCNICA
   Refleja el MVP real: Polygon, 3 contratos UUPS, R2 privado + IPFS,
   gas en USDC via relayer, ECDSA. Multi-chain/HLS/Authenticity = Roadmap.
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
          <text x="140" y="164" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="10">Node.js · Fastify · Prisma · relayer · gas USDC</text>
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

    <h2>El gas, pagado en USDC: el relayer</h2>
    <p>En la venta primaria, el usuario no necesita tener la criptomoneda nativa de la red para pagar el gas. Un componente del backend —el <em>relayer</em>— registra la operación en la blockchain en nombre del usuario, adelantando el gas en la moneda nativa; ese costo de red se le cobra al usuario en USDC, descontado de forma transparente del pago. No paga gas en la moneda nativa, pero sí cubre su costo en USDC, y desaparece la barrera más grande para un usuario nuevo: conseguir el token de gas antes de comprar.</p>

    <p><strong>Crear funciona igual.</strong> El mismo mecanismo cubre la creación de Pressings: el artista firma una autorización —un permit EIP-2612— y el relayer adelanta la moneda nativa para registrar la obra; el costo de red se le cobra en USDC, de forma atómica, sin que el creador necesite la criptomoneda nativa y sin que Grooves retenga sus fondos en ningún momento.</p>

    <h2>Cómo se reparte el dinero on-chain</h2>
    <p>El reparto de cada Edition —las wallets, sus porcentajes y, si las hay, sus fechas de vencimiento— no vive en una base de datos editable: se reduce a un hash que el backend <strong>firma dentro del voucher de creación</strong>. Esa firma es la que el contrato exige para crear el Pressing. Si alguien intentara alterar una sola wallet o un solo porcentaje, el hash cambiaría, la firma dejaría de coincidir y el contrato rechazaría la operación. Ni el artista ni Grooves pueden inyectar o modificar a quién se le paga.</p>

    <div class="figure">
          <svg viewBox="0 0 560 250" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="atom-g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
            </defs>
            <text x="280" y="18" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">El reparto se firma en el voucher · se paga en una sola tx</text>

            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.4s" fill="freeze"/>
              <rect x="14" y="78" width="150" height="74" rx="12" fill="#131318" stroke="#4a6fa5" stroke-width="1.4"/>
              <g transform="translate(30,98)">
                <rect x="0" y="6" width="16" height="11" rx="2" fill="none" stroke="#8fa8d0" stroke-width="1.6"/>
                <path d="M3 6 V3.5 a5 5 0 0 1 10 0 V6" fill="none" stroke="#8fa8d0" stroke-width="1.6"/>
              </g>
              <text x="56" y="105" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Reparto</text>
              <text x="89" y="127" text-anchor="middle" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="9">keccak(wallets+%)</text>
              <text x="89" y="142" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">N wallets · % · fechas</text>
            </g>

            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.65s" fill="freeze"/>
              <line x1="164" y1="115" x2="206" y2="115" stroke="url(#atom-g)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/></line>
              <path d="M199 111 l6 4 l-6 4" fill="none" stroke="#C8A96E" stroke-width="1.4"/>
              <text x="185" y="106" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="8.5">firma</text>
              <circle r="3.5" fill="#d9bf8a"><animateMotion path="M164 115 L201 115" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
            </g>

            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/>
              <rect x="206" y="86" width="92" height="58" rx="12" fill="#131318" stroke="#C8A96E" stroke-width="1.4"/>
              <text x="252" y="110" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12.5" font-weight="600">Voucher</text>
              <text x="252" y="128" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">sellado</text>
            </g>

            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.15s" fill="freeze"/>
              <line x1="298" y1="115" x2="338" y2="115" stroke="url(#atom-g)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/></line>
              <path d="M331 111 l6 4 l-6 4" fill="none" stroke="#C8A96E" stroke-width="1.4"/>
              <text x="318" y="106" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">verifica</text>
              <circle r="3.5" fill="#C8A96E"><animateMotion path="M298 115 L333 115" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
            </g>

            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.4s" fill="freeze"/>
              <circle cx="372" cy="115" r="34" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/>
              <text x="372" y="111" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Contrato</text>
              <text x="372" y="126" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8">verifica firma</text>
            </g>

            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.65s" fill="freeze"/>
              <path d="M406 99 Q455 78 488 64" fill="none" stroke="#C8A96E" stroke-width="1.4" opacity="0.5"/>
              <path d="M406 115 Q455 115 488 115" fill="none" stroke="#4a6fa5" stroke-width="1.4" opacity="0.5"/>
              <path d="M406 131 Q455 152 488 166" fill="none" stroke="#4a8c5c" stroke-width="1.4" opacity="0.5"/>
              <circle r="3" fill="#d9bf8a"><animateMotion path="M406 99 Q455 78 488 64" dur="1.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.3s" repeatCount="indefinite"/></circle>
              <circle r="3" fill="#8fa8d0"><animateMotion path="M406 115 Q455 115 488 115" dur="1.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.3s" repeatCount="indefinite"/></circle>
              <circle r="3" fill="#7fc99a"><animateMotion path="M406 131 Q455 152 488 166" dur="1.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.3s" repeatCount="indefinite"/></circle>
            </g>

            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.85s" fill="freeze"/>
              <rect x="488" y="50" width="62" height="28" rx="8" fill="#131318" stroke="#C8A96E" stroke-width="1.3"/>
              <text x="519" y="68" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="10.5" font-weight="600">Payee 1</text>
              <rect x="488" y="101" width="62" height="28" rx="8" fill="#131318" stroke="#4a6fa5" stroke-width="1.3"/>
              <text x="519" y="119" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10.5" font-weight="600">Payee 2</text>
              <rect x="488" y="152" width="62" height="28" rx="8" fill="#131318" stroke="#4a8c5c" stroke-width="1.3"/>
              <text x="519" y="170" text-anchor="middle" fill="#7fc99a" font-family="'Spline Sans',sans-serif" font-size="10.5" font-weight="600">Payee 3</text>
            </g>

            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="2.1s" fill="freeze"/>
              <text x="447" y="210" text-anchor="middle" fill="#C8A96E" font-family="'Fraunces',serif" font-size="22" font-weight="600">1 sola tx</text>
              <text x="447" y="226" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">pago atómico · inline</text>
            </g>

            <text x="89" y="200" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8.5">si la firma no coincide,</text>
            <text x="89" y="214" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8.5">el contrato rechaza</text>
          </svg>
          <svg viewBox="0 0 300 390" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="atom-gv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
            </defs>
            <text x="150" y="18" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Firmado en el voucher · una sola tx</text>

            <g>
              <rect x="50" y="30" width="200" height="64" rx="12" fill="#131318" stroke="#4a6fa5" stroke-width="1.4"/>
              <g transform="translate(70,48)">
                <rect x="0" y="6" width="16" height="11" rx="2" fill="none" stroke="#8fa8d0" stroke-width="1.6"/>
                <path d="M3 6 V3.5 a5 5 0 0 1 10 0 V6" fill="none" stroke="#8fa8d0" stroke-width="1.6"/>
              </g>
              <text x="96" y="56" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Reparto</text>
              <text x="150" y="78" text-anchor="middle" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="9.5">keccak(wallets+%)</text>
            </g>
            <line x1="150" y1="94" x2="150" y2="128" stroke="url(#atom-gv)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/></line>
            <path d="M146 122 l4 6 l4 -6" fill="none" stroke="#C8A96E" stroke-width="1.4"/>
            <text x="166" y="116" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="9">firma</text>
            <circle r="3.5" fill="#d9bf8a"><animateMotion path="M150 94 L150 124" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>

            <g>
              <rect x="80" y="130" width="140" height="50" rx="12" fill="#131318" stroke="#C8A96E" stroke-width="1.4"/>
              <text x="150" y="152" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Voucher</text>
              <text x="150" y="170" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">sellado</text>
            </g>
            <line x1="150" y1="180" x2="150" y2="214" stroke="url(#atom-gv)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/></line>
            <path d="M146 208 l4 6 l4 -6" fill="none" stroke="#C8A96E" stroke-width="1.4"/>
            <text x="166" y="202" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">verifica</text>
            <circle r="3.5" fill="#C8A96E"><animateMotion path="M150 180 L150 210" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>

            <g>
              <circle cx="150" cy="244" r="30" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/>
              <text x="150" y="241" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Contrato</text>
              <text x="150" y="256" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8">verifica firma</text>
            </g>

            <path d="M126 264 Q70 300 48 322" fill="none" stroke="#C8A96E" stroke-width="1.4" opacity="0.5"/>
            <path d="M150 274 Q150 300 150 322" fill="none" stroke="#4a6fa5" stroke-width="1.4" opacity="0.5"/>
            <path d="M174 264 Q230 300 252 322" fill="none" stroke="#4a8c5c" stroke-width="1.4" opacity="0.5"/>
            <circle r="3" fill="#d9bf8a"><animateMotion path="M126 264 Q70 300 48 322" dur="1.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.3s" repeatCount="indefinite"/></circle>
            <circle r="3" fill="#8fa8d0"><animateMotion path="M150 274 Q150 300 150 322" dur="1.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.3s" repeatCount="indefinite"/></circle>
            <circle r="3" fill="#7fc99a"><animateMotion path="M174 264 Q230 300 252 322" dur="1.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.3s" repeatCount="indefinite"/></circle>

            <rect x="20" y="322" width="56" height="26" rx="8" fill="#131318" stroke="#C8A96E" stroke-width="1.3"/>
            <text x="48" y="339" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="10" font-weight="600">Payee 1</text>
            <rect x="122" y="322" width="56" height="26" rx="8" fill="#131318" stroke="#4a6fa5" stroke-width="1.3"/>
            <text x="150" y="339" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10" font-weight="600">Payee 2</text>
            <rect x="224" y="322" width="56" height="26" rx="8" fill="#131318" stroke="#4a8c5c" stroke-width="1.3"/>
            <text x="252" y="339" text-anchor="middle" fill="#7fc99a" font-family="'Spline Sans',sans-serif" font-size="10" font-weight="600">Payee 3</text>

            <text x="150" y="372" text-anchor="middle" fill="#C8A96E" font-family="'Fraunces',serif" font-size="16" font-weight="600">1 sola tx · pago atómico</text>
            <text x="150" y="386" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8.5">si la firma no coincide, el contrato rechaza</text>
          </svg>
          <div class="figure-cap">Fig. 7.3 — El reparto va firmado en el voucher y se paga atómico</div>
        </div>

    <p><strong>Primaria: reparto atómico.</strong> En la venta primaria la distribución ocurre <em>inline</em>, dentro de la misma transacción de la compra: el contrato verifica las firmas y paga a cada uno de los hasta 20 destinatarios de una sola vez. No hay un segundo paso ni un saldo que alguien deba repartir después; o se les paga a todos correctamente, o la transacción entera se revierte.</p>
    <p><strong>Reventa: un splitter por Edition.</strong> Para las regalías de reventa, el receptor de regalías (EIP-2981) de cada Edition es un <strong>contrato splitter propio</strong> —un clon liviano y barato de desplegar—. Las regalías de todas las reventas se acumulan ahí, y un proceso automatizado de Grooves —un cron, cuyo gas paga la plataforma— llama periódicamente a su función de reparto, que distribuye el saldo a cada wallet según los porcentajes fijados; el sobrante de redondeo va al último de la lista para que las cuentas cierren al centavo.</p>

    <div class="figure">
          <svg viewBox="0 0 560 270" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="splt-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
            </defs>
            <!-- cron / reloj arriba del splitter -->
            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.3s" fill="freeze"/>
              <g transform="translate(280,24)">
                <circle cx="0" cy="0" r="11" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/>
                <line x1="0" y1="0" x2="0" y2="-6" stroke="#C8A96E" stroke-width="1.6"/>
                <line x1="0" y1="0" x2="4.5" y2="2.5" stroke="#C8A96E" stroke-width="1.6"/>
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.4s" repeatCount="indefinite"/>
              </g>
              <text x="300" y="22" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="10">cron · distribute()</text>
              <text x="300" y="35" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8.5">Grooves paga el gas</text>
            </g>
            <line x1="280" y1="36" x2="280" y2="88" stroke="url(#splt-g)" stroke-width="2" stroke-dasharray="4 4"><animate attributeName="stroke-dashoffset" values="16;0" dur="1s" repeatCount="indefinite"/></line>
            <!-- reventas entrando a la izquierda -->
            <g font-family="'Spline Sans',sans-serif" font-size="11">
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.45s" fill="freeze"/>
                <text x="20" y="82" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9.5">reventa #1</text>
                <text x="20" y="95" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9.5">+3 USDC</text>
                <path d="M98 90 Q150 100 196 116" fill="none" stroke="#C8A96E" stroke-width="1.4" opacity="0.5"/>
                <circle r="3" fill="#d9bf8a"><animateMotion path="M98 90 Q150 100 196 116" dur="1.7s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" repeatCount="indefinite"/></circle>
              </g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.65s" fill="freeze"/>
                <text x="20" y="135" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9.5">reventa #2</text>
                <text x="20" y="148" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9.5">+3 USDC</text>
                <path d="M98 138 L196 138" fill="none" stroke="#C8A96E" stroke-width="1.4" opacity="0.5"/>
                <circle r="3" fill="#d9bf8a"><animateMotion path="M98 138 L196 138" dur="1.7s" begin="0.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" begin="0.4s" repeatCount="indefinite"/></circle>
              </g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.85s" fill="freeze"/>
                <text x="20" y="188" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9.5">reventa #3</text>
                <text x="20" y="201" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9.5">+3 USDC</text>
                <path d="M98 186 Q150 176 196 160" fill="none" stroke="#C8A96E" stroke-width="1.4" opacity="0.5"/>
                <circle r="3" fill="#d9bf8a"><animateMotion path="M98 186 Q150 176 196 160" dur="1.7s" begin="0.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" begin="0.8s" repeatCount="indefinite"/></circle>
              </g>
            </g>
            <!-- nodo central: Splitter de la Edition -->
            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.55s" fill="freeze"/>
              <rect x="196" y="88" width="168" height="86" rx="14" fill="#131318" stroke="url(#splt-g)" stroke-width="1.8"/>
              <text x="280" y="116" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Splitter de la Edition</text>
              <text x="280" y="137" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">receiver EIP-2981</text>
              <text x="280" y="159" text-anchor="middle" fill="#C8A96E" font-family="'Fraunces',serif" font-size="17" font-weight="600">saldo: 9 USDC</text>
            </g>
            <!-- abanico a la derecha: 3 wallets -->
            <g font-family="'Spline Sans',sans-serif">
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.1s" fill="freeze"/>
                <path d="M364 116 Q418 96 452 78" fill="none" stroke="#C8A96E" stroke-width="1.4" opacity="0.5"/>
                <circle r="3" fill="#d9bf8a"><animateMotion path="M364 116 Q418 96 452 78" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
                <rect x="452" y="60" width="100" height="40" rx="10" fill="#131318" stroke="#C8A96E" stroke-width="1.4"/>
                <text x="502" y="78" text-anchor="middle" fill="#d9bf8a" font-size="12" font-weight="600">Artista 50%</text>
                <text x="502" y="92" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">4.5 USDC</text>
              </g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.3s" fill="freeze"/>
                <path d="M364 131 L452 131" fill="none" stroke="#4a6fa5" stroke-width="1.4" opacity="0.55"/>
                <circle r="3" fill="#8fa8d0"><animateMotion path="M364 131 L452 131" dur="1.6s" begin="0.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" begin="0.3s" repeatCount="indefinite"/></circle>
                <rect x="452" y="111" width="100" height="40" rx="10" fill="#131318" stroke="#4a6fa5" stroke-width="1.4"/>
                <text x="502" y="129" text-anchor="middle" fill="#cdd9ee" font-size="12" font-weight="600">Productor 30%</text>
                <text x="502" y="143" text-anchor="middle" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="8.5">2.7 USDC</text>
              </g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.5s" fill="freeze"/>
                <path d="M364 146 Q418 166 452 184" fill="none" stroke="#4a8c5c" stroke-width="1.4" opacity="0.55"/>
                <circle r="3" fill="#7fc99a"><animateMotion path="M364 146 Q418 166 452 184" dur="1.6s" begin="0.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" begin="0.6s" repeatCount="indefinite"/></circle>
                <rect x="452" y="162" width="100" height="40" rx="10" fill="#131318" stroke="#4a8c5c" stroke-width="1.4"/>
                <text x="502" y="180" text-anchor="middle" fill="#9fd9b4" font-size="12" font-weight="600">Featuring 20%</text>
                <text x="502" y="194" text-anchor="middle" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="8.5">1.8 USDC</text>
              </g>
            </g>
            <!-- nota mono -->
            <text x="280" y="246" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8.5">1 splitter por Edition · enforced en el market de Grooves</text>
          </svg>
          <svg viewBox="0 0 300 410" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="splt-gv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
            </defs>
            <!-- reventas arriba -->
            <g font-family="'JetBrains Mono',monospace" font-size="9.5">
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.35s" fill="freeze"/>
                <rect x="14" y="16" width="78" height="36" rx="9" fill="#131318" stroke="#C8A96E" stroke-width="1.2"/>
                <text x="53" y="33" text-anchor="middle" fill="#9a978f">reventa #1</text>
                <text x="53" y="46" text-anchor="middle" fill="#C8A96E">+3 USDC</text>
              </g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.5s" fill="freeze"/>
                <rect x="111" y="16" width="78" height="36" rx="9" fill="#131318" stroke="#C8A96E" stroke-width="1.2"/>
                <text x="150" y="33" text-anchor="middle" fill="#9a978f">reventa #2</text>
                <text x="150" y="46" text-anchor="middle" fill="#C8A96E">+3 USDC</text>
              </g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.65s" fill="freeze"/>
                <rect x="208" y="16" width="78" height="36" rx="9" fill="#131318" stroke="#C8A96E" stroke-width="1.2"/>
                <text x="247" y="33" text-anchor="middle" fill="#9a978f">reventa #3</text>
                <text x="247" y="46" text-anchor="middle" fill="#C8A96E">+3 USDC</text>
              </g>
            </g>
            <path d="M53 52 Q53 70 145 84" fill="none" stroke="#C8A96E" stroke-width="1.3" opacity="0.5"/>
            <path d="M150 52 L150 84" fill="none" stroke="#C8A96E" stroke-width="1.3" opacity="0.5"/>
            <path d="M247 52 Q247 70 155 84" fill="none" stroke="#C8A96E" stroke-width="1.3" opacity="0.5"/>
            <circle r="3" fill="#d9bf8a"><animateMotion path="M150 52 L150 84" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
            <!-- cron al lado del splitter -->
            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.8s" fill="freeze"/>
              <g transform="translate(40,118)">
                <circle cx="0" cy="0" r="10" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/>
                <line x1="0" y1="0" x2="0" y2="-5.5" stroke="#C8A96E" stroke-width="1.6"/>
                <line x1="0" y1="0" x2="4" y2="2.5" stroke="#C8A96E" stroke-width="1.6"/>
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.4s" repeatCount="indefinite"/>
              </g>
              <text x="58" y="116" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="9.5">cron · distribute()</text>
              <text x="58" y="128" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8">Grooves paga el gas</text>
            </g>
            <!-- nodo splitter -->
            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/>
              <rect x="40" y="138" width="220" height="78" rx="14" fill="#131318" stroke="url(#splt-gv)" stroke-width="1.8"/>
              <text x="150" y="164" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Splitter de la Edition</text>
              <text x="150" y="182" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">receiver EIP-2981</text>
              <text x="150" y="204" text-anchor="middle" fill="#C8A96E" font-family="'Fraunces',serif" font-size="17" font-weight="600">saldo: 9 USDC</text>
            </g>
            <line x1="150" y1="216" x2="150" y2="246" stroke="url(#splt-gv)" stroke-width="2" stroke-dasharray="4 4"><animate attributeName="stroke-dashoffset" values="16;0" dur="1s" repeatCount="indefinite"/></line>
            <circle r="3" fill="#d9bf8a"><animateMotion path="M150 216 L150 246" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
            <!-- abanico a 3 wallets -->
            <g font-family="'Spline Sans',sans-serif" font-size="12">
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.2s" fill="freeze"/>
                <rect x="14" y="248" width="88" height="48" rx="10" fill="#131318" stroke="#C8A96E" stroke-width="1.4"/>
                <text x="58" y="270" text-anchor="middle" fill="#d9bf8a" font-weight="600">Artista 50%</text>
                <text x="58" y="285" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">4.5 USDC</text>
              </g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.4s" fill="freeze"/>
                <rect x="106" y="248" width="88" height="48" rx="10" fill="#131318" stroke="#4a6fa5" stroke-width="1.4"/>
                <text x="150" y="270" text-anchor="middle" fill="#cdd9ee" font-weight="600">Productor</text>
                <text x="150" y="285" text-anchor="middle" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="8.5">30% · 2.7</text>
              </g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.6s" fill="freeze"/>
                <rect x="198" y="248" width="88" height="48" rx="10" fill="#131318" stroke="#4a8c5c" stroke-width="1.4"/>
                <text x="242" y="270" text-anchor="middle" fill="#9fd9b4" font-weight="600">Featuring</text>
                <text x="242" y="285" text-anchor="middle" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="8.5">20% · 1.8</text>
              </g>
            </g>
            <path d="M150 246 Q90 240 58 248" fill="none" stroke="#C8A96E" stroke-width="1.2" opacity="0.45"/>
            <path d="M150 246 L150 248" fill="none" stroke="#4a6fa5" stroke-width="1.2" opacity="0.5"/>
            <path d="M150 246 Q210 240 242 248" fill="none" stroke="#4a8c5c" stroke-width="1.2" opacity="0.5"/>
            <text x="150" y="338" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8.5">1 splitter por Edition</text>
            <text x="150" y="352" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8.5">enforced en el market de Grooves</text>
          </svg>
          <div class="figure-cap">Fig. 7.4 — Un splitter por Edition reparte la regalía a cada wallet</div>
        </div>

    <p>Como en el resto del modelo, todo esto es <strong>inmutable tras la publicación</strong>: el reparto se edita libremente mientras la Edition está en borrador y, al anclarla, queda fijo en la blockchain. Dentro del mercado de Grooves el cumplimiento es total; en mercados externos, por la naturaleza del estándar de royalties, es el mejor esfuerzo posible.</p>

    <h2>Custodia y wallets: las llaves son del usuario</h2>
    <p>Grooves es <strong>no-custodial</strong>, y no como postura de marketing sino como propiedad de la arquitectura. Para comprar o poseer, el usuario <strong>conecta su propia wallet con un clic</strong> —la que ya controla—; Grooves no genera, no almacena y no tiene acceso a ninguna llave privada de usuario, y nunca crea una wallet en nombre de nadie. El backend opera con una única llave propia —la del firmante/relayer— cuyas funciones están acotadas a dos: firmar las autorizaciones que los contratos exigen y pagar el gas al retransmitir transacciones. Esa llave jamás puede mover los activos de un usuario.</p>
    <p>El reparto de responsabilidades es estricto y verificable on-chain:</p>
    <ul>
      <li><strong>Tú firmas tus propios activos.</strong> En una compra, lo único que firmas —y lo único EIP-712 que firmas— es un <em>permit</em> EIP-2612: la autorización para que tu USDC, y solo el tuyo, se mueva en esa operación. Al crear, firmas directamente tu propia transacción. Sin tu firma, nada se mueve.</li>
      <li><strong>El backend firma la autorización del mint.</strong> Su firma es un <em>voucher</em> que habilita la creación del Pressing según las reglas de la plataforma: un sello que permite o bloquea, pero que no transfiere ni fondos ni Pressings. Es un rol de portero, no de custodio.</li>
      <li><strong>El relayer envía la transacción y paga el gas.</strong> Lleva ambas firmas a la blockchain en tu nombre y cubre la comisión de red, sin tocar jamás tus activos.</li>
      <li><strong>El contrato verifica las dos firmas on-chain.</strong> Comprueba tu permit y la autorización del backend antes de actuar; tu USDC se mueve únicamente porque tú lo firmaste, y el Pressing queda registrado a tu nombre.</li>
    </ul>

    <div class="figure">
      <svg viewBox="0 0 560 200" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="cu-g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <text x="280" y="20" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Cruza la firma — la llave se queda en tu wallet</text>
        <g>
          <rect x="22" y="42" width="138" height="80" rx="12" fill="#131318" stroke="#4a6fa5" stroke-width="1.4"/>
          <text x="91" y="69" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Tu wallet</text>
          <text x="91" y="90" text-anchor="middle" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="9.5">Firmas el permit</text>
          <text x="91" y="107" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9.5">EIP-2612</text>
        </g>
        <g>
          <rect x="211" y="42" width="138" height="80" rx="12" fill="#131318" stroke="#C8A96E" stroke-width="1.4"/>
          <text x="280" y="67" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Relayer de Grooves</text>
          <text x="280" y="88" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">firma la autorización</text>
          <text x="280" y="104" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">envía la tx · paga gas</text>
        </g>
        <g>
          <rect x="400" y="42" width="138" height="80" rx="12" fill="#131318" stroke="#4a8c5c" stroke-width="1.4"/>
          <text x="469" y="69" text-anchor="middle" fill="#9fd9b4" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Tu Pressing</text>
          <text x="469" y="92" text-anchor="middle" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="9.5">llega a tu wallet</text>
        </g>
        <line x1="160" y1="82" x2="211" y2="82" stroke="#2a2a30" stroke-width="2"/>
        <line x1="160" y1="82" x2="211" y2="82" stroke="url(#cu-g)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/></line>
        <path d="M204 78 l6 4 l-6 4" fill="none" stroke="#C8A96E" stroke-width="1.4"/>
        <text x="185" y="73" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="8.5">firma</text>
        <circle r="3.5" fill="#d9bf8a"><animateMotion path="M160 82 L206 82" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
        <line x1="349" y1="82" x2="400" y2="82" stroke="#2a2a30" stroke-width="2"/>
        <line x1="349" y1="82" x2="400" y2="82" stroke="url(#cu-g)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/></line>
        <path d="M393 78 l6 4 l-6 4" fill="none" stroke="#4a8c5c" stroke-width="1.4"/>
        <circle r="3.5" fill="#7fc99a"><animateMotion path="M349 82 L395 82" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
        <g transform="translate(34,148)">
          <circle cx="0" cy="0" r="5" fill="none" stroke="#4a6fa5" stroke-width="1.6"/>
          <line x1="4" y1="0" x2="15" y2="0" stroke="#4a6fa5" stroke-width="1.6"/>
          <line x1="11" y1="0" x2="11" y2="4" stroke="#4a6fa5" stroke-width="1.6"/>
          <line x1="15" y1="0" x2="15" y2="4" stroke="#4a6fa5" stroke-width="1.6"/>
          <animate attributeName="opacity" values="0.55;1;0.55" dur="2.4s" repeatCount="indefinite"/>
        </g>
        <text x="56" y="152" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="9">tu llave se queda</text>
        <text x="280" y="182" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8.5">On-chain se verifican ambas firmas · tu USDC solo se mueve por tu permit</text>
      </svg>
      <svg viewBox="0 0 300 400" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="cu-gv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <text x="150" y="18" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Cruza la firma, no la llave</text>
        <g>
          <rect x="30" y="34" width="240" height="76" rx="12" fill="#131318" stroke="#4a6fa5" stroke-width="1.4"/>
          <text x="150" y="58" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="14" font-weight="600">Tu wallet</text>
          <text x="150" y="80" text-anchor="middle" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="10">Firmas el permit · EIP-2612</text>
          <g transform="translate(98,96)">
            <circle cx="0" cy="0" r="5" fill="none" stroke="#4a6fa5" stroke-width="1.6"/>
            <line x1="4" y1="0" x2="14" y2="0" stroke="#4a6fa5" stroke-width="1.6"/>
            <line x1="11" y1="0" x2="11" y2="4" stroke="#4a6fa5" stroke-width="1.6"/>
            <line x1="14" y1="0" x2="14" y2="4" stroke="#4a6fa5" stroke-width="1.6"/>
          </g>
          <text x="116" y="100" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="9.5">la llave se queda</text>
        </g>
        <line x1="150" y1="110" x2="150" y2="146" stroke="url(#cu-gv)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/></line>
        <path d="M146 140 l4 6 l4 -6" fill="none" stroke="#C8A96E" stroke-width="1.4"/>
        <circle r="3.5" fill="#d9bf8a"><animateMotion path="M150 110 L150 142" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
        <text x="166" y="132" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="9">firma</text>
        <g>
          <rect x="30" y="148" width="240" height="76" rx="12" fill="#131318" stroke="#C8A96E" stroke-width="1.4"/>
          <text x="150" y="174" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13.5" font-weight="600">Relayer de Grooves</text>
          <text x="150" y="195" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="10">firma la autorización</text>
          <text x="150" y="212" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="10">envía la tx · paga el gas</text>
        </g>
        <line x1="150" y1="224" x2="150" y2="260" stroke="url(#cu-gv)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/></line>
        <path d="M146 254 l4 6 l4 -6" fill="none" stroke="#4a8c5c" stroke-width="1.4"/>
        <circle r="3.5" fill="#7fc99a"><animateMotion path="M150 224 L150 256" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
        <g>
          <rect x="30" y="262" width="240" height="76" rx="12" fill="#131318" stroke="#4a8c5c" stroke-width="1.4"/>
          <text x="150" y="294" text-anchor="middle" fill="#9fd9b4" font-family="'Spline Sans',sans-serif" font-size="14" font-weight="600">Tu Pressing</text>
          <text x="150" y="316" text-anchor="middle" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="10">llega a tu wallet</text>
        </g>
        <text x="150" y="364" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="9">On-chain se verifican ambas firmas.</text>
        <text x="150" y="380" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="9">Tu USDC solo se mueve por tu permit.</text>
      </svg>
      <div class="figure-cap">Fig. 7.2 — Compra no-custodia: cruza la firma, no la llave</div>
    </div>
    <p>A nivel de datos, el registro de cada usuario guarda solo su dirección pública —nunca una llave privada, una frase semilla ni una llave cifrada—. No existe en ningún punto del sistema un lugar donde Grooves pudiera custodiar la llave de un usuario, aunque quisiera.</p>

    <div class="callout">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/></svg>
      <p><strong>No-custodial, sin asteriscos.</strong> Grooves nunca tiene las llaves, nunca custodia los fondos y no puede mover, congelar ni acceder a los activos de ningún usuario. La propiedad vive en la wallet del usuario; la plataforma solo facilita y atestigua.</p>
    </div>

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
      <div class="card"><span class="card-tag">Roadmap</span><h4>Multi-chain</h4><p>Soporte para redes adicionales EVM-compatibles y una biblioteca unificada del usuario entre chains.</p></div>
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
          <text x="140" y="164" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="10">Node.js · Fastify · Prisma · relayer · gas USDC</text>
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

    <h2>Gas, paid in USDC: the relayer</h2>
    <p>On the primary sale, the user doesn't need to hold the network's native cryptocurrency to pay the gas. A backend component — the <em>relayer</em> — records the operation on the blockchain on the user's behalf, fronting the gas in the native currency; that network cost is charged to the user in USDC, deducted transparently from the payment. They don't pay gas in the native currency, but they do cover its cost in USDC, and the biggest barrier for a new user disappears: obtaining the gas token before buying.</p>

    <p><strong>Creating works the same way.</strong> The same mechanism covers the creation of Pressings: the artist signs an authorization — an EIP-2612 permit — and the relayer fronts the native currency to register the work; the network cost is charged in USDC, atomically, without the creator needing the native cryptocurrency and without Grooves ever holding their funds.</p>

    <h2>How the money is split on-chain</h2>
    <p>Each Edition's split — the wallets, their percentages and, where they exist, their expiration dates — does not live in an editable database: it is reduced to a hash that the backend <strong>signs inside the creation voucher</strong>. That signature is what the contract requires to create the Pressing. If anyone tried to alter a single wallet or a single percentage, the hash would change, the signature would no longer match, and the contract would reject the operation. Neither the artist nor Grooves can inject or modify who gets paid.</p>

    <div class="figure">
          <svg viewBox="0 0 560 250" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="atom-g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
            </defs>
            <text x="280" y="18" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">The split is signed into the voucher · paid in a single tx</text>

            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.4s" fill="freeze"/>
              <rect x="14" y="78" width="150" height="74" rx="12" fill="#131318" stroke="#4a6fa5" stroke-width="1.4"/>
              <g transform="translate(30,98)">
                <rect x="0" y="6" width="16" height="11" rx="2" fill="none" stroke="#8fa8d0" stroke-width="1.6"/>
                <path d="M3 6 V3.5 a5 5 0 0 1 10 0 V6" fill="none" stroke="#8fa8d0" stroke-width="1.6"/>
              </g>
              <text x="56" y="105" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Split</text>
              <text x="89" y="127" text-anchor="middle" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="9">keccak(wallets+%)</text>
              <text x="89" y="142" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">N wallets · % · dates</text>
            </g>

            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.65s" fill="freeze"/>
              <line x1="164" y1="115" x2="206" y2="115" stroke="url(#atom-g)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/></line>
              <path d="M199 111 l6 4 l-6 4" fill="none" stroke="#C8A96E" stroke-width="1.4"/>
              <text x="185" y="106" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="8.5">sign</text>
              <circle r="3.5" fill="#d9bf8a"><animateMotion path="M164 115 L201 115" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
            </g>

            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/>
              <rect x="206" y="86" width="92" height="58" rx="12" fill="#131318" stroke="#C8A96E" stroke-width="1.4"/>
              <text x="252" y="110" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12.5" font-weight="600">Voucher</text>
              <text x="252" y="128" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">sealed</text>
            </g>

            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.15s" fill="freeze"/>
              <line x1="298" y1="115" x2="338" y2="115" stroke="url(#atom-g)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/></line>
              <path d="M331 111 l6 4 l-6 4" fill="none" stroke="#C8A96E" stroke-width="1.4"/>
              <text x="318" y="106" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">verify</text>
              <circle r="3.5" fill="#C8A96E"><animateMotion path="M298 115 L333 115" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
            </g>

            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.4s" fill="freeze"/>
              <circle cx="372" cy="115" r="34" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/>
              <text x="372" y="111" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Contract</text>
              <text x="372" y="126" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8">verifies sig</text>
            </g>

            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.65s" fill="freeze"/>
              <path d="M406 99 Q455 78 488 64" fill="none" stroke="#C8A96E" stroke-width="1.4" opacity="0.5"/>
              <path d="M406 115 Q455 115 488 115" fill="none" stroke="#4a6fa5" stroke-width="1.4" opacity="0.5"/>
              <path d="M406 131 Q455 152 488 166" fill="none" stroke="#4a8c5c" stroke-width="1.4" opacity="0.5"/>
              <circle r="3" fill="#d9bf8a"><animateMotion path="M406 99 Q455 78 488 64" dur="1.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.3s" repeatCount="indefinite"/></circle>
              <circle r="3" fill="#8fa8d0"><animateMotion path="M406 115 Q455 115 488 115" dur="1.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.3s" repeatCount="indefinite"/></circle>
              <circle r="3" fill="#7fc99a"><animateMotion path="M406 131 Q455 152 488 166" dur="1.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.3s" repeatCount="indefinite"/></circle>
            </g>

            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.85s" fill="freeze"/>
              <rect x="488" y="50" width="62" height="28" rx="8" fill="#131318" stroke="#C8A96E" stroke-width="1.3"/>
              <text x="519" y="68" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="10.5" font-weight="600">Payee 1</text>
              <rect x="488" y="101" width="62" height="28" rx="8" fill="#131318" stroke="#4a6fa5" stroke-width="1.3"/>
              <text x="519" y="119" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10.5" font-weight="600">Payee 2</text>
              <rect x="488" y="152" width="62" height="28" rx="8" fill="#131318" stroke="#4a8c5c" stroke-width="1.3"/>
              <text x="519" y="170" text-anchor="middle" fill="#7fc99a" font-family="'Spline Sans',sans-serif" font-size="10.5" font-weight="600">Payee 3</text>
            </g>

            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="2.1s" fill="freeze"/>
              <text x="447" y="210" text-anchor="middle" fill="#C8A96E" font-family="'Fraunces',serif" font-size="22" font-weight="600">1 single tx</text>
              <text x="447" y="226" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">atomic payout · inline</text>
            </g>

            <text x="89" y="200" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8.5">if the signature</text>
            <text x="89" y="214" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8.5">mismatches, it reverts</text>
          </svg>
          <svg viewBox="0 0 300 390" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="atom-gv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
            </defs>
            <text x="150" y="18" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Signed into the voucher · single tx</text>

            <g>
              <rect x="50" y="30" width="200" height="64" rx="12" fill="#131318" stroke="#4a6fa5" stroke-width="1.4"/>
              <g transform="translate(70,48)">
                <rect x="0" y="6" width="16" height="11" rx="2" fill="none" stroke="#8fa8d0" stroke-width="1.6"/>
                <path d="M3 6 V3.5 a5 5 0 0 1 10 0 V6" fill="none" stroke="#8fa8d0" stroke-width="1.6"/>
              </g>
              <text x="96" y="56" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Split</text>
              <text x="150" y="78" text-anchor="middle" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="9.5">keccak(wallets+%)</text>
            </g>
            <line x1="150" y1="94" x2="150" y2="128" stroke="url(#atom-gv)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/></line>
            <path d="M146 122 l4 6 l4 -6" fill="none" stroke="#C8A96E" stroke-width="1.4"/>
            <text x="166" y="116" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="9">sign</text>
            <circle r="3.5" fill="#d9bf8a"><animateMotion path="M150 94 L150 124" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>

            <g>
              <rect x="80" y="130" width="140" height="50" rx="12" fill="#131318" stroke="#C8A96E" stroke-width="1.4"/>
              <text x="150" y="152" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Voucher</text>
              <text x="150" y="170" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">sealed</text>
            </g>
            <line x1="150" y1="180" x2="150" y2="214" stroke="url(#atom-gv)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/></line>
            <path d="M146 208 l4 6 l4 -6" fill="none" stroke="#C8A96E" stroke-width="1.4"/>
            <text x="166" y="202" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">verify</text>
            <circle r="3.5" fill="#C8A96E"><animateMotion path="M150 180 L150 210" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>

            <g>
              <circle cx="150" cy="244" r="30" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/>
              <text x="150" y="241" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Contract</text>
              <text x="150" y="256" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8">verifies sig</text>
            </g>

            <path d="M126 264 Q70 300 48 322" fill="none" stroke="#C8A96E" stroke-width="1.4" opacity="0.5"/>
            <path d="M150 274 Q150 300 150 322" fill="none" stroke="#4a6fa5" stroke-width="1.4" opacity="0.5"/>
            <path d="M174 264 Q230 300 252 322" fill="none" stroke="#4a8c5c" stroke-width="1.4" opacity="0.5"/>
            <circle r="3" fill="#d9bf8a"><animateMotion path="M126 264 Q70 300 48 322" dur="1.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.3s" repeatCount="indefinite"/></circle>
            <circle r="3" fill="#8fa8d0"><animateMotion path="M150 274 Q150 300 150 322" dur="1.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.3s" repeatCount="indefinite"/></circle>
            <circle r="3" fill="#7fc99a"><animateMotion path="M174 264 Q230 300 252 322" dur="1.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.3s" repeatCount="indefinite"/></circle>

            <rect x="20" y="322" width="56" height="26" rx="8" fill="#131318" stroke="#C8A96E" stroke-width="1.3"/>
            <text x="48" y="339" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="10" font-weight="600">Payee 1</text>
            <rect x="122" y="322" width="56" height="26" rx="8" fill="#131318" stroke="#4a6fa5" stroke-width="1.3"/>
            <text x="150" y="339" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10" font-weight="600">Payee 2</text>
            <rect x="224" y="322" width="56" height="26" rx="8" fill="#131318" stroke="#4a8c5c" stroke-width="1.3"/>
            <text x="252" y="339" text-anchor="middle" fill="#7fc99a" font-family="'Spline Sans',sans-serif" font-size="10" font-weight="600">Payee 3</text>

            <text x="150" y="372" text-anchor="middle" fill="#C8A96E" font-family="'Fraunces',serif" font-size="16" font-weight="600">1 single tx · atomic payout</text>
            <text x="150" y="386" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8.5">if the signature mismatches, it reverts</text>
          </svg>
          <div class="figure-cap">Fig. 7.3 — The split is signed into the voucher and paid atomically</div>
        </div>

    <p><strong>Primary: atomic distribution.</strong> On the primary sale, distribution happens <em>inline</em>, within the same purchase transaction: the contract verifies the signatures and pays each of the up to 20 recipients in one go. There is no second step, no balance for anyone to distribute later; either everyone is paid correctly, or the whole transaction reverts.</p>
    <p><strong>Resale: one splitter per Edition.</strong> For resale royalties, each Edition's royalty receiver (EIP-2981) is its <strong>own splitter contract</strong> — a lightweight, cheap-to-deploy clone. Royalties from every resale accumulate there, and an automated Grooves process — a cron, whose gas the platform pays — periodically calls its distribution function, which pays out the balance to each wallet by the fixed percentages; the rounding remainder goes to the last in the list so the books close to the cent.</p>

    <div class="figure">
          <svg viewBox="0 0 560 270" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="splt-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
            </defs>
            <!-- cron / clock above the splitter -->
            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.3s" fill="freeze"/>
              <g transform="translate(280,24)">
                <circle cx="0" cy="0" r="11" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/>
                <line x1="0" y1="0" x2="0" y2="-6" stroke="#C8A96E" stroke-width="1.6"/>
                <line x1="0" y1="0" x2="4.5" y2="2.5" stroke="#C8A96E" stroke-width="1.6"/>
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.4s" repeatCount="indefinite"/>
              </g>
              <text x="300" y="22" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="10">cron · distribute()</text>
              <text x="300" y="35" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8.5">Grooves pays the gas</text>
            </g>
            <line x1="280" y1="36" x2="280" y2="88" stroke="url(#splt-g)" stroke-width="2" stroke-dasharray="4 4"><animate attributeName="stroke-dashoffset" values="16;0" dur="1s" repeatCount="indefinite"/></line>
            <!-- resales entering from the left -->
            <g font-family="'Spline Sans',sans-serif" font-size="11">
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.45s" fill="freeze"/>
                <text x="20" y="82" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9.5">resale #1</text>
                <text x="20" y="95" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9.5">+3 USDC</text>
                <path d="M98 90 Q150 100 196 116" fill="none" stroke="#C8A96E" stroke-width="1.4" opacity="0.5"/>
                <circle r="3" fill="#d9bf8a"><animateMotion path="M98 90 Q150 100 196 116" dur="1.7s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" repeatCount="indefinite"/></circle>
              </g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.65s" fill="freeze"/>
                <text x="20" y="135" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9.5">resale #2</text>
                <text x="20" y="148" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9.5">+3 USDC</text>
                <path d="M98 138 L196 138" fill="none" stroke="#C8A96E" stroke-width="1.4" opacity="0.5"/>
                <circle r="3" fill="#d9bf8a"><animateMotion path="M98 138 L196 138" dur="1.7s" begin="0.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" begin="0.4s" repeatCount="indefinite"/></circle>
              </g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.85s" fill="freeze"/>
                <text x="20" y="188" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9.5">resale #3</text>
                <text x="20" y="201" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9.5">+3 USDC</text>
                <path d="M98 186 Q150 176 196 160" fill="none" stroke="#C8A96E" stroke-width="1.4" opacity="0.5"/>
                <circle r="3" fill="#d9bf8a"><animateMotion path="M98 186 Q150 176 196 160" dur="1.7s" begin="0.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" begin="0.8s" repeatCount="indefinite"/></circle>
              </g>
            </g>
            <!-- central node: Edition splitter -->
            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.55s" fill="freeze"/>
              <rect x="196" y="88" width="168" height="86" rx="14" fill="#131318" stroke="url(#splt-g)" stroke-width="1.8"/>
              <text x="280" y="116" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Edition splitter</text>
              <text x="280" y="137" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">EIP-2981 receiver</text>
              <text x="280" y="159" text-anchor="middle" fill="#C8A96E" font-family="'Fraunces',serif" font-size="17" font-weight="600">balance: 9 USDC</text>
            </g>
            <!-- fan-out on the right: 3 wallets -->
            <g font-family="'Spline Sans',sans-serif">
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.1s" fill="freeze"/>
                <path d="M364 116 Q418 96 452 78" fill="none" stroke="#C8A96E" stroke-width="1.4" opacity="0.5"/>
                <circle r="3" fill="#d9bf8a"><animateMotion path="M364 116 Q418 96 452 78" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
                <rect x="452" y="60" width="100" height="40" rx="10" fill="#131318" stroke="#C8A96E" stroke-width="1.4"/>
                <text x="502" y="78" text-anchor="middle" fill="#d9bf8a" font-size="12" font-weight="600">Artist 50%</text>
                <text x="502" y="92" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">4.5 USDC</text>
              </g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.3s" fill="freeze"/>
                <path d="M364 131 L452 131" fill="none" stroke="#4a6fa5" stroke-width="1.4" opacity="0.55"/>
                <circle r="3" fill="#8fa8d0"><animateMotion path="M364 131 L452 131" dur="1.6s" begin="0.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" begin="0.3s" repeatCount="indefinite"/></circle>
                <rect x="452" y="111" width="100" height="40" rx="10" fill="#131318" stroke="#4a6fa5" stroke-width="1.4"/>
                <text x="502" y="129" text-anchor="middle" fill="#cdd9ee" font-size="12" font-weight="600">Producer 30%</text>
                <text x="502" y="143" text-anchor="middle" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="8.5">2.7 USDC</text>
              </g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.5s" fill="freeze"/>
                <path d="M364 146 Q418 166 452 184" fill="none" stroke="#4a8c5c" stroke-width="1.4" opacity="0.55"/>
                <circle r="3" fill="#7fc99a"><animateMotion path="M364 146 Q418 166 452 184" dur="1.6s" begin="0.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" begin="0.6s" repeatCount="indefinite"/></circle>
                <rect x="452" y="162" width="100" height="40" rx="10" fill="#131318" stroke="#4a8c5c" stroke-width="1.4"/>
                <text x="502" y="180" text-anchor="middle" fill="#9fd9b4" font-size="12" font-weight="600">Featuring 20%</text>
                <text x="502" y="194" text-anchor="middle" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="8.5">1.8 USDC</text>
              </g>
            </g>
            <!-- mono note -->
            <text x="280" y="246" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8.5">1 splitter per Edition · enforced in the Grooves market</text>
          </svg>
          <svg viewBox="0 0 300 410" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="splt-gv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
            </defs>
            <!-- resales on top -->
            <g font-family="'JetBrains Mono',monospace" font-size="9.5">
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.35s" fill="freeze"/>
                <rect x="14" y="16" width="78" height="36" rx="9" fill="#131318" stroke="#C8A96E" stroke-width="1.2"/>
                <text x="53" y="33" text-anchor="middle" fill="#9a978f">resale #1</text>
                <text x="53" y="46" text-anchor="middle" fill="#C8A96E">+3 USDC</text>
              </g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.5s" fill="freeze"/>
                <rect x="111" y="16" width="78" height="36" rx="9" fill="#131318" stroke="#C8A96E" stroke-width="1.2"/>
                <text x="150" y="33" text-anchor="middle" fill="#9a978f">resale #2</text>
                <text x="150" y="46" text-anchor="middle" fill="#C8A96E">+3 USDC</text>
              </g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.65s" fill="freeze"/>
                <rect x="208" y="16" width="78" height="36" rx="9" fill="#131318" stroke="#C8A96E" stroke-width="1.2"/>
                <text x="247" y="33" text-anchor="middle" fill="#9a978f">resale #3</text>
                <text x="247" y="46" text-anchor="middle" fill="#C8A96E">+3 USDC</text>
              </g>
            </g>
            <path d="M53 52 Q53 70 145 84" fill="none" stroke="#C8A96E" stroke-width="1.3" opacity="0.5"/>
            <path d="M150 52 L150 84" fill="none" stroke="#C8A96E" stroke-width="1.3" opacity="0.5"/>
            <path d="M247 52 Q247 70 155 84" fill="none" stroke="#C8A96E" stroke-width="1.3" opacity="0.5"/>
            <circle r="3" fill="#d9bf8a"><animateMotion path="M150 52 L150 84" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
            <!-- cron next to the splitter -->
            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.8s" fill="freeze"/>
              <g transform="translate(40,118)">
                <circle cx="0" cy="0" r="10" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/>
                <line x1="0" y1="0" x2="0" y2="-5.5" stroke="#C8A96E" stroke-width="1.6"/>
                <line x1="0" y1="0" x2="4" y2="2.5" stroke="#C8A96E" stroke-width="1.6"/>
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.4s" repeatCount="indefinite"/>
              </g>
              <text x="58" y="116" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="9.5">cron · distribute()</text>
              <text x="58" y="128" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8">Grooves pays the gas</text>
            </g>
            <!-- splitter node -->
            <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/>
              <rect x="40" y="138" width="220" height="78" rx="14" fill="#131318" stroke="url(#splt-gv)" stroke-width="1.8"/>
              <text x="150" y="164" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Edition splitter</text>
              <text x="150" y="182" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">EIP-2981 receiver</text>
              <text x="150" y="204" text-anchor="middle" fill="#C8A96E" font-family="'Fraunces',serif" font-size="17" font-weight="600">balance: 9 USDC</text>
            </g>
            <line x1="150" y1="216" x2="150" y2="246" stroke="url(#splt-gv)" stroke-width="2" stroke-dasharray="4 4"><animate attributeName="stroke-dashoffset" values="16;0" dur="1s" repeatCount="indefinite"/></line>
            <circle r="3" fill="#d9bf8a"><animateMotion path="M150 216 L150 246" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
            <!-- fan-out to 3 wallets -->
            <g font-family="'Spline Sans',sans-serif" font-size="12">
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.2s" fill="freeze"/>
                <rect x="14" y="248" width="88" height="48" rx="10" fill="#131318" stroke="#C8A96E" stroke-width="1.4"/>
                <text x="58" y="270" text-anchor="middle" fill="#d9bf8a" font-weight="600">Artist 50%</text>
                <text x="58" y="285" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">4.5 USDC</text>
              </g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.4s" fill="freeze"/>
                <rect x="106" y="248" width="88" height="48" rx="10" fill="#131318" stroke="#4a6fa5" stroke-width="1.4"/>
                <text x="150" y="270" text-anchor="middle" fill="#cdd9ee" font-weight="600">Producer</text>
                <text x="150" y="285" text-anchor="middle" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="8.5">30% · 2.7</text>
              </g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.6s" fill="freeze"/>
                <rect x="198" y="248" width="88" height="48" rx="10" fill="#131318" stroke="#4a8c5c" stroke-width="1.4"/>
                <text x="242" y="270" text-anchor="middle" fill="#9fd9b4" font-weight="600">Featuring</text>
                <text x="242" y="285" text-anchor="middle" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="8.5">20% · 1.8</text>
              </g>
            </g>
            <path d="M150 246 Q90 240 58 248" fill="none" stroke="#C8A96E" stroke-width="1.2" opacity="0.45"/>
            <path d="M150 246 L150 248" fill="none" stroke="#4a6fa5" stroke-width="1.2" opacity="0.5"/>
            <path d="M150 246 Q210 240 242 248" fill="none" stroke="#4a8c5c" stroke-width="1.2" opacity="0.5"/>
            <text x="150" y="338" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8.5">1 splitter per Edition</text>
            <text x="150" y="352" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8.5">enforced in the Grooves market</text>
          </svg>
          <div class="figure-cap">Fig. 7.4 — One splitter per Edition pays the royalty to each wallet</div>
        </div>

    <p>As with the rest of the model, all of this is <strong>immutable after publishing</strong>: the split is edited freely while the Edition is a draft and, once anchored, is fixed on the blockchain. Within the Grooves marketplace enforcement is total; on external marketplaces, by the nature of the royalty standard, it is best-effort.</p>

    <h2>Custody and wallets: the keys belong to the user</h2>
    <p>Grooves is <strong>non-custodial</strong> — not as a marketing stance but as a property of the architecture. To buy or own, the user <strong>connects their own wallet in one click</strong> — the one they already control; Grooves does not generate, store, or have access to any user's private key, and never creates a wallet on anyone's behalf. The backend operates with a single key of its own — the signer/relayer key — whose functions are limited to two: signing the authorizations the contracts require, and paying gas when relaying transactions. That key can never move a user's assets.</p>
    <p>The division of responsibilities is strict and verifiable on-chain:</p>
    <ul>
      <li><strong>You sign your own assets.</strong> On a purchase, the only thing you sign — and the only EIP-712 message you sign — is an EIP-2612 <em>permit</em>: authorization for your USDC, and only yours, to move in that operation. On a creation, you sign your own transaction directly. Without your signature, nothing moves.</li>
      <li><strong>The backend signs the mint authorization.</strong> Its signature is a <em>voucher</em> that enables creating the Pressing under the platform's rules: a seal that allows or blocks, but transfers neither funds nor Pressings. A gatekeeper role, not a custodian.</li>
      <li><strong>The relayer sends the transaction and pays the gas.</strong> It carries both signatures to the blockchain on your behalf and covers the network fee, without ever touching your assets.</li>
      <li><strong>The contract verifies both signatures on-chain.</strong> It checks your permit and the backend's authorization before acting; your USDC moves only because you signed it, and the Pressing is recorded under your name.</li>
    </ul>

    <div class="figure">
      <svg viewBox="0 0 560 200" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="cu-g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <text x="280" y="20" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">The signature travels — the key stays in your wallet</text>
        <g>
          <rect x="22" y="42" width="138" height="80" rx="12" fill="#131318" stroke="#4a6fa5" stroke-width="1.4"/>
          <text x="91" y="69" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Your wallet</text>
          <text x="91" y="90" text-anchor="middle" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="9.5">You sign the permit</text>
          <text x="91" y="107" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9.5">EIP-2612</text>
        </g>
        <g>
          <rect x="211" y="42" width="138" height="80" rx="12" fill="#131318" stroke="#C8A96E" stroke-width="1.4"/>
          <text x="280" y="67" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Grooves relayer</text>
          <text x="280" y="88" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">signs the authorization</text>
          <text x="280" y="104" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">sends the tx · pays gas</text>
        </g>
        <g>
          <rect x="400" y="42" width="138" height="80" rx="12" fill="#131318" stroke="#4a8c5c" stroke-width="1.4"/>
          <text x="469" y="69" text-anchor="middle" fill="#9fd9b4" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Your Pressing</text>
          <text x="469" y="92" text-anchor="middle" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="9.5">lands in your wallet</text>
        </g>
        <line x1="160" y1="82" x2="211" y2="82" stroke="#2a2a30" stroke-width="2"/>
        <line x1="160" y1="82" x2="211" y2="82" stroke="url(#cu-g)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/></line>
        <path d="M204 78 l6 4 l-6 4" fill="none" stroke="#C8A96E" stroke-width="1.4"/>
        <text x="185" y="73" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="8.5">signature</text>
        <circle r="3.5" fill="#d9bf8a"><animateMotion path="M160 82 L206 82" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
        <line x1="349" y1="82" x2="400" y2="82" stroke="#2a2a30" stroke-width="2"/>
        <line x1="349" y1="82" x2="400" y2="82" stroke="url(#cu-g)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/></line>
        <path d="M393 78 l6 4 l-6 4" fill="none" stroke="#4a8c5c" stroke-width="1.4"/>
        <circle r="3.5" fill="#7fc99a"><animateMotion path="M349 82 L395 82" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
        <g transform="translate(34,148)">
          <circle cx="0" cy="0" r="5" fill="none" stroke="#4a6fa5" stroke-width="1.6"/>
          <line x1="4" y1="0" x2="15" y2="0" stroke="#4a6fa5" stroke-width="1.6"/>
          <line x1="11" y1="0" x2="11" y2="4" stroke="#4a6fa5" stroke-width="1.6"/>
          <line x1="15" y1="0" x2="15" y2="4" stroke="#4a6fa5" stroke-width="1.6"/>
          <animate attributeName="opacity" values="0.55;1;0.55" dur="2.4s" repeatCount="indefinite"/>
        </g>
        <text x="56" y="152" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="9">your key stays</text>
        <text x="280" y="182" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="8.5">On-chain both signatures are verified · your USDC only moves by your permit</text>
      </svg>
      <svg viewBox="0 0 300 400" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="cu-gv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <text x="150" y="18" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">The signature travels, not the key</text>
        <g>
          <rect x="30" y="34" width="240" height="76" rx="12" fill="#131318" stroke="#4a6fa5" stroke-width="1.4"/>
          <text x="150" y="58" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="14" font-weight="600">Your wallet</text>
          <text x="150" y="80" text-anchor="middle" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="10">You sign the permit · EIP-2612</text>
          <g transform="translate(98,96)">
            <circle cx="0" cy="0" r="5" fill="none" stroke="#4a6fa5" stroke-width="1.6"/>
            <line x1="4" y1="0" x2="14" y2="0" stroke="#4a6fa5" stroke-width="1.6"/>
            <line x1="11" y1="0" x2="11" y2="4" stroke="#4a6fa5" stroke-width="1.6"/>
            <line x1="14" y1="0" x2="14" y2="4" stroke="#4a6fa5" stroke-width="1.6"/>
          </g>
          <text x="116" y="100" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="9.5">the key stays</text>
        </g>
        <line x1="150" y1="110" x2="150" y2="146" stroke="url(#cu-gv)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/></line>
        <path d="M146 140 l4 6 l4 -6" fill="none" stroke="#C8A96E" stroke-width="1.4"/>
        <circle r="3.5" fill="#d9bf8a"><animateMotion path="M150 110 L150 142" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
        <text x="166" y="132" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="9">signature</text>
        <g>
          <rect x="30" y="148" width="240" height="76" rx="12" fill="#131318" stroke="#C8A96E" stroke-width="1.4"/>
          <text x="150" y="174" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13.5" font-weight="600">Grooves relayer</text>
          <text x="150" y="195" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="10">signs the authorization</text>
          <text x="150" y="212" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="10">sends the tx · pays the gas</text>
        </g>
        <line x1="150" y1="224" x2="150" y2="260" stroke="url(#cu-gv)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/></line>
        <path d="M146 254 l4 6 l4 -6" fill="none" stroke="#4a8c5c" stroke-width="1.4"/>
        <circle r="3.5" fill="#7fc99a"><animateMotion path="M150 224 L150 256" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite"/></circle>
        <g>
          <rect x="30" y="262" width="240" height="76" rx="12" fill="#131318" stroke="#4a8c5c" stroke-width="1.4"/>
          <text x="150" y="294" text-anchor="middle" fill="#9fd9b4" font-family="'Spline Sans',sans-serif" font-size="14" font-weight="600">Your Pressing</text>
          <text x="150" y="316" text-anchor="middle" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="10">lands in your wallet</text>
        </g>
        <text x="150" y="364" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="9">On-chain both signatures are verified.</text>
        <text x="150" y="380" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="9">Your USDC only moves by your permit.</text>
      </svg>
      <div class="figure-cap">Fig. 7.2 — Non-custodial purchase: the signature travels, not the key</div>
    </div>
    <p>At the data level, each user's record stores only their public address — never a private key, a seed phrase, or an encrypted key. There is no point anywhere in the system where Grooves could take custody of a user's key, even if it wanted to.</p>

    <div class="callout">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/></svg>
      <p><strong>Non-custodial, no asterisks.</strong> Grooves never holds the keys, never takes custody of funds, and cannot move, freeze, or access anyone's assets. Ownership lives in the user's wallet; the platform only facilitates and attests.</p>
    </div>

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
      <div class="card"><span class="card-tag">Roadmap</span><h4>Multi-chain</h4><p>Support for additional EVM-compatible networks and a unified user library across chains.</p></div>
    </div>

  `
});
