/* ============================================================
   CAPÍTULO 09 — ROADMAP
   Timeline de fases. Refleja que estamos en testnet (Fase 1 en curso).
   ============================================================ */
registerChapter('roadmap', {
  order: 9,
  es: `
    <div class="ch-eyebrow">
      <span class="num">CAPÍTULO 09</span>
      <span class="rule"></span>
    </div>

    <h1 class="ch-title">El camino <em>hacia adelante</em></h1>
    <p class="ch-lead">Grooves avanza por fases. El núcleo del producto —crear, vender, revender, royalties y Contenido Exclusivo— ya está construido y validado en testnet. Lo que sigue es llevarlo a la red principal, sumar artistas y ampliar el ecosistema.</p>

    <div class="figure">
      <svg viewBox="0 0 560 120" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="rm-g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#C8A96E"/><stop offset="100%" stop-color="#3a3a42"/></linearGradient></defs>
        <line x1="50" y1="60" x2="510" y2="60" stroke="#2a2a30" stroke-width="3"/>
        <line x1="50" y1="60" x2="510" y2="60" stroke="url(#rm-g)" stroke-width="3" stroke-dasharray="460" stroke-dashoffset="460"><animate attributeName="stroke-dashoffset" values="460;0" dur="2s" fill="freeze"/></line>
        <g font-family="'JetBrains Mono',monospace" font-size="10" text-anchor="middle">
          <circle cx="80" cy="60" r="12" fill="#2e2a1a" stroke="#C8A96E" stroke-width="2"/><circle cx="80" cy="60" r="4" fill="#C8A96E"><animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/></circle>
          <text x="80" y="38" fill="#C8A96E">FASE 1</text><text x="80" y="92" fill="#9a978f">Fundación</text>
          <circle cx="240" cy="60" r="11" fill="#131318" stroke="#5a5852" stroke-width="2"/>
          <text x="240" y="38" fill="#9a978f">FASE 2</text><text x="240" y="92" fill="#6b6862">Expansión</text>
          <circle cx="400" cy="60" r="11" fill="#131318" stroke="#5a5852" stroke-width="2"/>
          <text x="400" y="38" fill="#9a978f">FASE 3</text><text x="400" y="92" fill="#6b6862">Ecosistema</text>
        </g>
      </svg>
      <svg viewBox="0 0 300 280" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="rm-gv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C8A96E"/><stop offset="100%" stop-color="#3a3a42"/></linearGradient></defs>
        <line x1="40" y1="30" x2="40" y2="250" stroke="#2a2a30" stroke-width="3"/>
        <line x1="40" y1="30" x2="40" y2="250" stroke="url(#rm-gv)" stroke-width="3" stroke-dasharray="220" stroke-dashoffset="220"><animate attributeName="stroke-dashoffset" values="220;0" dur="2s" fill="freeze"/></line>
        <g font-family="'JetBrains Mono',monospace" font-size="11">
          <circle cx="40" cy="50" r="13" fill="#2e2a1a" stroke="#C8A96E" stroke-width="2"/><circle cx="40" cy="50" r="4" fill="#C8A96E"><animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/></circle>
          <text x="68" y="46" fill="#C8A96E">FASE 1</text><text x="68" y="62" fill="#9a978f" font-family="'Spline Sans'" font-size="12">Fundación</text>
          <circle cx="40" cy="140" r="12" fill="#131318" stroke="#5a5852" stroke-width="2"/>
          <text x="68" y="136" fill="#9a978f">FASE 2</text><text x="68" y="152" fill="#6b6862" font-family="'Spline Sans'" font-size="12">Expansión</text>
          <circle cx="40" cy="230" r="12" fill="#131318" stroke="#5a5852" stroke-width="2"/>
          <text x="68" y="226" fill="#9a978f">FASE 3</text><text x="68" y="242" fill="#6b6862" font-family="'Spline Sans'" font-size="12">Ecosistema</text>
        </g>
      </svg>
      <div class="figure-cap">Fig. 9.1 — Las fases de Grooves</div>
    </div>

    <h2>Fase 1 — Fundación <span class="rm-badge">En curso</span></h2>
    <p>La base del ecosistema, gran parte ya construida y en pruebas:</p>
    <ul>
      <li>Smart contracts desplegados (Sealed, Open y Marketplace) — <strong>hecho, en testnet</strong>.</li>
      <li>Pressing Studio: subida, configuración y creación — <strong>hecho</strong>.</li>
      <li>Marketplace con venta primaria, gas pagado en USDC — <strong>hecho</strong>.</li>
      <li>Mercado secundario con royalties automáticos — <strong>hecho</strong>.</li>
      <li>Contenido Exclusivo (archivos + accesos) — <strong>hecho</strong>.</li>
      <li>Auditoría de seguridad profesional + despliegue en mainnet — <strong>siguiente</strong>.</li>
      <li>Onboarding de los primeros artistas pioneros.</li>
    </ul>

    <h2>Fase 2 — Expansión</h2>
    <ul>
      <li>Authenticity Engine (verificación de copyright automática).</li>
      <li>Soporte multi-chain y biblioteca unificada.</li>
      <li>App móvil nativa (iOS + Android).</li>
      <li>Herramientas para sellos discográficos.</li>
      <li>Entradas a eventos con validación por QR.</li>
    </ul>

    <h2>Fase 3 — Ecosistema</h2>
    <ul>
      <li>Integración de catálogos de grandes sellos discográficos.</li>
      <li>Gobernanza comunitaria (votación por poseedores de Pressings, sin token especulativo).</li>
      <li>API abierta para integraciones de terceros.</li>
      <li>Expansión a arte visual, literario y audiovisual.</li>
      <li>Partnerships con venues y festivales · programa de curadores.</li>
    </ul>

    <div class="callout note">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      <p>Las fases describen prioridades, no fechas rígidas. El orden refleja qué construye sobre qué: primero un núcleo sólido y auditado, luego la expansión de acceso y experiencia, y finalmente la apertura del ecosistema a terceros y a otras formas de arte.</p>
    </div>
  `,
  en: `
    <div class="ch-eyebrow">
      <span class="num">CHAPTER 09</span>
      <span class="rule"></span>
    </div>

    <h1 class="ch-title">The road <em>ahead</em></h1>
    <p class="ch-lead">Grooves advances in phases. The product's core — create, sell, resell, royalties and Bound Content — is already built and validated on testnet. What follows is taking it to the main network, adding artists and expanding the ecosystem.</p>

    <div class="figure">
      <svg viewBox="0 0 560 120" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="rm-g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#C8A96E"/><stop offset="100%" stop-color="#3a3a42"/></linearGradient></defs>
        <line x1="50" y1="60" x2="510" y2="60" stroke="#2a2a30" stroke-width="3"/>
        <line x1="50" y1="60" x2="510" y2="60" stroke="url(#rm-g)" stroke-width="3" stroke-dasharray="460" stroke-dashoffset="460"><animate attributeName="stroke-dashoffset" values="460;0" dur="2s" fill="freeze"/></line>
        <g font-family="'JetBrains Mono',monospace" font-size="10" text-anchor="middle">
          <circle cx="80" cy="60" r="12" fill="#2e2a1a" stroke="#C8A96E" stroke-width="2"/><circle cx="80" cy="60" r="4" fill="#C8A96E"><animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/></circle>
          <text x="80" y="38" fill="#C8A96E">PHASE 1</text><text x="80" y="92" fill="#9a978f">Foundation</text>
          <circle cx="240" cy="60" r="11" fill="#131318" stroke="#5a5852" stroke-width="2"/>
          <text x="240" y="38" fill="#9a978f">PHASE 2</text><text x="240" y="92" fill="#6b6862">Expansion</text>
          <circle cx="400" cy="60" r="11" fill="#131318" stroke="#5a5852" stroke-width="2"/>
          <text x="400" y="38" fill="#9a978f">PHASE 3</text><text x="400" y="92" fill="#6b6862">Ecosystem</text>
        </g>
      </svg>
      <svg viewBox="0 0 300 280" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="rm-gv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C8A96E"/><stop offset="100%" stop-color="#3a3a42"/></linearGradient></defs>
        <line x1="40" y1="30" x2="40" y2="250" stroke="#2a2a30" stroke-width="3"/>
        <line x1="40" y1="30" x2="40" y2="250" stroke="url(#rm-gv)" stroke-width="3" stroke-dasharray="220" stroke-dashoffset="220"><animate attributeName="stroke-dashoffset" values="220;0" dur="2s" fill="freeze"/></line>
        <g font-family="'JetBrains Mono',monospace" font-size="11">
          <circle cx="40" cy="50" r="13" fill="#2e2a1a" stroke="#C8A96E" stroke-width="2"/><circle cx="40" cy="50" r="4" fill="#C8A96E"><animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/></circle>
          <text x="68" y="46" fill="#C8A96E">PHASE 1</text><text x="68" y="62" fill="#9a978f" font-family="'Spline Sans'" font-size="12">Foundation</text>
          <circle cx="40" cy="140" r="12" fill="#131318" stroke="#5a5852" stroke-width="2"/>
          <text x="68" y="136" fill="#9a978f">PHASE 2</text><text x="68" y="152" fill="#6b6862" font-family="'Spline Sans'" font-size="12">Expansion</text>
          <circle cx="40" cy="230" r="12" fill="#131318" stroke="#5a5852" stroke-width="2"/>
          <text x="68" y="226" fill="#9a978f">PHASE 3</text><text x="68" y="242" fill="#6b6862" font-family="'Spline Sans'" font-size="12">Ecosystem</text>
        </g>
      </svg>
      <div class="figure-cap">Fig. 9.1 — Grooves' phases</div>
    </div>

    <h2>Phase 1 — Foundation <span class="rm-badge">In progress</span></h2>
    <p>The base of the ecosystem, much of it already built and in testing:</p>
    <ul>
      <li>Smart contracts deployed (Sealed, Open and Marketplace) — <strong>done, on testnet</strong>.</li>
      <li>Pressing Studio: upload, configuration and creation — <strong>done</strong>.</li>
      <li>Marketplace with primary sale, gas paid in USDC — <strong>done</strong>.</li>
      <li>Secondary market with automatic royalties — <strong>done</strong>.</li>
      <li>Bound Content (files + access) — <strong>done</strong>.</li>
      <li>Professional security audit + mainnet deployment — <strong>next</strong>.</li>
      <li>Onboarding of the first pioneer artists.</li>
    </ul>

    <h2>Phase 2 — Expansion</h2>
    <ul>
      <li>Authenticity Engine (automatic copyright verification).</li>
      <li>Multi-chain support and unified library.</li>
      <li>Native mobile app (iOS + Android).</li>
      <li>Tools for record labels.</li>
      <li>Event tickets with QR validation.</li>
    </ul>

    <h2>Phase 3 — Ecosystem</h2>
    <ul>
      <li>Integration of major-label catalogs.</li>
      <li>Community governance (voting by Pressing holders, no speculative token).</li>
      <li>Open API for third-party integrations.</li>
      <li>Expansion into visual, literary and audiovisual art.</li>
      <li>Partnerships with venues and festivals · curator program.</li>
    </ul>

    <div class="callout note">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      <p>The phases describe priorities, not rigid dates. The order reflects what builds on what: first a solid, audited core, then the expansion of access and experience, and finally opening the ecosystem to third parties and other art forms.</p>
    </div>

  `
});
