/* ============================================================
   CAPÍTULO 05 — CÓMO FUNCIONA
   Flujos: fan/coleccionista + onboarding sin fricción.
   Onboarding con tarjeta/PayPal = Roadmap. Gasless = Operativo.
   ============================================================ */
registerChapter('como-funciona', {
  order: 5,
  es: `
    <div class="ch-eyebrow">
      <span class="num">CAPÍTULO 05</span>
      <span class="rule"></span>
      <span class="ch-status op"><span class="dot"></span> Operativo</span>
    </div>

    <h1 class="ch-title">Cómo funciona, <em>sin fricción</em></h1>
    <p class="ch-lead">Para que Grooves sea accesible a cualquier fan y artista —no solo a quienes ya entienden de criptografía— la plataforma elimina toda fricción técnica del proceso. La tecnología es invisible.</p>

    <h2>El flujo del coleccionista</h2>

    <div class="figure">
      <svg viewBox="0 0 600 130" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="cf-g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <line x1="55" y1="55" x2="545" y2="55" stroke="#2a2a30" stroke-width="2"/>
        <line x1="55" y1="55" x2="545" y2="55" stroke="url(#cf-g)" stroke-width="2" stroke-dasharray="490" stroke-dashoffset="490"><animate attributeName="stroke-dashoffset" values="490;0" dur="1.8s" fill="freeze"/></line>
        <g font-family="'Spline Sans',sans-serif" font-size="11" fill="#c9c6bd" text-anchor="middle">
          <g><circle cx="55" cy="55" r="14" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/><text x="55" y="59" fill="#C8A96E" font-family="'JetBrains Mono'">1</text><text x="55" y="92">Explora</text></g>
          <g><circle cx="177" cy="55" r="14" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/><text x="177" y="59" fill="#C8A96E" font-family="'JetBrains Mono'">2</text><text x="177" y="92">Adquiere</text></g>
          <g><circle cx="300" cy="55" r="14" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/><text x="300" y="59" fill="#C8A96E" font-family="'JetBrains Mono'">3</text><text x="300" y="92">Reproduce</text></g>
          <g><circle cx="423" cy="55" r="14" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/><text x="423" y="59" fill="#C8A96E" font-family="'JetBrains Mono'">4</text><text x="423" y="92">Desbloquea</text></g>
          <g><circle cx="545" cy="55" r="14" fill="#2e2a1a" stroke="#C8A96E" stroke-width="1.6"/><text x="545" y="59" fill="#C8A96E" font-family="'JetBrains Mono'">5</text><text x="545" y="92">Revende</text></g>
        </g>
      </svg>
      <svg viewBox="0 0 300 360" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="cf-gv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <line x1="36" y1="30" x2="36" y2="330" stroke="#2a2a30" stroke-width="2"/>
        <line x1="36" y1="30" x2="36" y2="330" stroke="url(#cf-gv)" stroke-width="2" stroke-dasharray="300" stroke-dashoffset="300"><animate attributeName="stroke-dashoffset" values="300;0" dur="1.8s" fill="freeze"/></line>
        <g font-family="'Spline Sans',sans-serif" font-size="13" fill="#c9c6bd">
          <g><circle cx="36" cy="36" r="15" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/><text x="36" y="41" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono'">1</text><text x="64" y="41">Explora el marketplace</text></g>
          <g><circle cx="36" cy="108" r="15" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/><text x="36" y="113" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono'">2</text><text x="64" y="113">Adquiere Pressings</text></g>
          <g><circle cx="36" cy="180" r="15" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/><text x="36" y="185" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono'">3</text><text x="64" y="185">Reproduce tu colección</text></g>
          <g><circle cx="36" cy="252" r="15" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/><text x="36" y="257" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono'">4</text><text x="64" y="257">Desbloquea tus derechos</text></g>
          <g><circle cx="36" cy="324" r="15" fill="#2e2a1a" stroke="#C8A96E" stroke-width="1.6"/><text x="36" y="329" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono'">5</text><text x="64" y="329">Revende si lo deseas</text></g>
        </g>
      </svg>
      <div class="figure-cap">Fig. 5.1 — El recorrido del fan</div>
    </div>

    <ol>
      <li><strong>Explora el marketplace.</strong> Descubre artistas, navega catálogos, escucha previews de 30 segundos sin necesidad de wallet.</li>
      <li><strong>Adquiere Pressings.</strong> Compra directamente del artista o en el mercado secundario.</li>
      <li><strong>Reproduce tu colección.</strong> Interfaz familiar: play, pause, cola, playlists. Cada pieza es tuya.</li>
      <li><strong>Accede a tus derechos.</strong> Podcasts, videos, entradas, partituras, comunidades: todo lo vinculado a tu Pressing.</li>
      <li><strong>Revende si lo deseas.</strong> Si un artista explota, tu Pressing se revaloriza. El artista cobra su royalty en cada reventa.</li>
    </ol>

    <h2>Tu wallet, siempre bajo tu control</h2>
    <p>Grooves es <strong>no-custodial</strong> por diseño: las llaves que controlan los activos de un usuario son siempre suyas, y solo suyas. La plataforma no genera, no guarda y no tiene acceso a ninguna llave privada de usuario, y no puede mover, congelar ni tocar los fondos o los Pressings de nadie. Toda transferencia de valor la autoriza el usuario, firmando desde su propia wallet; lo único que Grooves firma con su llave operativa son autorizaciones internas, nunca los activos del usuario.</p>
    <p>Hay dos formas de tener esa wallet, y las dos son no-custodiales:</p>
    <ul>
      <li><strong>Conectar una wallet externa.</strong> Quien ya tiene la suya —MetaMask u otra compatible vía WalletConnect, fría o caliente— la conecta y opera directamente. Las llaves nunca salen de su dispositivo.</li>
      <li><strong>Wallet integrada, sin fricción. <span class="rm-badge">Roadmap</span></strong> Para quien llega sin wallet, la plataforma generará una al instante a partir de su cuenta —email o redes—, sin instalar nada ni gestionar una seed phrase. Será no-custodial igual: las llaves se generan y se resguardan bajo el control exclusivo del usuario, mediante tecnologías como MPC o passkeys del propio dispositivo, de modo que solo él puede autorizar movimientos. Invisible en la experiencia, soberana en el control.</li>
    </ul>
    <p>En ambos caminos la regla es la misma e innegociable: las llaves son del usuario, no de Grooves.</p>

    <h2>Compra sin pagar gas</h2>
    <p>En la venta primaria, Grooves absorbe la complejidad de la blockchain con un sistema <em>gasless</em>: el usuario no necesita tener la criptomoneda nativa de la red para pagar las comisiones de transacción. El usuario autoriza la compra firmando desde su propia wallet, y un componente de Grooves (el relayer) la registra en la blockchain cubriendo el gas por él; el costo se descuenta de forma transparente. El fan solo ve el precio del Pressing — nada más.</p>

    <h2>Pago con tarjeta y PayPal</h2>
    <p>El fan no necesita comprar USDC por su cuenta. La interfaz integra servicios de conversión de moneda tradicional a digital directamente en la pantalla de compra. El usuario ve un botón que dice <em>"Pagar con tarjeta"</em> o <em>"Pagar con PayPal"</em>, ingresa sus datos, y el servicio convierte automáticamente el dinero y completa la compra. <span class="rm-badge">Roadmap</span></p>

    <div class="figure">
      <svg viewBox="0 0 600 110" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <g font-family="'Spline Sans',sans-serif" font-size="11" fill="#c9c6bd" text-anchor="middle">
          <rect x="30" y="40" width="96" height="40" rx="9" fill="#131318" stroke="#5a5852"/><text x="78" y="64">Ve un Pressing</text>
          <rect x="166" y="40" width="96" height="40" rx="9" fill="#2e2a1a" stroke="#C8A96E"/><text x="214" y="64" fill="#d9bf8a">Clic Comprar</text>
          <rect x="302" y="40" width="96" height="40" rx="9" fill="#131318" stroke="#5a5852"/><text x="350" y="60">Tarjeta /</text><text x="350" y="73">PayPal / Cripto</text>
          <rect x="438" y="40" width="132" height="40" rx="9" fill="#1a2e1a" stroke="#4a8c5c"/><text x="504" y="64" fill="#7fc99a">Recibe su Pressing</text>
          <path d="M126 60 h40 M262 60 h40 M398 60 h40" stroke="#C8A96E" stroke-width="1.5"/>
        </g>
      </svg>
      <svg viewBox="0 0 300 300" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <g font-family="'Spline Sans',sans-serif" font-size="12" fill="#c9c6bd" text-anchor="middle">
          <rect x="80" y="14" width="140" height="40" rx="9" fill="#131318" stroke="#5a5852"/><text x="150" y="39">Ve un Pressing</text>
          <path d="M150 54 v22" stroke="#C8A96E" stroke-width="1.5"/>
          <rect x="80" y="78" width="140" height="40" rx="9" fill="#2e2a1a" stroke="#C8A96E"/><text x="150" y="103" fill="#d9bf8a">Clic en Comprar</text>
          <path d="M150 118 v22" stroke="#C8A96E" stroke-width="1.5"/>
          <rect x="65" y="142" width="170" height="40" rx="9" fill="#131318" stroke="#5a5852"/><text x="150" y="167">Tarjeta / PayPal / Cripto</text>
          <path d="M150 182 v22" stroke="#C8A96E" stroke-width="1.5"/>
          <rect x="70" y="206" width="160" height="40" rx="9" fill="#1a2e1a" stroke="#4a8c5c"/><text x="150" y="231" fill="#7fc99a">Recibe su Pressing</text>
        </g>
      </svg>
      <div class="figure-cap">Fig. 5.2 — Comprar es como en cualquier tienda online</div>
    </div>

    <div class="callout note">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      <p>En ningún momento del proceso el usuario necesita saber qué es una wallet, qué es USDC ni qué es blockchain: la tecnología es invisible y la experiencia es idéntica a comprar en cualquier tienda online. Pero invisible no significa custodiada: aunque el usuario no la vea, la wallet y sus llaves son siempre suyas, nunca de Grooves.</p>
    </div>
  `,
  en: `
    <div class="ch-eyebrow">
      <span class="num">CHAPTER 05</span>
      <span class="rule"></span>
      <span class="ch-status op"><span class="dot"></span> Live</span>
    </div>

    <h1 class="ch-title">How it works, <em>frictionless</em></h1>
    <p class="ch-lead">For Grooves to be accessible to any fan and artist — not just those who already understand cryptography — the platform removes all technical friction from the process. The technology is invisible.</p>

    <h2>The collector's flow</h2>

    <div class="figure">
      <svg viewBox="0 0 600 130" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="cf-g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <line x1="55" y1="55" x2="545" y2="55" stroke="#2a2a30" stroke-width="2"/>
        <line x1="55" y1="55" x2="545" y2="55" stroke="url(#cf-g)" stroke-width="2" stroke-dasharray="490" stroke-dashoffset="490"><animate attributeName="stroke-dashoffset" values="490;0" dur="1.8s" fill="freeze"/></line>
        <g font-family="'Spline Sans',sans-serif" font-size="11" fill="#c9c6bd" text-anchor="middle">
          <g><circle cx="55" cy="55" r="14" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/><text x="55" y="59" fill="#C8A96E" font-family="'JetBrains Mono'">1</text><text x="55" y="92">Explore</text></g>
          <g><circle cx="177" cy="55" r="14" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/><text x="177" y="59" fill="#C8A96E" font-family="'JetBrains Mono'">2</text><text x="177" y="92">Acquire</text></g>
          <g><circle cx="300" cy="55" r="14" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/><text x="300" y="59" fill="#C8A96E" font-family="'JetBrains Mono'">3</text><text x="300" y="92">Play</text></g>
          <g><circle cx="423" cy="55" r="14" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/><text x="423" y="59" fill="#C8A96E" font-family="'JetBrains Mono'">4</text><text x="423" y="92">Unlock</text></g>
          <g><circle cx="545" cy="55" r="14" fill="#2e2a1a" stroke="#C8A96E" stroke-width="1.6"/><text x="545" y="59" fill="#C8A96E" font-family="'JetBrains Mono'">5</text><text x="545" y="92">Resell</text></g>
        </g>
      </svg>
      <svg viewBox="0 0 300 360" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="cf-gv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <line x1="36" y1="30" x2="36" y2="330" stroke="#2a2a30" stroke-width="2"/>
        <line x1="36" y1="30" x2="36" y2="330" stroke="url(#cf-gv)" stroke-width="2" stroke-dasharray="300" stroke-dashoffset="300"><animate attributeName="stroke-dashoffset" values="300;0" dur="1.8s" fill="freeze"/></line>
        <g font-family="'Spline Sans',sans-serif" font-size="13" fill="#c9c6bd">
          <g><circle cx="36" cy="36" r="15" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/><text x="36" y="41" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono'">1</text><text x="64" y="41">Explore the marketplace</text></g>
          <g><circle cx="36" cy="108" r="15" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/><text x="36" y="113" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono'">2</text><text x="64" y="113">Acquire Pressings</text></g>
          <g><circle cx="36" cy="180" r="15" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/><text x="36" y="185" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono'">3</text><text x="64" y="185">Play tu colección</text></g>
          <g><circle cx="36" cy="252" r="15" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/><text x="36" y="257" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono'">4</text><text x="64" y="257">Unlock tus derechos</text></g>
          <g><circle cx="36" cy="324" r="15" fill="#2e2a1a" stroke="#C8A96E" stroke-width="1.6"/><text x="36" y="329" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono'">5</text><text x="64" y="329">Resell si lo deseas</text></g>
        </g>
      </svg>
      <div class="figure-cap">Fig. 5.1 — The fan's journey</div>
    </div>

    <ol>
      <li><strong>Explore the marketplace.</strong> Discover artists, browse catalogs, listen to 30-second previews with no wallet required.</li>
      <li><strong>Acquire Pressings.</strong> Buy directly from the artist or on the secondary market.</li>
      <li><strong>Play your collection.</strong> A familiar interface: play, pause, queue, playlists. Every piece is yours.</li>
      <li><strong>Access your rights.</strong> Podcasts, videos, tickets, sheet music, communities — everything bound to your Pressing.</li>
      <li><strong>Resell if you wish.</strong> If an artist breaks out, your Pressing appreciates. The artist collects their royalty on every resale.</li>
    </ol>

    <h2>Your wallet, always under your control</h2>
    <p>Grooves is <strong>non-custodial</strong> by design: the keys that control a user's assets are always theirs, and theirs alone. The platform does not generate, store, or have access to any user's private key, and it cannot move, freeze, or touch anyone's funds or Pressings. Every transfer of value is authorized by the user, signing from their own wallet; the only thing Grooves signs with its operational key are internal authorizations, never the user's assets.</p>
    <p>There are two ways to hold that wallet, and both are non-custodial:</p>
    <ul>
      <li><strong>Connect an external wallet.</strong> Anyone who already has one — MetaMask or another compatible via WalletConnect, cold or hot — connects it and operates directly. The keys never leave their device.</li>
      <li><strong>Built-in wallet, frictionless. <span class="rm-badge">Roadmap</span></strong> For those who arrive without a wallet, the platform will generate one instantly from their account — email or social — with nothing to install and no seed phrase to manage. It will be non-custodial all the same: the keys are generated and secured under the user's exclusive control, through technologies such as MPC or device passkeys, so that only the user can authorize movements. Invisible in the experience, sovereign in control.</li>
    </ul>
    <p>On both paths the rule is the same and non-negotiable: the keys belong to the user, not to Grooves.</p>

    <h2>Buying without gas</h2>
    <p>On the primary sale, Grooves absorbs the blockchain's complexity with a <em>gasless</em> system: the user doesn't need to hold the network's native cryptocurrency to pay transaction fees. The user authorizes the purchase by signing from their own wallet, and a Grooves component (the relayer) records it on the blockchain, covering the gas on their behalf; the cost is deducted transparently. The fan only sees the Pressing's price — nothing else.</p>

    <h2>Card and PayPal payments</h2>
    <p>The fan doesn't need to buy USDC themselves. The interface integrates traditional-to-digital currency conversion services right on the purchase screen. The user sees a button that says <em>"Pay with card"</em> or <em>"Pay with PayPal,"</em> enters their details, and the service automatically converts the money and completes the purchase. <span class="rm-badge">Roadmap</span></p>

    <div class="figure">
      <svg viewBox="0 0 600 110" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <g font-family="'Spline Sans',sans-serif" font-size="11" fill="#c9c6bd" text-anchor="middle">
          <rect x="30" y="40" width="96" height="40" rx="9" fill="#131318" stroke="#5a5852"/><text x="78" y="64">Sees a Pressing</text>
          <rect x="166" y="40" width="96" height="40" rx="9" fill="#2e2a1a" stroke="#C8A96E"/><text x="214" y="64" fill="#d9bf8a">Click Buy</text>
          <rect x="302" y="40" width="96" height="40" rx="9" fill="#131318" stroke="#5a5852"/><text x="350" y="60">Card /</text><text x="350" y="73">PayPal / Crypto</text>
          <rect x="438" y="40" width="132" height="40" rx="9" fill="#1a2e1a" stroke="#4a8c5c"/><text x="504" y="64" fill="#7fc99a">Receives their Pressing</text>
          <path d="M126 60 h40 M262 60 h40 M398 60 h40" stroke="#C8A96E" stroke-width="1.5"/>
        </g>
      </svg>
      <svg viewBox="0 0 300 300" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <g font-family="'Spline Sans',sans-serif" font-size="12" fill="#c9c6bd" text-anchor="middle">
          <rect x="80" y="14" width="140" height="40" rx="9" fill="#131318" stroke="#5a5852"/><text x="150" y="39">Sees a Pressing</text>
          <path d="M150 54 v22" stroke="#C8A96E" stroke-width="1.5"/>
          <rect x="80" y="78" width="140" height="40" rx="9" fill="#2e2a1a" stroke="#C8A96E"/><text x="150" y="103" fill="#d9bf8a">Click Buy</text>
          <path d="M150 118 v22" stroke="#C8A96E" stroke-width="1.5"/>
          <rect x="65" y="142" width="170" height="40" rx="9" fill="#131318" stroke="#5a5852"/><text x="150" y="167">Card / PayPal / Crypto</text>
          <path d="M150 182 v22" stroke="#C8A96E" stroke-width="1.5"/>
          <rect x="70" y="206" width="160" height="40" rx="9" fill="#1a2e1a" stroke="#4a8c5c"/><text x="150" y="231" fill="#7fc99a">Receives their Pressing</text>
        </g>
      </svg>
      <div class="figure-cap">Fig. 5.2 — Buying is like any online store</div>
    </div>

    <div class="callout note">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      <p>At no point in the process does the user need to know what a wallet is, what USDC is, or what blockchain is: the technology is invisible and the experience is identical to buying at any online store. But invisible doesn't mean custodial: even though the user never sees it, the wallet and its keys are always theirs, never Grooves'.</p>
    </div>

  `
});
