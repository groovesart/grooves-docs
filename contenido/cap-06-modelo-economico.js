/* ============================================================
   CAPÍTULO 06 — MODELO ECONÓMICO
   Primaria 95/5 (decisión del autor). Reventa: royalty 5-15% + 2.5% Grooves.
   Referidos = Roadmap. USDC.
   ============================================================ */
registerChapter('modelo-economico', {
  order: 6,
  es: `
    <div class="ch-eyebrow">
      <span class="num">CAPÍTULO 06</span>
      <span class="rule"></span>
      <span class="ch-status op"><span class="dot"></span> Operativo</span>
    </div>

    <h1 class="ch-title">Grooves solo gana <em>cuando el artista gana</em></h1>
    <p class="ch-lead">Publicar una obra en Grooves no tiene ningún costo para el artista. No hay tarifas de creación, ni costos de subida, ni comisiones por listar. La plataforma cobra comisión únicamente cuando un Pressing se vende.</p>

    <p>El artista sube su obra al Pressing Studio, configura su Edition y crea sus Pressings sin pagar un solo centavo (más allá del costo mínimo de registro en la red). Si el artista no vende, Grooves no cobra. Los incentivos están completamente alineados.</p>

    <h2>Venta primaria — del artista al fan</h2>
    <p>Cuando un fan compra un Pressing directamente del artista, el reparto es simple y transparente:</p>

    <div class="figure">
      <svg viewBox="0 0 460 240" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="me-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <!-- donut: 95 gold / 5 blue -->
        <g transform="translate(120,120)">
          <circle r="78" fill="none" stroke="#1a1d2e" stroke-width="26"/>
          <circle r="78" fill="none" stroke="#4a6fa5" stroke-width="26" stroke-dasharray="490" stroke-dashoffset="0" transform="rotate(-90)"/>
          <circle r="78" fill="none" stroke="url(#me-g)" stroke-width="26" stroke-dasharray="465 490" stroke-dashoffset="490" transform="rotate(-90)"><animate attributeName="stroke-dashoffset" values="490;25" dur="1.4s" fill="freeze" calcMode="spline" keySplines="0.3 0 0.2 1"/></circle>
          <text y="-4" text-anchor="middle" fill="#C8A96E" font-family="'Outfit',sans-serif" font-size="30" font-weight="600">95%</text>
          <text y="16" text-anchor="middle" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11">al artista</text>
        </g>
        <g font-family="'Spline Sans',sans-serif" font-size="13">
          <rect x="250" y="78" width="18" height="18" rx="4" fill="url(#me-g)"/><text x="278" y="92" fill="#ece9e1">Artista / Sello — 95%</text>
          <rect x="250" y="118" width="18" height="18" rx="4" fill="#4a6fa5"/><text x="278" y="132" fill="#ece9e1">Grooves — 5%</text>
          <text x="250" y="172" fill="#6b6862" font-size="11" font-family="'JetBrains Mono'">Ejemplo: $15 →</text>
          <text x="250" y="190" fill="#C8A96E" font-size="11" font-family="'JetBrains Mono'">$14,25 al artista</text>
        </g>
      </svg>
      <svg viewBox="0 0 300 300" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="me-gv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <g transform="translate(150,100)">
          <circle r="70" fill="none" stroke="#1a1d2e" stroke-width="24"/>
          <circle r="70" fill="none" stroke="#4a6fa5" stroke-width="24" stroke-dasharray="440" transform="rotate(-90)"/>
          <circle r="70" fill="none" stroke="url(#me-gv)" stroke-width="24" stroke-dasharray="418 440" stroke-dashoffset="440" transform="rotate(-90)"><animate attributeName="stroke-dashoffset" values="440;22" dur="1.4s" fill="freeze" calcMode="spline" keySplines="0.3 0 0.2 1"/></circle>
          <text y="-2" text-anchor="middle" fill="#C8A96E" font-family="'Outfit',sans-serif" font-size="28" font-weight="600">95%</text>
          <text y="18" text-anchor="middle" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11">al artista</text>
        </g>
        <g font-family="'Spline Sans',sans-serif" font-size="13" text-anchor="middle">
          <rect x="60" y="208" width="16" height="16" rx="4" fill="url(#me-gv)"/><text x="150" y="221" fill="#ece9e1">Artista / Sello — 95%</text>
          <rect x="60" y="240" width="16" height="16" rx="4" fill="#4a6fa5"/><text x="150" y="253" fill="#ece9e1">Grooves — 5%</text>
          <text x="150" y="284" fill="#C8A96E" font-size="11" font-family="'JetBrains Mono'">$15 → $14,25 al artista</text>
        </g>
      </svg>
      <div class="figure-cap">Fig. 6.1 — Distribución de la venta primaria</div>
    </div>

    <table>
      <thead><tr><th>Destinatario</th><th>Porcentaje</th></tr></thead>
      <tbody>
        <tr><td><strong>Artista / Sello</strong></td><td>95%</td></tr>
        <tr><td>Grooves (comisión de plataforma)</td><td>5%</td></tr>
      </tbody>
    </table>

    <h2>Reventa secundaria — de fan a fan</h2>
    <p>Aquí ocurre la magia que el modelo tradicional nunca permitió: <strong>en cada reventa, el artista vuelve a cobrar.</strong> El vendedor recibe el grueso del precio; el artista cobra automáticamente su royalty —un porcentaje que él mismo definió al crear la obra— y Grooves cobra una comisión menor que en la primaria.</p>

    <table>
      <thead><tr><th>Destinatario</th><th>Porcentaje</th></tr></thead>
      <tbody>
        <tr><td><strong>Vendedor</strong></td><td>El precio, menos las comisiones</td></tr>
        <tr><td>Artista / Sello (royalty)</td><td>5–15% (configurable por el artista)</td></tr>
        <tr><td>Grooves (comisión de plataforma)</td><td>2,5%</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/></svg>
      <p><strong>Programa de referidos. <span class="rm-badge">Roadmap</span></strong> En el futuro, cuando un fan comparta un enlace y alguien compre a través de él, ese fan recibirá una comisión automática — convirtiendo a la comunidad en promotores con incentivo real.</p>
    </div>

    <h2>Comparativa de valor</h2>
    <table>
      <thead><tr><th>Concepto</th><th>Streaming</th><th>Grooves (propiedad)</th></tr></thead>
      <tbody>
        <tr><td>Fan paga $132/año por 10 años</td><td>$1.320 invertidos. Posee: <strong>nada</strong>.</td><td>Compra 10 Pressings a ~$15. Posee <strong>10 obras revendibles</strong>.</td></tr>
        <tr><td>Artista indie con 10.000 fans</td><td>~$400/mes en royalties de streaming</td><td>500 Pressings a $15 = <strong>$7.125 directos</strong> + royalties en cada reventa.</td></tr>
        <tr><td>El artista crece</td><td>El fan sigue pagando, sin cambios</td><td>Los Pressings se revalorizan. <strong>El fan gana. El artista cobra en cada reventa.</strong></td></tr>
        <tr><td>El fan cancela</td><td><strong>Pierde acceso a todo</strong></td><td><strong>Conserva todos sus Pressings para siempre.</strong></td></tr>
      </tbody>
    </table>

    <h2>Moneda de operación: USDC</h2>
    <p>Todas las transacciones en Grooves se realizan en <strong>USDC</strong>, el stablecoin respaldado 1:1 por el dólar estadounidense, con auditorías públicas de sus reservas. Esta es una decisión de diseño fundamental, no una limitación técnica.</p>

    <div class="cards c2">
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5a2.5 2 0 0 1 2.5-1.5c1.4 0 2.5.7 2.5 1.7s-1 1.3-2.5 1.6-2.5.6-2.5 1.6.9 1.5 2.5 1.5a2.6 2 0 0 0 2.5-1.3"/></svg></span><h4>USDC — dinero real</h4><p>Respaldo 1:1 por el dólar. Auditorías públicas. Cuando un fan paga $15, el artista recibe $14,25 reales — no una cantidad variable de tokens que mañana puede valer la mitad.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/></svg></span><h4>Sin token especulativo</h4><p>La mayoría de proyectos cripto que lanzaron tokens propios generaron ciclos de especulación que perjudicaron a sus comunidades. Grooves rechaza esa dinámica.</p></div>
    </div>

    <p>El valor en Grooves se aprecia de forma orgánica: un Pressing de un artista que crece se revaloriza en el mercado secundario porque hay más demanda real, no porque un token subió de precio. Eso es apreciación auténtica basada en el mérito artístico, no especulación financiera.</p>

    <div class="callout warn">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>
      <p><strong>Grooves no es un modelo de negocio especulativo.</strong> El artista puede pagar su estudio, su equipo, su vida — con dinero real, no con promesas. El fan sabe exactamente cuánto pagó y qué obtuvo.</p>
    </div>
  `,
  en: `
    <div class="ch-eyebrow">
      <span class="num">CHAPTER 06</span>
      <span class="rule"></span>
      <span class="ch-status op"><span class="dot"></span> Live</span>
    </div>

    <h1 class="ch-title">Grooves only earns <em>when the artist earns</em></h1>
    <p class="ch-lead">Publishing a work on Grooves costs the artist nothing. No creation fees, no upload costs, no listing commissions. The platform charges a commission only when a Pressing sells.</p>

    <p>The artist uploads their work to the Pressing Studio, configures their Edition and creates their Pressings without paying a cent (beyond the network's minimal registration cost). If the artist doesn't sell, Grooves doesn't charge. Incentives are completely aligned.</p>

    <h2>Primary sale — from artist to fan</h2>
    <p>When a fan buys a Pressing directly from the artist, the split is simple and transparent:</p>

    <div class="figure">
      <svg viewBox="0 0 460 240" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="me-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <!-- donut: 95 gold / 5 blue -->
        <g transform="translate(120,120)">
          <circle r="78" fill="none" stroke="#1a1d2e" stroke-width="26"/>
          <circle r="78" fill="none" stroke="#4a6fa5" stroke-width="26" stroke-dasharray="490" stroke-dashoffset="0" transform="rotate(-90)"/>
          <circle r="78" fill="none" stroke="url(#me-g)" stroke-width="26" stroke-dasharray="465 490" stroke-dashoffset="490" transform="rotate(-90)"><animate attributeName="stroke-dashoffset" values="490;25" dur="1.4s" fill="freeze" calcMode="spline" keySplines="0.3 0 0.2 1"/></circle>
          <text y="-4" text-anchor="middle" fill="#C8A96E" font-family="'Outfit',sans-serif" font-size="30" font-weight="600">95%</text>
          <text y="16" text-anchor="middle" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11">to artist</text>
        </g>
        <g font-family="'Spline Sans',sans-serif" font-size="13">
          <rect x="250" y="78" width="18" height="18" rx="4" fill="url(#me-g)"/><text x="278" y="92" fill="#ece9e1">Artist / Label — 95%</text>
          <rect x="250" y="118" width="18" height="18" rx="4" fill="#4a6fa5"/><text x="278" y="132" fill="#ece9e1">Grooves — 5%</text>
          <text x="250" y="172" fill="#6b6862" font-size="11" font-family="'JetBrains Mono'">Ejemplo: $15 →</text>
          <text x="250" y="190" fill="#C8A96E" font-size="11" font-family="'JetBrains Mono'">$14,25 to artist</text>
        </g>
      </svg>
      <svg viewBox="0 0 300 300" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="me-gv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <g transform="translate(150,100)">
          <circle r="70" fill="none" stroke="#1a1d2e" stroke-width="24"/>
          <circle r="70" fill="none" stroke="#4a6fa5" stroke-width="24" stroke-dasharray="440" transform="rotate(-90)"/>
          <circle r="70" fill="none" stroke="url(#me-gv)" stroke-width="24" stroke-dasharray="418 440" stroke-dashoffset="440" transform="rotate(-90)"><animate attributeName="stroke-dashoffset" values="440;22" dur="1.4s" fill="freeze" calcMode="spline" keySplines="0.3 0 0.2 1"/></circle>
          <text y="-2" text-anchor="middle" fill="#C8A96E" font-family="'Outfit',sans-serif" font-size="28" font-weight="600">95%</text>
          <text y="18" text-anchor="middle" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11">to artist</text>
        </g>
        <g font-family="'Spline Sans',sans-serif" font-size="13" text-anchor="middle">
          <rect x="60" y="208" width="16" height="16" rx="4" fill="url(#me-gv)"/><text x="150" y="221" fill="#ece9e1">Artist / Label — 95%</text>
          <rect x="60" y="240" width="16" height="16" rx="4" fill="#4a6fa5"/><text x="150" y="253" fill="#ece9e1">Grooves — 5%</text>
          <text x="150" y="284" fill="#C8A96E" font-size="11" font-family="'JetBrains Mono'">$15 → $14,25 to artist</text>
        </g>
      </svg>
      <div class="figure-cap">Fig. 6.1 — Primary sale distribution</div>
    </div>

    <table>
      <thead><tr><th>Recipient</th><th>Percentage</th></tr></thead>
      <tbody>
        <tr><td><strong>Artist / Label</strong></td><td>95%</td></tr>
        <tr><td>Grooves (platform commission)</td><td>5%</td></tr>
      </tbody>
    </table>

    <h2>Secondary resale — fan to fan</h2>
    <p>Here is the magic the traditional model never allowed: <strong>on every resale, the artist earns again.</strong> The seller receives the bulk of the price; the artist automatically collects their royalty — a percentage they themselves set when creating the work — and Grooves charges a smaller commission than on the primary sale.</p>

    <table>
      <thead><tr><th>Recipient</th><th>Percentage</th></tr></thead>
      <tbody>
        <tr><td><strong>Seller</strong></td><td>The price, minus commissions</td></tr>
        <tr><td>Artist / Label (royalty)</td><td>5–15% (configurable by the artist)</td></tr>
        <tr><td>Grooves (platform commission)</td><td>2.5%</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/></svg>
      <p><strong>Referral program. <span class="rm-badge">Roadmap</span></strong> In the future, when a fan shares a link and someone buys through it, that fan will receive an automatic commission — turning the community into promoters with real incentive.</p>
    </div>

    <h2>Value comparison</h2>
    <table>
      <thead><tr><th>Scenario</th><th>Streaming</th><th>Grooves (ownership)</th></tr></thead>
      <tbody>
        <tr><td>Fan pays $132/yr for 10 years</td><td>$1,320 invested. Owns: <strong>nothing</strong>.</td><td>Buys 10 Pressings at ~$15. Owns <strong>10 resellable works</strong>.</td></tr>
        <tr><td>Indie artist with 10,000 fans</td><td>~$400/mo in streaming royalties</td><td>500 Pressings at $15 = <strong>$7,125 direct</strong> + royalties on every resale.</td></tr>
        <tr><td>The artist grows</td><td>The fan keeps paying, no change</td><td>Pressings appreciate. <strong>The fan gains. The artist earns on every resale.</strong></td></tr>
        <tr><td>The fan cancels</td><td><strong>Loses access to everything</strong></td><td><strong>Keeps every Pressing forever.</strong></td></tr>
      </tbody>
    </table>

    <h2>Operating currency: USDC</h2>
    <p>All transactions on Grooves are made in <strong>USDC</strong>, the stablecoin backed 1:1 by the US dollar, with public audits of its reserves. This is a fundamental design decision, not a technical limitation.</p>

    <div class="cards c2">
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5a2.5 2 0 0 1 2.5-1.5c1.4 0 2.5.7 2.5 1.7s-1 1.3-2.5 1.6-2.5.6-2.5 1.6.9 1.5 2.5 1.5a2.6 2 0 0 0 2.5-1.3"/></svg></span><h4>USDC — real money</h4><p>Backed 1:1 by the dollar. Public audits. When a fan pays $15, the artist receives a real $14.25 — not a variable amount of tokens that could be worth half tomorrow.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/></svg></span><h4>No speculative token</h4><p>Most crypto projects that launched their own tokens created speculation cycles that harmed their communities. Grooves rejects that dynamic.</p></div>
    </div>

    <p>Value on Grooves appreciates organically: a Pressing from an artist who grows appreciates on the secondary market because there's more real demand, not because a token went up in price. That's authentic appreciation based on artistic merit, not financial speculation.</p>

    <div class="callout warn">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>
      <p><strong>Grooves is not a speculative business model.</strong> The artist can pay for their studio, their team, their life — with real money, not promises. The fan knows exactly how much they paid and what they got.</p>
    </div>

  `
});
