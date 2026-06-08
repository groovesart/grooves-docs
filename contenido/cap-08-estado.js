/* ============================================================
   CAPÍTULO 08 — ESTADO DEL PROYECTO
   El dashboard honesto: Operativo vs En desarrollo vs Roadmap.
   Esta es la pieza de credibilidad del enfoque "dos tiempos".
   ============================================================ */
registerChapter('estado', {
  order: 8,
  es: `
    <div class="ch-eyebrow">
      <span class="num">CAPÍTULO 08</span>
      <span class="rule"></span>
      <span class="ch-status op"><span class="dot"></span> Estado real</span>
    </div>

    <h1 class="ch-title">Qué funciona <em>hoy</em>, y qué viene</h1>
    <p class="ch-lead">Un white paper serio distingue entre lo que ya existe y lo que es visión. Grooves no es una promesa: hay un producto funcional construido y probado de punta a punta. Esto es exactamente qué está operativo, qué se está construyendo, y qué está en la hoja de ruta.</p>

    <h2>Operativo — construido y validado</h2>
    <p>Las siguientes capacidades están implementadas y funcionan de extremo a extremo en el entorno de pruebas de la red:</p>

    <div class="status-grid">
      <div class="st-card op">
        <div class="st-head"><span class="st-dot"></span> Operativo</div>
        <h4>Creación de Pressings</h4>
        <p>Sealed (ERC-721) y Open (ERC-1155). El artista sube audio, arte y metadata, configura la Edición y crea on-chain.</p>
      </div>
      <div class="st-card op">
        <div class="st-head"><span class="st-dot"></span> Operativo</div>
        <h4>Venta primaria sin gas</h4>
        <p>El relayer registra la compra y el costo se descuenta en USDC. El comprador no necesita gas.</p>
      </div>
      <div class="st-card op">
        <div class="st-head"><span class="st-dot"></span> Operativo</div>
        <h4>Mercado secundario</h4>
        <p>Listar y comprar Pressings entre usuarios, con reparto atómico de royalty + comisión + pago al vendedor.</p>
      </div>
      <div class="st-card op">
        <div class="st-head"><span class="st-dot"></span> Operativo</div>
        <h4>Royalties automáticos</h4>
        <p>En cada reventa, el artista cobra su porcentaje vía EIP-2981, sin intervención de nadie.</p>
      </div>
      <div class="st-card op">
        <div class="st-head"><span class="st-dot"></span> Operativo</div>
        <h4>Bound Content</h4>
        <p>Archivos descargables (PDF) y accesos por enlace, entregados solo al dueño tras verificación on-chain.</p>
      </div>
      <div class="st-card op">
        <div class="st-head"><span class="st-dot"></span> Operativo</div>
        <h4>Reproducción protegida</h4>
        <p>Preview público de 30s; master completo entregado por URL firmada solo al poseedor del Pressing.</p>
      </div>
    </div>

    <h2>En desarrollo y hoja de ruta</h2>
    <p>Estas capacidades forman parte de la visión completa de Grooves y se incorporarán por fases:</p>

    <div class="status-grid">
      <div class="st-card dev">
        <div class="st-head"><span class="st-dot"></span> Roadmap</div>
        <h4>Authenticity Engine</h4>
        <p>Verificación de copyright por fingerprinting acústico y similitud visual al crear el Pressing.</p>
      </div>
      <div class="st-card dev">
        <div class="st-head"><span class="st-dot"></span> Roadmap</div>
        <h4>Wallet integrada no-custodial</h4>
        <p>Creación automática de una wallet auto-custodia para quien llega sin wallet, con la llave siempre bajo su control (MPC / passkeys).</p>
      </div>
      <div class="st-card dev">
        <div class="st-head"><span class="st-dot"></span> Roadmap</div>
        <h4>Pago con tarjeta / PayPal</h4>
        <p>Conversión de moneda tradicional a USDC integrada en la compra, vía proveedores regulados.</p>
      </div>
      <div class="st-card dev">
        <div class="st-head"><span class="st-dot"></span> Roadmap</div>
        <h4>Multi-chain</h4>
        <p>Soporte para redes adicionales y una biblioteca unificada del usuario entre todas ellas.</p>
      </div>
      <div class="st-card dev">
        <div class="st-head"><span class="st-dot"></span> Roadmap</div>
        <h4>Entradas con QR</h4>
        <p>El Pressing como boleto físico: validación on-chain en la puerta de eventos mediante escaneo.</p>
      </div>
      <div class="st-card dev">
        <div class="st-head"><span class="st-dot"></span> Roadmap</div>
        <h4>Programa de referidos</h4>
        <p>Comisión automática para quien comparte un enlace que termina en una compra.</p>
      </div>
      <div class="st-card dev">
        <div class="st-head"><span class="st-dot"></span> Roadmap</div>
        <h4>App móvil nativa</h4>
        <p>Aplicaciones iOS y Android dedicadas, con la experiencia de reproducción completa.</p>
      </div>
    </div>

    <div class="callout">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
      <p><strong>El núcleo económico de Grooves ya es real.</strong> Crear, vender, revender y cobrar royalties automáticos — el corazón de la propuesta — está construido y validado. Lo que viene amplía el alcance y pule la experiencia, pero la promesa central ya se cumple hoy.</p>
    </div>

    <div class="callout note">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      <p>El producto se encuentra actualmente en el entorno de pruebas de la red (testnet), la etapa previa al lanzamiento en la red principal. El despliegue en mainnet, junto con auditorías de seguridad profesionales de los contratos, es la siguiente gran etapa del roadmap.</p>
    </div>
  `,
  en: `
    <div class="ch-eyebrow">
      <span class="num">CHAPTER 08</span>
      <span class="rule"></span>
      <span class="ch-status op"><span class="dot"></span> Real status</span>
    </div>

    <h1 class="ch-title">What works <em>today</em>, and what's next</h1>
    <p class="ch-lead">A serious white paper distinguishes between what already exists and what is vision. Grooves is not a promise: there is a functional product, built and tested end to end. This is exactly what is live, what is being built, and what is on the roadmap.</p>

    <h2>Live — built and validated</h2>
    <p>The following capabilities are implemented and work end to end in the network's test environment:</p>

    <div class="status-grid">
      <div class="st-card op"><div class="st-head"><span class="st-dot"></span> Live</div><h4>Pressing creation</h4><p>Sealed (ERC-721) and Open (ERC-1155). The artist uploads audio, art and metadata, configures the Edition and creates on-chain.</p></div>
      <div class="st-card op"><div class="st-head"><span class="st-dot"></span> Live</div><h4>Gasless primary sale</h4><p>The relayer records the purchase and the cost is deducted in USDC. The buyer needs no gas.</p></div>
      <div class="st-card op"><div class="st-head"><span class="st-dot"></span> Live</div><h4>Secondary market</h4><p>List and buy Pressings between users, with atomic splitting of royalty + commission + seller payment.</p></div>
      <div class="st-card op"><div class="st-head"><span class="st-dot"></span> Live</div><h4>Automatic royalties</h4><p>On every resale, the artist collects their percentage via EIP-2981, with no one's intervention.</p></div>
      <div class="st-card op"><div class="st-head"><span class="st-dot"></span> Live</div><h4>Bound Content</h4><p>Downloadable files (PDF) and link-based access, delivered only to the owner after on-chain verification.</p></div>
      <div class="st-card op"><div class="st-head"><span class="st-dot"></span> Live</div><h4>Protected playback</h4><p>Public 30s preview; full master delivered by signed URL only to the Pressing holder.</p></div>
    </div>

    <h2>In development and roadmap</h2>
    <p>These capabilities are part of Grooves' full vision and will be incorporated in phases:</p>

    <div class="status-grid">
      <div class="st-card dev"><div class="st-head"><span class="st-dot"></span> Roadmap</div><h4>Authenticity Engine</h4><p>Copyright verification via acoustic fingerprinting and visual similarity when creating the Pressing.</p></div>
      <div class="st-card dev"><div class="st-head"><span class="st-dot"></span> Roadmap</div><h4>Non-custodial built-in wallet</h4><p>Automatic creation of a self-custodial wallet for those who arrive without one, with the key always under their control (MPC / passkeys).</p></div>
      <div class="st-card dev"><div class="st-head"><span class="st-dot"></span> Roadmap</div><h4>Card / PayPal payment</h4><p>Traditional-to-USDC currency conversion integrated into checkout, via regulated providers.</p></div>
      <div class="st-card dev"><div class="st-head"><span class="st-dot"></span> Roadmap</div><h4>Multi-chain</h4><p>Support for additional networks and a unified user library across all of them.</p></div>
      <div class="st-card dev"><div class="st-head"><span class="st-dot"></span> Roadmap</div><h4>QR tickets</h4><p>The Pressing as a physical ticket: on-chain validation at event doors via scanning.</p></div>
      <div class="st-card dev"><div class="st-head"><span class="st-dot"></span> Roadmap</div><h4>Referral program</h4><p>Automatic commission for whoever shares a link that ends in a purchase.</p></div>
      <div class="st-card dev"><div class="st-head"><span class="st-dot"></span> Roadmap</div><h4>Native mobile app</h4><p>Dedicated iOS and Android apps, with the full playback experience.</p></div>
    </div>

    <div class="callout">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
      <p><strong>The economic core of Grooves is already real.</strong> Create, sell, resell and collect automatic royalties — the heart of the proposition — is built and validated. What comes next broadens the scope and polishes the experience, but the central promise is already kept today.</p>
    </div>

    <div class="callout note">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      <p>The product is currently in the network's test environment (testnet), the stage before launching on the main network. Mainnet deployment, together with professional security audits of the contracts, is the next major roadmap milestone.</p>
    </div>

  `
});
