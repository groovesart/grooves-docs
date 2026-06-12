/* ============================================================
   CAPÍTULO 06 — MODELO ECONÓMICO
   Primaria 95/5 (decisión del autor). Reventa: royalty 5-15% + 2.5% Grooves.
   USDC. Creacion: el artista paga el gas en USDC.
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
    <p class="ch-lead">Grooves no cobra comisión por publicar: no hay tarifas de creación, ni costos de subida, ni comisiones por listar. La única comisión de la plataforma aparece cuando un Pressing se vende. La salvedad: registrar la obra en la blockchain tiene un costo de red —el gas—, que el artista cubre en USDC.</p>

    <p>El artista sube su obra al Pressing Studio, configura su Edition y crea sus Pressings sin pagar comisión a Grooves; lo único que abona es el costo de red para registrarlos en la blockchain, que se le cobra en USDC (no necesita la criptomoneda nativa). Grooves no gana con eso —solo cubre la red—: si el artista no vende, Grooves no cobra. Los incentivos están completamente alineados.</p>

    <h2>Venta primaria — del artista al fan</h2>
    <p>Cuando un fan compra un Pressing directamente del artista, el reparto es simple y transparente:</p>

    <div class="figure">
      <svg viewBox="0 0 460 240" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="me-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <g transform="translate(120,120)">
          <circle r="78" fill="none" stroke="#1a1d2e" stroke-width="26"/>
          <circle r="78" fill="none" stroke="#4a6fa5" stroke-width="26" stroke-dasharray="490" stroke-dashoffset="0" transform="rotate(-90)"/>
          <circle r="78" fill="none" stroke="url(#me-g)" stroke-width="26" stroke-dasharray="465 490" stroke-dashoffset="490" transform="rotate(-90)"><animate attributeName="stroke-dashoffset" values="490;25" dur="1.4s" fill="freeze" calcMode="spline" keySplines="0.3 0 0.2 1"/></circle>
          <text y="-4" text-anchor="middle" fill="#C8A96E" font-family="'Fraunces',serif" font-size="30" font-weight="600" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/>95%</text>
          <text y="16" text-anchor="middle" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.1s" fill="freeze"/>al artista</text>
        </g>
        <g font-family="'Spline Sans',sans-serif" font-size="13">
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.4s" fill="freeze"/><rect x="250" y="78" width="18" height="18" rx="4" fill="url(#me-g)"/><text x="278" y="92" fill="#ece9e1">Artista / Sello — 95%</text></g>
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.6s" fill="freeze"/><rect x="250" y="118" width="18" height="18" rx="4" fill="#4a6fa5"/><text x="278" y="132" fill="#ece9e1">Grooves — 5%</text></g>
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.9s" fill="freeze"/><text x="250" y="172" fill="#6b6862" font-size="11" font-family="'JetBrains Mono'">Ejemplo: $15 →</text><text x="250" y="190" fill="#C8A96E" font-size="11" font-family="'JetBrains Mono'">$14,25 al artista</text></g>
        </g>
      </svg>
      <svg viewBox="0 0 300 300" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="me-gv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <g transform="translate(150,100)">
          <circle r="70" fill="none" stroke="#1a1d2e" stroke-width="24"/>
          <circle r="70" fill="none" stroke="#4a6fa5" stroke-width="24" stroke-dasharray="440" transform="rotate(-90)"/>
          <circle r="70" fill="none" stroke="url(#me-gv)" stroke-width="24" stroke-dasharray="418 440" stroke-dashoffset="440" transform="rotate(-90)"><animate attributeName="stroke-dashoffset" values="440;22" dur="1.4s" fill="freeze" calcMode="spline" keySplines="0.3 0 0.2 1"/></circle>
          <text y="-2" text-anchor="middle" fill="#C8A96E" font-family="'Fraunces',serif" font-size="28" font-weight="600" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/>95%</text>
          <text y="18" text-anchor="middle" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.1s" fill="freeze"/>al artista</text>
        </g>
        <g font-family="'Spline Sans',sans-serif" font-size="13" text-anchor="middle">
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.4s" fill="freeze"/><rect x="60" y="208" width="16" height="16" rx="4" fill="url(#me-gv)"/><text x="150" y="221" fill="#ece9e1">Artista / Sello — 95%</text></g>
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.6s" fill="freeze"/><rect x="60" y="240" width="16" height="16" rx="4" fill="#4a6fa5"/><text x="150" y="253" fill="#ece9e1">Grooves — 5%</text></g>
          <text x="150" y="284" fill="#C8A96E" font-size="11" font-family="'JetBrains Mono'" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.9s" fill="freeze"/>$15 → $14,25 al artista</text>
        </g>
      </svg>
      <div class="figure-cap">Fig. 6.1 — Distribución de la venta primaria</div>
    </div>

    <h2>Reparto entre colaboradores</h2>
    <p>Una obra rara vez es de una sola persona. Por eso ese 95% no tiene por qué ir a una sola wallet: el artista puede repartirlo entre <strong>hasta 20 colaboradores</strong> —músicos, productores, el sello, los publishers— con los porcentajes que se acuerden. El reparto se define al armar la Edition, debe sumar 100%, y cada colaborador solo necesita una dirección de wallet: no hace falta que tenga cuenta en Grooves.</p>

    <div class="figure">
          <svg viewBox="0 0 560 230" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="spp-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
              <clipPath id="spp-clip"><rect x="40" y="60" width="0" height="34" rx="6"><animate attributeName="width" values="0;480" dur="1.4s" begin="0.3s" fill="freeze" calcMode="spline" keySplines="0.3 0 0.2 1"/></rect></clipPath>
            </defs>
            <text x="40" y="42" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="13.5" font-weight="600">El 95% del artista, repartido por él mismo</text>
            <rect x="40" y="60" width="480" height="34" rx="6" fill="#1a1d2e"/>
            <g clip-path="url(#spp-clip)">
              <rect x="40" y="60" width="264" height="34" fill="url(#spp-g)"/>
              <rect x="304" y="60" width="96" height="34" fill="#4a6fa5"/>
              <rect x="400" y="60" width="48" height="34" fill="#4a8c5c"/>
              <rect x="448" y="60" width="48" height="34" fill="#C8A96E"/>
              <rect x="496" y="60" width="24" height="34" fill="#8a877f"/>
            </g>
            <line x1="304" y1="60" x2="304" y2="94" stroke="#131318" stroke-width="2"/>
            <line x1="400" y1="60" x2="400" y2="94" stroke="#131318" stroke-width="2"/>
            <line x1="448" y1="60" x2="448" y2="94" stroke="#131318" stroke-width="2"/>
            <line x1="496" y1="60" x2="496" y2="94" stroke="#131318" stroke-width="2"/>
            <g font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="middle">
              <text x="172" y="82" fill="#131318" font-weight="600" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.0s" fill="freeze"/>55%</text>
              <text x="352" y="82" fill="#ece9e1" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.2s" fill="freeze"/>20%</text>
            </g>
            <text x="40" y="118" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9.5">hasta 20 wallets · suma 100% · se fija al publicar</text>
            <g font-family="'Spline Sans',sans-serif" font-size="12.5">
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.45s" fill="freeze"/><rect x="40" y="142" width="14" height="14" rx="3" fill="url(#spp-g)"/><text x="62" y="153" fill="#ece9e1">Artista</text><text x="232" y="153" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">55%</text></g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.60s" fill="freeze"/><rect x="40" y="166" width="14" height="14" rx="3" fill="#4a6fa5"/><text x="62" y="177" fill="#ece9e1">Productor</text><text x="232" y="177" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">20%</text></g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.75s" fill="freeze"/><rect x="40" y="190" width="14" height="14" rx="3" fill="#4a8c5c"/><text x="62" y="201" fill="#ece9e1">Bajista</text><text x="232" y="201" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">10%</text></g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.90s" fill="freeze"/><rect x="296" y="142" width="14" height="14" rx="3" fill="#C8A96E"/><text x="318" y="153" fill="#ece9e1">Sello</text><text x="500" y="153" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">10%</text></g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="2.05s" fill="freeze"/><rect x="296" y="166" width="14" height="14" rx="3" fill="#8a877f"/><text x="318" y="177" fill="#ece9e1">Manager</text><text x="500" y="177" fill="#c9c6bd" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">5%</text></g>
              <text x="296" y="201" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="9.5" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="2.2s" fill="freeze"/>reparte ingresos, no acceso</text>
            </g>
          </svg>
          <svg viewBox="0 0 300 332" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="spp-gv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
              <clipPath id="spp-clipv"><rect x="34" y="60" width="40" height="0" rx="6"><animate attributeName="height" values="0;200" dur="1.4s" begin="0.3s" fill="freeze" calcMode="spline" keySplines="0.3 0 0.2 1"/></rect></clipPath>
            </defs>
            <text x="150" y="34" text-anchor="middle" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">El 95% del artista, repartido</text>
            <rect x="34" y="60" width="40" height="200" rx="6" fill="#1a1d2e"/>
            <g clip-path="url(#spp-clipv)">
              <rect x="34" y="60" width="40" height="110" fill="url(#spp-gv)"/>
              <rect x="34" y="170" width="40" height="40" fill="#4a6fa5"/>
              <rect x="34" y="210" width="40" height="20" fill="#4a8c5c"/>
              <rect x="34" y="230" width="40" height="20" fill="#C8A96E"/>
              <rect x="34" y="250" width="40" height="10" fill="#8a877f"/>
            </g>
            <line x1="34" y1="170" x2="74" y2="170" stroke="#131318" stroke-width="2"/>
            <line x1="34" y1="210" x2="74" y2="210" stroke="#131318" stroke-width="2"/>
            <line x1="34" y1="230" x2="74" y2="230" stroke="#131318" stroke-width="2"/>
            <line x1="34" y1="250" x2="74" y2="250" stroke="#131318" stroke-width="2"/>
            <g font-family="'Spline Sans',sans-serif" font-size="12.5">
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.45s" fill="freeze"/><rect x="92" y="64" width="14" height="14" rx="3" fill="url(#spp-gv)"/><text x="114" y="75" fill="#ece9e1">Artista</text><text x="266" y="75" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">55%</text></g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.60s" fill="freeze"/><rect x="92" y="92" width="14" height="14" rx="3" fill="#4a6fa5"/><text x="114" y="103" fill="#ece9e1">Productor</text><text x="266" y="103" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">20%</text></g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.75s" fill="freeze"/><rect x="92" y="120" width="14" height="14" rx="3" fill="#4a8c5c"/><text x="114" y="131" fill="#ece9e1">Bajista</text><text x="266" y="131" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">10%</text></g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.90s" fill="freeze"/><rect x="92" y="148" width="14" height="14" rx="3" fill="#C8A96E"/><text x="114" y="159" fill="#ece9e1">Sello</text><text x="266" y="159" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">10%</text></g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="2.05s" fill="freeze"/><rect x="92" y="176" width="14" height="14" rx="3" fill="#8a877f"/><text x="114" y="187" fill="#ece9e1">Manager</text><text x="266" y="187" fill="#c9c6bd" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">5%</text></g>
            </g>
            <text x="150" y="294" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">hasta 20 wallets · suma 100%</text>
            <text x="150" y="310" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">se fija al publicar</text>
            <text x="150" y="326" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="9">reparte ingresos, no acceso</text>
          </svg>
          <div class="figure-cap">Fig. 6.2 — El 95% del artista se reparte entre sus colaboradores</div>
        </div>

    <p>Cuando un fan compra, el reparto se distribuye <strong>solo y en la misma transacción</strong>: cada wallet recibe su parte al instante, sin que nadie tenga que repartir nada a mano después. Y reparte <em>ingresos</em>, no propiedad: las wallets del reparto cobran su porcentaje, pero el acceso al master y al Contenido Exclusivo sigue siendo exclusivo del dueño del Pressing.</p>

    <h2>Porciones con fecha</h2>
    <p>No todos los acuerdos son para siempre. Una porción del reparto puede tener <strong>fecha de vencimiento</strong>: por ejemplo, el productor cobra el 10% durante el primer año y, cumplido el plazo, ese porcentaje vuelve automáticamente al creador. No se redistribuye a terceros ni hay que renegociar nada — el contrato lo hace solo.</p>

    <div class="figure">
      <svg viewBox="0 0 560 230" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="spt-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
        </defs>

        <!-- linea de tiempo -->
        <line x1="40" y1="70" x2="520" y2="70" stroke="#3a3a40" stroke-width="1.4"/>
        <text x="40" y="50" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11">periodo activo</text>
        <text x="520" y="50" text-anchor="end" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11">post-vencimiento</text>

        <!-- marcador vence -->
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.4s" fill="freeze"/>
          <line x1="280" y1="40" x2="280" y2="100" stroke="#C8A96E" stroke-width="1.4" stroke-dasharray="3 3"/>
          <circle cx="280" cy="70" r="5" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/>
          <text x="280" y="30" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">vence</text>
          <text x="280" y="118" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="10">01/2027</text>
        </g>

        <!-- IZQUIERDA: chips activos -->
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.65s" fill="freeze"/>
          <rect x="62" y="150" width="86" height="30" rx="8" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.4"/>
          <text x="105" y="170" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Productor 10%</text>
          <rect x="158" y="150" width="78" height="30" rx="8" fill="#1a1d2e" stroke="url(#spt-g)" stroke-width="1.4"/>
          <text x="197" y="170" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Artista 90%</text>
        </g>

        <!-- DERECHA: nodo Artista 100% (creador) -->
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/>
          <circle cx="448" cy="165" r="36" fill="#131318" stroke="#C8A96E" stroke-width="2"/>
          <text x="448" y="162" text-anchor="middle" fill="#d9bf8a" font-family="'Fraunces',serif" font-size="22" font-weight="600">100%</text>
          <text x="448" y="180" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">Artista</text>
        </g>

        <!-- curva del 10% que vuelve al creador -->
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.15s" fill="freeze"/>
          <path id="spt-back" d="M236 165 Q330 215 412 165" fill="none" stroke="#4a6fa5" stroke-width="1.6" stroke-dasharray="220" stroke-dashoffset="220"><animate attributeName="stroke-dashoffset" values="220;0" dur="1.3s" begin="1.15s" fill="freeze"/></path>
          <text x="324" y="212" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">+10% vuelve al creador</text>
          <!-- punta de flecha -->
          <path d="M412 165 l-9 -2 l4 8 z" fill="#4a6fa5"><animate attributeName="opacity" values="0;0;1" keyTimes="0;0.85;1" dur="1.3s" begin="1.15s" fill="freeze"/></path>
        </g>

        <!-- punto que viaja la curva del 10% -->
        <circle r="3.5" fill="#8fa8d0" opacity="0">
          <animateMotion path="M236 165 Q330 215 412 165" dur="1.6s" begin="2.4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" begin="2.4s" repeatCount="indefinite"/>
        </circle>

        <!-- nota mono -->
        <text x="280" y="222" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="9.5" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.6s" fill="freeze"/>después de la fecha, ese % vuelve al creador · se fija al publicar</text>
      </svg>

      <svg viewBox="0 0 300 340" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="spt-gv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
        </defs>

        <!-- linea de tiempo vertical -->
        <line x1="40" y1="30" x2="40" y2="270" stroke="#3a3a40" stroke-width="1.4"/>
        <text x="58" y="26" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11">periodo activo</text>

        <!-- chips activos -->
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.4s" fill="freeze"/>
          <rect x="58" y="40" width="118" height="30" rx="8" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.4"/>
          <text x="117" y="60" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Productor 10%</text>
          <rect x="58" y="78" width="118" height="30" rx="8" fill="#1a1d2e" stroke="url(#spt-gv)" stroke-width="1.4"/>
          <text x="117" y="98" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Artista 90%</text>
        </g>

        <!-- marcador vence -->
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.7s" fill="freeze"/>
          <line x1="22" y1="150" x2="200" y2="150" stroke="#C8A96E" stroke-width="1.4" stroke-dasharray="3 3"/>
          <circle cx="40" cy="150" r="5" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/>
          <text x="58" y="146" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">vence</text>
          <text x="58" y="164" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="10">01/2027</text>
        </g>

        <text x="58" y="186" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/>post-vencimiento</text>

        <!-- nodo Artista 100% -->
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.0s" fill="freeze"/>
          <circle cx="150" cy="246" r="36" fill="#131318" stroke="#C8A96E" stroke-width="2"/>
          <text x="150" y="243" text-anchor="middle" fill="#d9bf8a" font-family="'Fraunces',serif" font-size="22" font-weight="600">100%</text>
          <text x="150" y="261" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">Artista</text>
        </g>

        <!-- curva del 10% que vuelve -->
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.25s" fill="freeze"/>
          <path d="M64 196 Q70 246 112 246" fill="none" stroke="#4a6fa5" stroke-width="1.6" stroke-dasharray="120" stroke-dashoffset="120"><animate attributeName="stroke-dashoffset" values="120;0" dur="1.3s" begin="1.25s" fill="freeze"/></path>
          <path d="M112 246 l-9 -2 l4 8 z" fill="#4a6fa5"><animate attributeName="opacity" values="0;0;1" keyTimes="0;0.85;1" dur="1.3s" begin="1.25s" fill="freeze"/></path>
          <text x="40" y="216" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="11" font-weight="600">+10%</text>
        </g>

        <!-- punto viajero -->
        <circle r="3.5" fill="#8fa8d0" opacity="0">
          <animateMotion path="M64 196 Q70 246 112 246" dur="1.6s" begin="2.6s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" begin="2.6s" repeatCount="indefinite"/>
        </circle>

        <!-- nota mono -->
        <text x="150" y="300" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="9" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.6s" fill="freeze"/>ese % vuelve al creador</text>
        <text x="150" y="314" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="9" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.8s" fill="freeze"/>se fija al publicar</text>
      </svg>

      <div class="figure-cap">Fig. 6.3 — Una porción puede vencer y volver al creador</div>
    </div>

    <div class="callout">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/></svg>
      <p><strong>El reparto queda sellado.</strong> Una vez publicada la Edition, los porcentajes, las wallets y las fechas quedan fijos en la blockchain: ni Grooves ni nadie puede cambiarlos después. Quien está en el reparto cobra exactamente lo acordado, en cada venta. (Cómo se firma y se hace cumplir está en el capítulo de Arquitectura.)</p>
    </div>

    <h2>Reventa secundaria — de fan a fan</h2>
    <p>Aquí ocurre la magia que el modelo tradicional nunca permitió: <strong>en cada reventa, el artista vuelve a cobrar.</strong> El vendedor recibe el grueso del precio; el artista cobra automáticamente su royalty —un porcentaje que él mismo definió al crear la obra— y Grooves cobra una comisión menor que en la primaria.</p>

    <div class="figure">
      <svg viewBox="0 0 560 230" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <circle cx="84" cy="115" r="36" fill="#131318" stroke="#C8A96E" stroke-width="2"/><text x="84" y="110" text-anchor="middle" fill="#d9bf8a" font-family="'Fraunces',serif" font-size="22" font-weight="600">$20</text><text x="84" y="128" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">reventa</text><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.40s" fill="freeze"/><path d="M120 115 Q200 115 246 55" fill="none" stroke="#C8A96E" stroke-width="1.4" opacity="0.45"/><circle cx="252" cy="55" r="5.5" fill="#C8A96E"/><text x="270" y="53" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Vendedor</text><text x="270" y="69" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">≈ $17,50 · menos comisiones</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.65s" fill="freeze"/><path d="M120 115 Q200 115 246 115" fill="none" stroke="#C8A96E" stroke-width="1.4" opacity="0.45"/><circle cx="252" cy="115" r="7" fill="none" stroke="#C8A96E" stroke-width="1.6"/><circle cx="252" cy="115" r="7" fill="none" stroke="#C8A96E" stroke-width="1.2" opacity="0"><animate attributeName="opacity" values="0;0.6;0" dur="2.2s" repeatCount="indefinite"/><animate attributeName="r" values="7;13;7" dur="2.2s" repeatCount="indefinite"/></circle><text x="270" y="113" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Artista · royalty 5–15%</text><text x="270" y="129" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">↻ vuelve a cobrar</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.90s" fill="freeze"/><path d="M120 115 Q200 115 246 175" fill="none" stroke="#4a6fa5" stroke-width="1.4" opacity="0.45"/><circle cx="252" cy="175" r="5.5" fill="#4a6fa5"/><text x="270" y="173" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Grooves · 2,5%</text><text x="270" y="189" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">comisión de plataforma</text></g>
      </svg>
      <svg viewBox="0 0 300 300" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="50" r="32" fill="#131318" stroke="#C8A96E" stroke-width="2"/><text x="150" y="46" text-anchor="middle" fill="#d9bf8a" font-family="'Fraunces',serif" font-size="20" font-weight="600">$20</text><text x="150" y="63" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">reventa</text><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.40s" fill="freeze"/><path d="M150 82 Q40 90 40 120" fill="none" stroke="#C8A96E" stroke-width="1.3" opacity="0.4"/><circle cx="40" cy="120" r="5.5" fill="#C8A96E"/><text x="62" y="118" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="12.5" font-weight="600">Vendedor</text><text x="62" y="133" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">≈ $17,50 · menos comisiones</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.62s" fill="freeze"/><path d="M150 82 Q40 160 40 190" fill="none" stroke="#C8A96E" stroke-width="1.3" opacity="0.4"/><circle cx="40" cy="190" r="7" fill="none" stroke="#C8A96E" stroke-width="1.6"/><circle cx="40" cy="190" r="7" fill="none" stroke="#C8A96E" stroke-width="1.2" opacity="0"><animate attributeName="opacity" values="0;0.6;0" dur="2.2s" repeatCount="indefinite"/><animate attributeName="r" values="7;13;7" dur="2.2s" repeatCount="indefinite"/></circle><text x="62" y="188" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12.5" font-weight="600">Artista · royalty 5–15%</text><text x="62" y="203" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">↻ vuelve a cobrar</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.84s" fill="freeze"/><path d="M150 82 Q40 230 40 260" fill="none" stroke="#4a6fa5" stroke-width="1.3" opacity="0.4"/><circle cx="40" cy="260" r="5.5" fill="#4a6fa5"/><text x="62" y="258" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="12.5" font-weight="600">Grooves · 2,5%</text><text x="62" y="273" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">comisión de plataforma</text></g>
      </svg>
      <div class="figure-cap">Fig. 6.4 — En cada reventa, el artista cobra otra vez</div>
    </div>

    <p>Y esa regalía tampoco tiene por qué quedar en una sola persona: <strong>se reparte entre el equipo</strong>, igual que la venta primaria. El artista define qué wallets cobran la regalía y en qué proporción —hasta 20— como subdivisiones del porcentaje total, que puede llegar al 30%. Así, cada reventa reparte automáticamente entre todos los que hicieron posible la obra.</p>

    <div class="figure">
      <svg viewBox="0 0 580 270" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rsr-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
        </defs>
        <g font-family="'Spline Sans',sans-serif" font-size="10" letter-spacing="0.12em">
          <text x="70" y="26" text-anchor="middle" fill="#6b6862">ETAPA 1 · PRECIO</text>
          <text x="470" y="26" text-anchor="middle" fill="#6b6862">ETAPA 2 · LA REGALÍA</text>
        </g>
        <line x1="312" y1="42" x2="312" y2="226" stroke="#2a2a30" stroke-width="1" stroke-dasharray="3 5"/>
        <circle cx="70" cy="135" r="36" fill="#131318" stroke="#C8A96E" stroke-width="2"/>
        <text x="70" y="130" text-anchor="middle" fill="#d9bf8a" font-family="'Fraunces',serif" font-size="22" font-weight="600">$20</text>
        <text x="70" y="148" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">reventa</text>
        <g fill="none" stroke-width="1.4" opacity="0.5">
          <path id="rsr-p1" d="M106 119 Q170 80 232 66" stroke="#8fa8d0"/>
          <path id="rsr-p2" d="M106 135 Q170 135 232 135" stroke="#C8A96E" opacity="0.9"/>
          <path id="rsr-p3" d="M106 151 Q170 190 232 204" stroke="#9a978f"/>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.5s" fill="freeze"/>
          <circle r="3.5" fill="#8fa8d0"><animateMotion path="M106 119 Q170 80 232 66" dur="1.8s" begin="0.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.8s" begin="0.6s" repeatCount="indefinite"/></circle>
          <circle r="3.5" fill="#d9bf8a"><animateMotion path="M106 135 Q170 135 232 135" dur="1.8s" begin="0.9s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.8s" begin="0.9s" repeatCount="indefinite"/></circle>
          <circle r="3.5" fill="#9a978f"><animateMotion path="M106 151 Q170 190 232 204" dur="1.8s" begin="1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.8s" begin="1.2s" repeatCount="indefinite"/></circle>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.55s" fill="freeze"/>
          <circle cx="240" cy="66" r="6" fill="none" stroke="#8fa8d0" stroke-width="1.6"/>
          <text x="254" y="63" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12.5" font-weight="600">Vendedor</text>
          <text x="254" y="78" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="10">≈ $17,50</text>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.85s" fill="freeze"/>
          <circle cx="240" cy="204" r="6" fill="none" stroke="#9a978f" stroke-width="1.6"/>
          <text x="254" y="201" fill="#c9c6bd" font-family="'Spline Sans',sans-serif" font-size="12.5" font-weight="600">Grooves</text>
          <text x="254" y="216" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="10">2,5% · $0,50</text>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.7s" fill="freeze"/>
          <circle cx="270" cy="135" r="38" fill="#1a1d2e" stroke="url(#rsr-g)" stroke-width="2.2"/>
          <circle cx="270" cy="135" r="38" fill="none" stroke="#C8A96E" stroke-width="2.2" opacity="0.35"><animate attributeName="opacity" values="0.35;0;0.35" dur="2.4s" repeatCount="indefinite"/><animate attributeName="r" values="38;44;38" dur="2.4s" repeatCount="indefinite"/></circle>
          <text x="270" y="130" text-anchor="middle" fill="#d9bf8a" font-family="'Fraunces',serif" font-size="20" font-weight="600">10%</text>
          <text x="270" y="148" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9">regalía · $2,00</text>
        </g>
        <g fill="none" stroke="url(#rsr-g)" stroke-width="1.4" opacity="0">
          <animate attributeName="opacity" values="0;0.55" dur="0.6s" begin="1.05s" fill="freeze"/>
          <path id="rsr-q1" d="M308 124 Q400 100 470 86" stroke-dasharray="200" stroke-dashoffset="200"><animate attributeName="stroke-dashoffset" values="200;0" dur="1.1s" begin="1.05s" fill="freeze"/></path>
          <path id="rsr-q2" d="M308 135 Q400 135 470 135" stroke-dasharray="170" stroke-dashoffset="170"><animate attributeName="stroke-dashoffset" values="170;0" dur="1.1s" begin="1.2s" fill="freeze"/></path>
          <path id="rsr-q3" d="M308 146 Q400 170 470 184" stroke-dasharray="200" stroke-dashoffset="200"><animate attributeName="stroke-dashoffset" values="200;0" dur="1.1s" begin="1.35s" fill="freeze"/></path>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.6s" fill="freeze"/>
          <circle r="3.2" fill="#d9bf8a"><animateMotion path="M308 124 Q400 100 470 86" dur="1.7s" begin="1.7s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" begin="1.7s" repeatCount="indefinite"/></circle>
          <circle r="3.2" fill="#d9bf8a"><animateMotion path="M308 135 Q400 135 470 135" dur="1.7s" begin="1.9s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" begin="1.9s" repeatCount="indefinite"/></circle>
          <circle r="3.2" fill="#d9bf8a"><animateMotion path="M308 146 Q400 170 470 184" dur="1.7s" begin="2.1s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" begin="2.1s" repeatCount="indefinite"/></circle>
        </g>
        <g font-family="'Spline Sans',sans-serif">
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.5s" fill="freeze"/>
            <rect x="470" y="74" width="13" height="13" rx="3" fill="url(#rsr-g)"/>
            <text x="490" y="80" fill="#ece9e1" font-size="12.5" font-weight="600">Artista</text>
            <text x="490" y="93" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="10">50% · $1,00</text>
          </g>
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.65s" fill="freeze"/>
            <rect x="470" y="124" width="13" height="13" rx="3" fill="#C8A96E" opacity="0.8"/>
            <text x="490" y="130" fill="#ece9e1" font-size="12.5" font-weight="600">Productor</text>
            <text x="490" y="143" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="10">30% · $0,60</text>
          </g>
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.8s" fill="freeze"/>
            <rect x="470" y="172" width="13" height="13" rx="3" fill="#C8A96E" opacity="0.6"/>
            <text x="490" y="178" fill="#ece9e1" font-size="12.5" font-weight="600">Featuring</text>
            <text x="490" y="191" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="10">20% · $0,40</text>
          </g>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="2s" fill="freeze"/>
          <text x="290" y="252" text-anchor="middle" fill="#8a877f" font-family="'JetBrains Mono',monospace" font-size="10">la regalía se subdivide · hasta 20 wallets · cap 30%</text>
        </g>
      </svg>
      <svg viewBox="0 0 300 400" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rsr-gv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
        </defs>
        <text x="150" y="20" text-anchor="middle" fill="#6b6862" font-family="'Spline Sans',sans-serif" font-size="10" letter-spacing="0.12em">ETAPA 1 · PRECIO</text>
        <circle cx="150" cy="58" r="30" fill="#131318" stroke="#C8A96E" stroke-width="2"/>
        <text x="150" y="55" text-anchor="middle" fill="#d9bf8a" font-family="'Fraunces',serif" font-size="19" font-weight="600">$20</text>
        <text x="150" y="71" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">reventa</text>
        <g fill="none" stroke-width="1.4" opacity="0.5">
          <path d="M126 78 Q90 110 64 132" stroke="#8fa8d0"/>
          <path d="M150 88 Q150 110 150 130" stroke="#C8A96E" opacity="0.9"/>
          <path d="M174 78 Q210 110 236 132" stroke="#9a978f"/>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.5s" fill="freeze"/>
          <circle r="3.2" fill="#8fa8d0"><animateMotion path="M126 78 Q90 110 64 132" dur="1.8s" begin="0.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.8s" begin="0.6s" repeatCount="indefinite"/></circle>
          <circle r="3.2" fill="#d9bf8a"><animateMotion path="M150 88 Q150 110 150 130" dur="1.8s" begin="0.9s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.8s" begin="0.9s" repeatCount="indefinite"/></circle>
          <circle r="3.2" fill="#9a978f"><animateMotion path="M174 78 Q210 110 236 132" dur="1.8s" begin="1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.8s" begin="1.2s" repeatCount="indefinite"/></circle>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.55s" fill="freeze"/>
          <text x="40" y="150" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="11" font-weight="600">Vendedor</text>
          <text x="40" y="164" text-anchor="middle" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="9">≈ $17,50</text>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.85s" fill="freeze"/>
          <text x="260" y="150" text-anchor="middle" fill="#c9c6bd" font-family="'Spline Sans',sans-serif" font-size="11" font-weight="600">Grooves</text>
          <text x="260" y="164" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">2,5%</text>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.7s" fill="freeze"/>
          <circle cx="150" cy="158" r="32" fill="#1a1d2e" stroke="url(#rsr-gv)" stroke-width="2.2"/>
          <circle cx="150" cy="158" r="32" fill="none" stroke="#C8A96E" stroke-width="2.2" opacity="0.35"><animate attributeName="opacity" values="0.35;0;0.35" dur="2.4s" repeatCount="indefinite"/><animate attributeName="r" values="32;38;32" dur="2.4s" repeatCount="indefinite"/></circle>
          <text x="150" y="154" text-anchor="middle" fill="#d9bf8a" font-family="'Fraunces',serif" font-size="18" font-weight="600">10%</text>
          <text x="150" y="170" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="8.5">regalía · $2</text>
        </g>
        <text x="150" y="216" text-anchor="middle" fill="#6b6862" font-family="'Spline Sans',sans-serif" font-size="10" letter-spacing="0.12em">ETAPA 2 · LA REGALÍA</text>
        <g fill="none" stroke="url(#rsr-gv)" stroke-width="1.4" opacity="0">
          <animate attributeName="opacity" values="0;0.55" dur="0.6s" begin="1.05s" fill="freeze"/>
          <path d="M126 178 Q70 215 56 244" stroke-dasharray="150" stroke-dashoffset="150"><animate attributeName="stroke-dashoffset" values="150;0" dur="1.1s" begin="1.05s" fill="freeze"/></path>
          <path d="M150 190 Q150 215 150 244" stroke-dasharray="80" stroke-dashoffset="80"><animate attributeName="stroke-dashoffset" values="80;0" dur="1.1s" begin="1.2s" fill="freeze"/></path>
          <path d="M174 178 Q230 215 244 244" stroke-dasharray="150" stroke-dashoffset="150"><animate attributeName="stroke-dashoffset" values="150;0" dur="1.1s" begin="1.35s" fill="freeze"/></path>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.6s" fill="freeze"/>
          <circle r="3" fill="#d9bf8a"><animateMotion path="M126 178 Q70 215 56 244" dur="1.7s" begin="1.7s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" begin="1.7s" repeatCount="indefinite"/></circle>
          <circle r="3" fill="#d9bf8a"><animateMotion path="M150 190 Q150 215 150 244" dur="1.7s" begin="1.9s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" begin="1.9s" repeatCount="indefinite"/></circle>
          <circle r="3" fill="#d9bf8a"><animateMotion path="M174 178 Q230 215 244 244" dur="1.7s" begin="2.1s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" begin="2.1s" repeatCount="indefinite"/></circle>
        </g>
        <g font-family="'Spline Sans',sans-serif" text-anchor="middle">
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.5s" fill="freeze"/>
            <rect x="38" y="252" width="12" height="12" rx="3" fill="url(#rsr-gv)"/>
            <text x="56" y="262" fill="#ece9e1" font-size="11.5" font-weight="600" text-anchor="start">Artista</text>
            <text x="56" y="276" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9" text-anchor="start">50% · $1,00</text>
          </g>
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.65s" fill="freeze"/>
            <rect x="120" y="252" width="12" height="12" rx="3" fill="#C8A96E" opacity="0.8"/>
            <text x="138" y="262" fill="#ece9e1" font-size="11.5" font-weight="600" text-anchor="start">Productor</text>
            <text x="138" y="276" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9" text-anchor="start">30% · $0,60</text>
          </g>
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.8s" fill="freeze"/>
            <rect x="38" y="300" width="12" height="12" rx="3" fill="#C8A96E" opacity="0.6"/>
            <text x="56" y="310" fill="#ece9e1" font-size="11.5" font-weight="600" text-anchor="start">Featuring</text>
            <text x="56" y="324" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9" text-anchor="start">20% · $0,40</text>
          </g>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="2s" fill="freeze"/>
          <text x="150" y="360" text-anchor="middle" fill="#8a877f" font-family="'JetBrains Mono',monospace" font-size="8.5">la regalía se subdivide</text>
          <text x="150" y="375" text-anchor="middle" fill="#8a877f" font-family="'JetBrains Mono',monospace" font-size="8.5">hasta 20 wallets · cap 30%</text>
        </g>
      </svg>
      <div class="figure-cap">Fig. 6.5 — La regalía de reventa también se reparte entre el equipo</div>
    </div>

    <h2>Comparativa de valor</h2>

    <div class="figure">
      <svg viewBox="0 0 560 280" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="32" text-anchor="middle" fill="#e08a72" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="1">STREAMING (alquilas)</text><text x="410" y="32" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="1">GROOVES (posees)</text><line x1="280" y1="46" x2="280" y2="262" stroke="#2a2a30" stroke-width="1"/><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.30s" fill="freeze"/><path d="M34 76 l8 8 M42 76 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><text x="52" y="84" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="12">10 años → posees nada</text><path d="M300 77 l3 3.5 l7 -8" fill="none" stroke="#4a8c5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><text x="316" y="84" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="12">10 obras tuyas y revendibles</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.50s" fill="freeze"/><path d="M34 124 l8 8 M42 124 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><text x="52" y="132" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="12">cancelas → pierdes todo</text><path d="M300 125 l3 3.5 l7 -8" fill="none" stroke="#4a8c5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><text x="316" y="132" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="12">lo conservas para siempre</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.70s" fill="freeze"/><path d="M34 172 l8 8 M42 172 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><text x="52" y="180" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="12">artista ≈ $400/mes</text><path d="M300 173 l3 3.5 l7 -8" fill="none" stroke="#4a8c5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><text x="316" y="180" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="12">artista $7.125 directos + royalties</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.90s" fill="freeze"/><path d="M34 220 l8 8 M42 220 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><text x="52" y="228" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="12">el artista crece, pagas igual</text><path d="M300 221 l3 3.5 l7 -8" fill="none" stroke="#4a8c5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><text x="316" y="228" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="12">se revaloriza: ambos ganan</text></g>
      </svg>
      <svg viewBox="0 0 300 330" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <text x="20" y="26" fill="#e08a72" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="1">STREAMING (alquilas)</text><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.45s" begin="0.25s" fill="freeze"/><path d="M20 50 l8 8 M28 50 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><text x="40" y="58" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11.5">10 años → posees nada</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.45s" begin="0.37s" fill="freeze"/><path d="M20 78 l8 8 M28 78 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><text x="40" y="86" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11.5">cancelas → pierdes todo</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.45s" begin="0.49s" fill="freeze"/><path d="M20 106 l8 8 M28 106 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><text x="40" y="114" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11.5">artista ≈ $400/mes</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.45s" begin="0.61s" fill="freeze"/><path d="M20 134 l8 8 M28 134 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><text x="40" y="142" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11.5">el artista crece, pagas igual</text></g><line x1="20" y1="162" x2="280" y2="162" stroke="#2a2a30" stroke-width="1"/><text x="20" y="190" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="1">GROOVES (posees)</text><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.45s" begin="0.85s" fill="freeze"/><path d="M20 215 l3 3.5 l7 -8" fill="none" stroke="#4a8c5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><text x="40" y="222" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="11.5">10 obras tuyas y revendibles</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.45s" begin="0.97s" fill="freeze"/><path d="M20 243 l3 3.5 l7 -8" fill="none" stroke="#4a8c5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><text x="40" y="250" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="11.5">lo conservas para siempre</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.45s" begin="1.09s" fill="freeze"/><path d="M20 271 l3 3.5 l7 -8" fill="none" stroke="#4a8c5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><text x="40" y="278" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="11.5">artista $7.125 directos + royalties</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.45s" begin="1.21s" fill="freeze"/><path d="M20 299 l3 3.5 l7 -8" fill="none" stroke="#4a8c5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><text x="40" y="306" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="11.5">se revaloriza: ambos ganan</text></g>
      </svg>
      <div class="figure-cap">Fig. 6.6 — Alquilar vs. poseer</div>
    </div>

    <h2>Moneda de operación: USDC</h2>
    <p>Todas las transacciones en Grooves se realizan en <strong>USDC</strong>, el stablecoin respaldado 1:1 por el dólar estadounidense, con auditorías públicas de sus reservas. Esta es una decisión de diseño fundamental, no una limitación técnica.</p>

    <div class="figure">
      <svg viewBox="0 0 560 224" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <text x="145" y="30" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13.5" font-weight="600">USDC — dinero real</text><line x1="40" y1="120" x2="255" y2="120" stroke="#2a2a30" stroke-width="1"/><line x1="40" y1="85" x2="255" y2="85" stroke="#C8A96E" stroke-width="2.4" stroke-dasharray="215" stroke-dashoffset="215"><animate attributeName="stroke-dashoffset" values="215;0" dur="1.3s" fill="freeze"/></line><circle cx="148" cy="85" r="3.5" fill="#C8A96E"><animate attributeName="opacity" values="1;0.4;1" dur="2.4s" repeatCount="indefinite"/></circle><text x="262" y="89" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="9">$1.00</text><text x="145" y="150" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">1:1 con el dólar · auditado on-chain</text><text x="145" y="167" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="10.5">$15 → $14,25 reales</text><line x1="278" y1="20" x2="278" y2="175" stroke="#2a2a30" stroke-width="1"/><text x="415" y="30" text-anchor="middle" fill="#e08a72" font-family="'Spline Sans',sans-serif" font-size="13.5" font-weight="600">Token especulativo</text><path d="M455 22 l8 8 M463 22 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><line x1="300" y1="120" x2="530" y2="120" stroke="#2a2a30" stroke-width="1"/><path d="M300 100 L322 62 L342 88 L366 48 L388 95 L410 58 L432 108 L455 78 L500 122" fill="none" stroke="#c0563f" stroke-width="2.2" stroke-dasharray="320" stroke-dashoffset="320"><animate attributeName="stroke-dashoffset" values="320;0" dur="1.6s" fill="freeze"/></path><circle cx="500" cy="122" r="3.5" fill="#c0563f" opacity="0"><animate attributeName="opacity" values="0;1;0.3;1" dur="1.8s" begin="1.6s" repeatCount="indefinite"/></circle><text x="415" y="150" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">sube y baja · perjudica</text><text x="415" y="167" text-anchor="middle" fill="#e08a72" font-family="'JetBrains Mono',monospace" font-size="10.5">hoy 100, mañana 50</text><text x="280" y="208" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9.5">Grooves usa USDC: valor real, no fichas que mañana valen la mitad</text>
      </svg>
      <svg viewBox="0 0 300 344" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="24" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">USDC — dinero real</text><line x1="30" y1="92" x2="270" y2="92" stroke="#2a2a30" stroke-width="1"/><line x1="30" y1="66" x2="270" y2="66" stroke="#C8A96E" stroke-width="2.4" stroke-dasharray="240" stroke-dashoffset="240"><animate attributeName="stroke-dashoffset" values="240;0" dur="1.3s" fill="freeze"/></line><circle cx="150" cy="66" r="3.5" fill="#C8A96E"><animate attributeName="opacity" values="1;0.4;1" dur="2.4s" repeatCount="indefinite"/></circle><text x="150" y="116" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">1:1 con el dólar · auditado on-chain</text><text x="150" y="132" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="10.5">$15 → $14,25 reales</text><line x1="30" y1="150" x2="270" y2="150" stroke="#2a2a30" stroke-width="1"/><text x="150" y="176" text-anchor="middle" fill="#e08a72" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Token especulativo ✗</text><line x1="30" y1="240" x2="270" y2="240" stroke="#2a2a30" stroke-width="1"/><path d="M30 220 L62 190 L90 212 L120 186 L150 224 L180 196 L210 228 L240 200 L270 234" fill="none" stroke="#c0563f" stroke-width="2.2" stroke-dasharray="300" stroke-dashoffset="300"><animate attributeName="stroke-dashoffset" values="300;0" dur="1.6s" fill="freeze"/></path><text x="150" y="262" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">sube y baja · perjudica</text><text x="150" y="278" text-anchor="middle" fill="#e08a72" font-family="'JetBrains Mono',monospace" font-size="10.5">hoy 100, mañana 50</text><text x="150" y="316" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="8.5">Grooves usa USDC: valor real,</text><text x="150" y="330" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="8.5">no fichas que mañana valen la mitad.</text>
      </svg>
      <div class="figure-cap">Fig. 6.7 — USDC: valor real, no especulación</div>
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
    <p class="ch-lead">Grooves charges no commission to publish: no creation fees, no upload costs, no listing commissions. The platform's only commission appears when a Pressing sells. The caveat: registering the work on the blockchain has a network cost — the gas — which the artist covers in USDC.</p>

    <p>The artist uploads their work to the Pressing Studio, configures their Edition and creates their Pressings without paying any commission to Grooves; the only thing they pay is the network cost to register them on the blockchain, charged in USDC (no native cryptocurrency needed). Grooves doesn't profit from that — it only covers the network: if the artist doesn't sell, Grooves doesn't charge. Incentives are completely aligned.</p>

    <h2>Primary sale — from artist to fan</h2>
    <p>When a fan buys a Pressing directly from the artist, the split is simple and transparent:</p>

    <div class="figure">
      <svg viewBox="0 0 460 240" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="me-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <g transform="translate(120,120)">
          <circle r="78" fill="none" stroke="#1a1d2e" stroke-width="26"/>
          <circle r="78" fill="none" stroke="#4a6fa5" stroke-width="26" stroke-dasharray="490" stroke-dashoffset="0" transform="rotate(-90)"/>
          <circle r="78" fill="none" stroke="url(#me-g)" stroke-width="26" stroke-dasharray="465 490" stroke-dashoffset="490" transform="rotate(-90)"><animate attributeName="stroke-dashoffset" values="490;25" dur="1.4s" fill="freeze" calcMode="spline" keySplines="0.3 0 0.2 1"/></circle>
          <text y="-4" text-anchor="middle" fill="#C8A96E" font-family="'Fraunces',serif" font-size="30" font-weight="600" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/>95%</text>
          <text y="16" text-anchor="middle" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.1s" fill="freeze"/>to artist</text>
        </g>
        <g font-family="'Spline Sans',sans-serif" font-size="13">
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.4s" fill="freeze"/><rect x="250" y="78" width="18" height="18" rx="4" fill="url(#me-g)"/><text x="278" y="92" fill="#ece9e1">Artist / Label — 95%</text></g>
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.6s" fill="freeze"/><rect x="250" y="118" width="18" height="18" rx="4" fill="#4a6fa5"/><text x="278" y="132" fill="#ece9e1">Grooves — 5%</text></g>
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.9s" fill="freeze"/><text x="250" y="172" fill="#6b6862" font-size="11" font-family="'JetBrains Mono'">Example: $15 →</text><text x="250" y="190" fill="#C8A96E" font-size="11" font-family="'JetBrains Mono'">$14.25 to artist</text></g>
        </g>
      </svg>
      <svg viewBox="0 0 300 300" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="me-gv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <g transform="translate(150,100)">
          <circle r="70" fill="none" stroke="#1a1d2e" stroke-width="24"/>
          <circle r="70" fill="none" stroke="#4a6fa5" stroke-width="24" stroke-dasharray="440" transform="rotate(-90)"/>
          <circle r="70" fill="none" stroke="url(#me-gv)" stroke-width="24" stroke-dasharray="418 440" stroke-dashoffset="440" transform="rotate(-90)"><animate attributeName="stroke-dashoffset" values="440;22" dur="1.4s" fill="freeze" calcMode="spline" keySplines="0.3 0 0.2 1"/></circle>
          <text y="-2" text-anchor="middle" fill="#C8A96E" font-family="'Fraunces',serif" font-size="28" font-weight="600" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/>95%</text>
          <text y="18" text-anchor="middle" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.1s" fill="freeze"/>to artist</text>
        </g>
        <g font-family="'Spline Sans',sans-serif" font-size="13" text-anchor="middle">
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.4s" fill="freeze"/><rect x="60" y="208" width="16" height="16" rx="4" fill="url(#me-gv)"/><text x="150" y="221" fill="#ece9e1">Artist / Label — 95%</text></g>
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.6s" fill="freeze"/><rect x="60" y="240" width="16" height="16" rx="4" fill="#4a6fa5"/><text x="150" y="253" fill="#ece9e1">Grooves — 5%</text></g>
          <text x="150" y="284" fill="#C8A96E" font-size="11" font-family="'JetBrains Mono'" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.9s" fill="freeze"/>$15 → $14.25 to artist</text>
        </g>
      </svg>
      <div class="figure-cap">Fig. 6.1 — Primary sale distribution</div>
    </div>

    <h2>Splitting among collaborators</h2>
    <p>A work is rarely the product of a single person. That's why that 95% doesn't have to go to a single wallet: the artist can split it among <strong>up to 20 collaborators</strong> — musicians, producers, the label, publishers — with whatever percentages they agree on. The split is defined when building the Edition, must add up to 100%, and each collaborator only needs a wallet address: no Grooves account required.</p>

    <div class="figure">
          <svg viewBox="0 0 560 230" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="spp-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
              <clipPath id="spp-clip"><rect x="40" y="60" width="0" height="34" rx="6"><animate attributeName="width" values="0;480" dur="1.4s" begin="0.3s" fill="freeze" calcMode="spline" keySplines="0.3 0 0.2 1"/></rect></clipPath>
            </defs>
            <text x="40" y="42" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="13.5" font-weight="600">The artist's 95%, split by the artist</text>
            <rect x="40" y="60" width="480" height="34" rx="6" fill="#1a1d2e"/>
            <g clip-path="url(#spp-clip)">
              <rect x="40" y="60" width="264" height="34" fill="url(#spp-g)"/>
              <rect x="304" y="60" width="96" height="34" fill="#4a6fa5"/>
              <rect x="400" y="60" width="48" height="34" fill="#4a8c5c"/>
              <rect x="448" y="60" width="48" height="34" fill="#C8A96E"/>
              <rect x="496" y="60" width="24" height="34" fill="#8a877f"/>
            </g>
            <line x1="304" y1="60" x2="304" y2="94" stroke="#131318" stroke-width="2"/>
            <line x1="400" y1="60" x2="400" y2="94" stroke="#131318" stroke-width="2"/>
            <line x1="448" y1="60" x2="448" y2="94" stroke="#131318" stroke-width="2"/>
            <line x1="496" y1="60" x2="496" y2="94" stroke="#131318" stroke-width="2"/>
            <g font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="middle">
              <text x="172" y="82" fill="#131318" font-weight="600" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.0s" fill="freeze"/>55%</text>
              <text x="352" y="82" fill="#ece9e1" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.2s" fill="freeze"/>20%</text>
            </g>
            <text x="40" y="118" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9.5">up to 20 wallets · sums to 100% · locked at publish</text>
            <g font-family="'Spline Sans',sans-serif" font-size="12.5">
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.45s" fill="freeze"/><rect x="40" y="142" width="14" height="14" rx="3" fill="url(#spp-g)"/><text x="62" y="153" fill="#ece9e1">Artist</text><text x="232" y="153" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">55%</text></g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.60s" fill="freeze"/><rect x="40" y="166" width="14" height="14" rx="3" fill="#4a6fa5"/><text x="62" y="177" fill="#ece9e1">Producer</text><text x="232" y="177" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">20%</text></g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.75s" fill="freeze"/><rect x="40" y="190" width="14" height="14" rx="3" fill="#4a8c5c"/><text x="62" y="201" fill="#ece9e1">Bassist</text><text x="232" y="201" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">10%</text></g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.90s" fill="freeze"/><rect x="296" y="142" width="14" height="14" rx="3" fill="#C8A96E"/><text x="318" y="153" fill="#ece9e1">Label</text><text x="500" y="153" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">10%</text></g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="2.05s" fill="freeze"/><rect x="296" y="166" width="14" height="14" rx="3" fill="#8a877f"/><text x="318" y="177" fill="#ece9e1">Manager</text><text x="500" y="177" fill="#c9c6bd" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">5%</text></g>
              <text x="296" y="201" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="9.5" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="2.2s" fill="freeze"/>splits revenue, not access</text>
            </g>
          </svg>
          <svg viewBox="0 0 300 332" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="spp-gv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
              <clipPath id="spp-clipv"><rect x="34" y="60" width="40" height="0" rx="6"><animate attributeName="height" values="0;200" dur="1.4s" begin="0.3s" fill="freeze" calcMode="spline" keySplines="0.3 0 0.2 1"/></rect></clipPath>
            </defs>
            <text x="150" y="34" text-anchor="middle" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">The artist's 95%, split</text>
            <rect x="34" y="60" width="40" height="200" rx="6" fill="#1a1d2e"/>
            <g clip-path="url(#spp-clipv)">
              <rect x="34" y="60" width="40" height="110" fill="url(#spp-gv)"/>
              <rect x="34" y="170" width="40" height="40" fill="#4a6fa5"/>
              <rect x="34" y="210" width="40" height="20" fill="#4a8c5c"/>
              <rect x="34" y="230" width="40" height="20" fill="#C8A96E"/>
              <rect x="34" y="250" width="40" height="10" fill="#8a877f"/>
            </g>
            <line x1="34" y1="170" x2="74" y2="170" stroke="#131318" stroke-width="2"/>
            <line x1="34" y1="210" x2="74" y2="210" stroke="#131318" stroke-width="2"/>
            <line x1="34" y1="230" x2="74" y2="230" stroke="#131318" stroke-width="2"/>
            <line x1="34" y1="250" x2="74" y2="250" stroke="#131318" stroke-width="2"/>
            <g font-family="'Spline Sans',sans-serif" font-size="12.5">
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.45s" fill="freeze"/><rect x="92" y="64" width="14" height="14" rx="3" fill="url(#spp-gv)"/><text x="114" y="75" fill="#ece9e1">Artist</text><text x="266" y="75" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">55%</text></g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.60s" fill="freeze"/><rect x="92" y="92" width="14" height="14" rx="3" fill="#4a6fa5"/><text x="114" y="103" fill="#ece9e1">Producer</text><text x="266" y="103" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">20%</text></g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.75s" fill="freeze"/><rect x="92" y="120" width="14" height="14" rx="3" fill="#4a8c5c"/><text x="114" y="131" fill="#ece9e1">Bassist</text><text x="266" y="131" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">10%</text></g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.90s" fill="freeze"/><rect x="92" y="148" width="14" height="14" rx="3" fill="#C8A96E"/><text x="114" y="159" fill="#ece9e1">Label</text><text x="266" y="159" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">10%</text></g>
              <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="2.05s" fill="freeze"/><rect x="92" y="176" width="14" height="14" rx="3" fill="#8a877f"/><text x="114" y="187" fill="#ece9e1">Manager</text><text x="266" y="187" fill="#c9c6bd" font-family="'JetBrains Mono',monospace" font-size="11" text-anchor="end">5%</text></g>
            </g>
            <text x="150" y="294" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">up to 20 wallets · sums to 100%</text>
            <text x="150" y="310" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">locked at publish</text>
            <text x="150" y="326" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="9">splits revenue, not access</text>
          </svg>
          <div class="figure-cap">Fig. 6.2 — The artist's 95% is split among collaborators</div>
        </div>

    <p>When a fan buys, the split is distributed <strong>automatically and in the same transaction</strong>: each wallet receives its share instantly, with no one having to divide anything by hand afterward. And it splits <em>revenue</em>, not ownership: the wallets in the split collect their percentage, but access to the master and the Bound Content stays exclusive to the Pressing's owner.</p>

    <h2>Time-limited shares</h2>
    <p>Not every arrangement is forever. A share of the split can carry an <strong>expiration date</strong>: for example, the producer collects 10% for the first year and, once the term is up, that percentage returns automatically to the creator. It isn't redistributed to anyone else, and nothing has to be renegotiated — the contract does it on its own.</p>

    <div class="figure">
      <svg viewBox="0 0 560 230" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="spt-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
        </defs>

        <!-- timeline -->
        <line x1="40" y1="70" x2="520" y2="70" stroke="#3a3a40" stroke-width="1.4"/>
        <text x="40" y="50" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11">active period</text>
        <text x="520" y="50" text-anchor="end" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11">after expiry</text>

        <!-- expiry marker -->
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.4s" fill="freeze"/>
          <line x1="280" y1="40" x2="280" y2="100" stroke="#C8A96E" stroke-width="1.4" stroke-dasharray="3 3"/>
          <circle cx="280" cy="70" r="5" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/>
          <text x="280" y="30" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">expires</text>
          <text x="280" y="118" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="10">01/2027</text>
        </g>

        <!-- LEFT: active chips -->
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.65s" fill="freeze"/>
          <rect x="62" y="150" width="86" height="30" rx="8" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.4"/>
          <text x="105" y="170" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Producer 10%</text>
          <rect x="158" y="150" width="78" height="30" rx="8" fill="#1a1d2e" stroke="url(#spt-g)" stroke-width="1.4"/>
          <text x="197" y="170" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Artist 90%</text>
        </g>

        <!-- RIGHT: Artist 100% node (creator) -->
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/>
          <circle cx="448" cy="165" r="36" fill="#131318" stroke="#C8A96E" stroke-width="2"/>
          <text x="448" y="162" text-anchor="middle" fill="#d9bf8a" font-family="'Fraunces',serif" font-size="22" font-weight="600">100%</text>
          <text x="448" y="180" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">Artist</text>
        </g>

        <!-- curve of the 10% returning to creator -->
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.15s" fill="freeze"/>
          <path id="spt-back" d="M236 165 Q330 215 412 165" fill="none" stroke="#4a6fa5" stroke-width="1.6" stroke-dasharray="220" stroke-dashoffset="220"><animate attributeName="stroke-dashoffset" values="220;0" dur="1.3s" begin="1.15s" fill="freeze"/></path>
          <text x="324" y="212" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">+10% back to creator</text>
          <!-- arrowhead -->
          <path d="M412 165 l-9 -2 l4 8 z" fill="#4a6fa5"><animate attributeName="opacity" values="0;0;1" keyTimes="0;0.85;1" dur="1.3s" begin="1.15s" fill="freeze"/></path>
        </g>

        <!-- dot traveling the 10% curve -->
        <circle r="3.5" fill="#8fa8d0" opacity="0">
          <animateMotion path="M236 165 Q330 215 412 165" dur="1.6s" begin="2.4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" begin="2.4s" repeatCount="indefinite"/>
        </circle>

        <!-- mono note -->
        <text x="280" y="222" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="9.5" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.6s" fill="freeze"/>after the date, that % returns to the creator · set at publish</text>
      </svg>

      <svg viewBox="0 0 300 340" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="spt-gv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
        </defs>

        <!-- vertical timeline -->
        <line x1="40" y1="30" x2="40" y2="270" stroke="#3a3a40" stroke-width="1.4"/>
        <text x="58" y="26" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11">active period</text>

        <!-- active chips -->
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.4s" fill="freeze"/>
          <rect x="58" y="40" width="118" height="30" rx="8" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.4"/>
          <text x="117" y="60" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Producer 10%</text>
          <rect x="58" y="78" width="118" height="30" rx="8" fill="#1a1d2e" stroke="url(#spt-gv)" stroke-width="1.4"/>
          <text x="117" y="98" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Artist 90%</text>
        </g>

        <!-- expiry marker -->
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.7s" fill="freeze"/>
          <line x1="22" y1="150" x2="200" y2="150" stroke="#C8A96E" stroke-width="1.4" stroke-dasharray="3 3"/>
          <circle cx="40" cy="150" r="5" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/>
          <text x="58" y="146" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">expires</text>
          <text x="58" y="164" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="10">01/2027</text>
        </g>

        <text x="58" y="186" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/>after expiry</text>

        <!-- Artist 100% node -->
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.0s" fill="freeze"/>
          <circle cx="150" cy="246" r="36" fill="#131318" stroke="#C8A96E" stroke-width="2"/>
          <text x="150" y="243" text-anchor="middle" fill="#d9bf8a" font-family="'Fraunces',serif" font-size="22" font-weight="600">100%</text>
          <text x="150" y="261" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">Artist</text>
        </g>

        <!-- 10% returning curve -->
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.25s" fill="freeze"/>
          <path d="M64 196 Q70 246 112 246" fill="none" stroke="#4a6fa5" stroke-width="1.6" stroke-dasharray="120" stroke-dashoffset="120"><animate attributeName="stroke-dashoffset" values="120;0" dur="1.3s" begin="1.25s" fill="freeze"/></path>
          <path d="M112 246 l-9 -2 l4 8 z" fill="#4a6fa5"><animate attributeName="opacity" values="0;0;1" keyTimes="0;0.85;1" dur="1.3s" begin="1.25s" fill="freeze"/></path>
          <text x="40" y="216" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="11" font-weight="600">+10%</text>
        </g>

        <!-- traveling dot -->
        <circle r="3.5" fill="#8fa8d0" opacity="0">
          <animateMotion path="M64 196 Q70 246 112 246" dur="1.6s" begin="2.6s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" begin="2.6s" repeatCount="indefinite"/>
        </circle>

        <!-- mono note -->
        <text x="150" y="300" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="9" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.6s" fill="freeze"/>that % returns to the creator</text>
        <text x="150" y="314" text-anchor="middle" fill="#6b6862" font-family="'JetBrains Mono',monospace" font-size="9" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.8s" fill="freeze"/>set at publish</text>
      </svg>

      <div class="figure-cap">Fig. 6.3 — A share can expire and return to the creator</div>
    </div>

    <div class="callout">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/></svg>
      <p><strong>The split is sealed.</strong> Once the Edition is published, the percentages, the wallets and the dates are fixed on the blockchain: neither Grooves nor anyone else can change them afterward. Whoever is in the split collects exactly what was agreed, on every sale. (How it's signed and enforced is in the Architecture chapter.)</p>
    </div>

    <h2>Secondary resale — fan to fan</h2>
    <p>Here is the magic the traditional model never allowed: <strong>on every resale, the artist earns again.</strong> The seller receives the bulk of the price; the artist automatically collects their royalty — a percentage they themselves set when creating the work — and Grooves charges a smaller commission than on the primary sale.</p>

    <div class="figure">
      <svg viewBox="0 0 560 230" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <circle cx="84" cy="115" r="36" fill="#131318" stroke="#C8A96E" stroke-width="2"/><text x="84" y="110" text-anchor="middle" fill="#d9bf8a" font-family="'Fraunces',serif" font-size="22" font-weight="600">$20</text><text x="84" y="128" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">resale</text><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.40s" fill="freeze"/><path d="M120 115 Q200 115 246 55" fill="none" stroke="#C8A96E" stroke-width="1.4" opacity="0.45"/><circle cx="252" cy="55" r="5.5" fill="#C8A96E"/><text x="270" y="53" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Seller</text><text x="270" y="69" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">≈ $17.50 · minus commissions</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.65s" fill="freeze"/><path d="M120 115 Q200 115 246 115" fill="none" stroke="#C8A96E" stroke-width="1.4" opacity="0.45"/><circle cx="252" cy="115" r="7" fill="none" stroke="#C8A96E" stroke-width="1.6"/><circle cx="252" cy="115" r="7" fill="none" stroke="#C8A96E" stroke-width="1.2" opacity="0"><animate attributeName="opacity" values="0;0.6;0" dur="2.2s" repeatCount="indefinite"/><animate attributeName="r" values="7;13;7" dur="2.2s" repeatCount="indefinite"/></circle><text x="270" y="113" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Artist · royalty 5–15%</text><text x="270" y="129" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">↻ earns again</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.90s" fill="freeze"/><path d="M120 115 Q200 115 246 175" fill="none" stroke="#4a6fa5" stroke-width="1.4" opacity="0.45"/><circle cx="252" cy="175" r="5.5" fill="#4a6fa5"/><text x="270" y="173" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Grooves · 2.5%</text><text x="270" y="189" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">platform commission</text></g>
      </svg>
      <svg viewBox="0 0 300 300" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="50" r="32" fill="#131318" stroke="#C8A96E" stroke-width="2"/><text x="150" y="46" text-anchor="middle" fill="#d9bf8a" font-family="'Fraunces',serif" font-size="20" font-weight="600">$20</text><text x="150" y="63" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">resale</text><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.40s" fill="freeze"/><path d="M150 82 Q40 90 40 120" fill="none" stroke="#C8A96E" stroke-width="1.3" opacity="0.4"/><circle cx="40" cy="120" r="5.5" fill="#C8A96E"/><text x="62" y="118" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="12.5" font-weight="600">Seller</text><text x="62" y="133" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">≈ $17.50 · minus commissions</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.62s" fill="freeze"/><path d="M150 82 Q40 160 40 190" fill="none" stroke="#C8A96E" stroke-width="1.3" opacity="0.4"/><circle cx="40" cy="190" r="7" fill="none" stroke="#C8A96E" stroke-width="1.6"/><circle cx="40" cy="190" r="7" fill="none" stroke="#C8A96E" stroke-width="1.2" opacity="0"><animate attributeName="opacity" values="0;0.6;0" dur="2.2s" repeatCount="indefinite"/><animate attributeName="r" values="7;13;7" dur="2.2s" repeatCount="indefinite"/></circle><text x="62" y="188" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="12.5" font-weight="600">Artist · royalty 5–15%</text><text x="62" y="203" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">↻ earns again</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.84s" fill="freeze"/><path d="M150 82 Q40 230 40 260" fill="none" stroke="#4a6fa5" stroke-width="1.3" opacity="0.4"/><circle cx="40" cy="260" r="5.5" fill="#4a6fa5"/><text x="62" y="258" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="12.5" font-weight="600">Grooves · 2.5%</text><text x="62" y="273" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">platform commission</text></g>
      </svg>
      <div class="figure-cap">Fig. 6.4 — On every resale, the artist earns again</div>
    </div>

    <p>And that royalty doesn't have to stay with a single person either: <strong>it's split among the team</strong>, just like the primary sale. The artist defines which wallets collect the royalty and in what proportion — up to 20 — as subdivisions of the total percentage, which can reach 30%. So every resale automatically pays everyone who made the work possible.</p>

    <div class="figure">
      <svg viewBox="0 0 580 270" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rsr-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
        </defs>
        <g font-family="'Spline Sans',sans-serif" font-size="10" letter-spacing="0.12em">
          <text x="70" y="26" text-anchor="middle" fill="#6b6862">STAGE 1 · PRICE</text>
          <text x="470" y="26" text-anchor="middle" fill="#6b6862">STAGE 2 · THE ROYALTY</text>
        </g>
        <line x1="312" y1="42" x2="312" y2="226" stroke="#2a2a30" stroke-width="1" stroke-dasharray="3 5"/>
        <circle cx="70" cy="135" r="36" fill="#131318" stroke="#C8A96E" stroke-width="2"/>
        <text x="70" y="130" text-anchor="middle" fill="#d9bf8a" font-family="'Fraunces',serif" font-size="22" font-weight="600">$20</text>
        <text x="70" y="148" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">resale</text>
        <g fill="none" stroke-width="1.4" opacity="0.5">
          <path id="rsr-p1" d="M106 119 Q170 80 232 66" stroke="#8fa8d0"/>
          <path id="rsr-p2" d="M106 135 Q170 135 232 135" stroke="#C8A96E" opacity="0.9"/>
          <path id="rsr-p3" d="M106 151 Q170 190 232 204" stroke="#9a978f"/>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.5s" fill="freeze"/>
          <circle r="3.5" fill="#8fa8d0"><animateMotion path="M106 119 Q170 80 232 66" dur="1.8s" begin="0.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.8s" begin="0.6s" repeatCount="indefinite"/></circle>
          <circle r="3.5" fill="#d9bf8a"><animateMotion path="M106 135 Q170 135 232 135" dur="1.8s" begin="0.9s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.8s" begin="0.9s" repeatCount="indefinite"/></circle>
          <circle r="3.5" fill="#9a978f"><animateMotion path="M106 151 Q170 190 232 204" dur="1.8s" begin="1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.8s" begin="1.2s" repeatCount="indefinite"/></circle>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.55s" fill="freeze"/>
          <circle cx="240" cy="66" r="6" fill="none" stroke="#8fa8d0" stroke-width="1.6"/>
          <text x="254" y="63" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12.5" font-weight="600">Seller</text>
          <text x="254" y="78" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="10">≈ $17.50</text>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.85s" fill="freeze"/>
          <circle cx="240" cy="204" r="6" fill="none" stroke="#9a978f" stroke-width="1.6"/>
          <text x="254" y="201" fill="#c9c6bd" font-family="'Spline Sans',sans-serif" font-size="12.5" font-weight="600">Grooves</text>
          <text x="254" y="216" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="10">2.5% · $0.50</text>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.7s" fill="freeze"/>
          <circle cx="270" cy="135" r="38" fill="#1a1d2e" stroke="url(#rsr-g)" stroke-width="2.2"/>
          <circle cx="270" cy="135" r="38" fill="none" stroke="#C8A96E" stroke-width="2.2" opacity="0.35"><animate attributeName="opacity" values="0.35;0;0.35" dur="2.4s" repeatCount="indefinite"/><animate attributeName="r" values="38;44;38" dur="2.4s" repeatCount="indefinite"/></circle>
          <text x="270" y="130" text-anchor="middle" fill="#d9bf8a" font-family="'Fraunces',serif" font-size="20" font-weight="600">10%</text>
          <text x="270" y="148" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9">royalty · $2.00</text>
        </g>
        <g fill="none" stroke="url(#rsr-g)" stroke-width="1.4" opacity="0">
          <animate attributeName="opacity" values="0;0.55" dur="0.6s" begin="1.05s" fill="freeze"/>
          <path id="rsr-q1" d="M308 124 Q400 100 470 86" stroke-dasharray="200" stroke-dashoffset="200"><animate attributeName="stroke-dashoffset" values="200;0" dur="1.1s" begin="1.05s" fill="freeze"/></path>
          <path id="rsr-q2" d="M308 135 Q400 135 470 135" stroke-dasharray="170" stroke-dashoffset="170"><animate attributeName="stroke-dashoffset" values="170;0" dur="1.1s" begin="1.2s" fill="freeze"/></path>
          <path id="rsr-q3" d="M308 146 Q400 170 470 184" stroke-dasharray="200" stroke-dashoffset="200"><animate attributeName="stroke-dashoffset" values="200;0" dur="1.1s" begin="1.35s" fill="freeze"/></path>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.6s" fill="freeze"/>
          <circle r="3.2" fill="#d9bf8a"><animateMotion path="M308 124 Q400 100 470 86" dur="1.7s" begin="1.7s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" begin="1.7s" repeatCount="indefinite"/></circle>
          <circle r="3.2" fill="#d9bf8a"><animateMotion path="M308 135 Q400 135 470 135" dur="1.7s" begin="1.9s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" begin="1.9s" repeatCount="indefinite"/></circle>
          <circle r="3.2" fill="#d9bf8a"><animateMotion path="M308 146 Q400 170 470 184" dur="1.7s" begin="2.1s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" begin="2.1s" repeatCount="indefinite"/></circle>
        </g>
        <g font-family="'Spline Sans',sans-serif">
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.5s" fill="freeze"/>
            <rect x="470" y="74" width="13" height="13" rx="3" fill="url(#rsr-g)"/>
            <text x="490" y="80" fill="#ece9e1" font-size="12.5" font-weight="600">Artist</text>
            <text x="490" y="93" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="10">50% · $1.00</text>
          </g>
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.65s" fill="freeze"/>
            <rect x="470" y="124" width="13" height="13" rx="3" fill="#C8A96E" opacity="0.8"/>
            <text x="490" y="130" fill="#ece9e1" font-size="12.5" font-weight="600">Producer</text>
            <text x="490" y="143" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="10">30% · $0.60</text>
          </g>
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.8s" fill="freeze"/>
            <rect x="470" y="172" width="13" height="13" rx="3" fill="#C8A96E" opacity="0.6"/>
            <text x="490" y="178" fill="#ece9e1" font-size="12.5" font-weight="600">Featuring</text>
            <text x="490" y="191" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="10">20% · $0.40</text>
          </g>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="2s" fill="freeze"/>
          <text x="290" y="252" text-anchor="middle" fill="#8a877f" font-family="'JetBrains Mono',monospace" font-size="10">the royalty is subdivided · up to 20 wallets · 30% cap</text>
        </g>
      </svg>
      <svg viewBox="0 0 300 400" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rsr-gv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
        </defs>
        <text x="150" y="20" text-anchor="middle" fill="#6b6862" font-family="'Spline Sans',sans-serif" font-size="10" letter-spacing="0.12em">STAGE 1 · PRICE</text>
        <circle cx="150" cy="58" r="30" fill="#131318" stroke="#C8A96E" stroke-width="2"/>
        <text x="150" y="55" text-anchor="middle" fill="#d9bf8a" font-family="'Fraunces',serif" font-size="19" font-weight="600">$20</text>
        <text x="150" y="71" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">resale</text>
        <g fill="none" stroke-width="1.4" opacity="0.5">
          <path d="M126 78 Q90 110 64 132" stroke="#8fa8d0"/>
          <path d="M150 88 Q150 110 150 130" stroke="#C8A96E" opacity="0.9"/>
          <path d="M174 78 Q210 110 236 132" stroke="#9a978f"/>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.5s" fill="freeze"/>
          <circle r="3.2" fill="#8fa8d0"><animateMotion path="M126 78 Q90 110 64 132" dur="1.8s" begin="0.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.8s" begin="0.6s" repeatCount="indefinite"/></circle>
          <circle r="3.2" fill="#d9bf8a"><animateMotion path="M150 88 Q150 110 150 130" dur="1.8s" begin="0.9s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.8s" begin="0.9s" repeatCount="indefinite"/></circle>
          <circle r="3.2" fill="#9a978f"><animateMotion path="M174 78 Q210 110 236 132" dur="1.8s" begin="1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.8s" begin="1.2s" repeatCount="indefinite"/></circle>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.55s" fill="freeze"/>
          <text x="40" y="150" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="11" font-weight="600">Seller</text>
          <text x="40" y="164" text-anchor="middle" fill="#8fa8d0" font-family="'JetBrains Mono',monospace" font-size="9">≈ $17.50</text>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.85s" fill="freeze"/>
          <text x="260" y="150" text-anchor="middle" fill="#c9c6bd" font-family="'Spline Sans',sans-serif" font-size="11" font-weight="600">Grooves</text>
          <text x="260" y="164" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">2.5%</text>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.7s" fill="freeze"/>
          <circle cx="150" cy="158" r="32" fill="#1a1d2e" stroke="url(#rsr-gv)" stroke-width="2.2"/>
          <circle cx="150" cy="158" r="32" fill="none" stroke="#C8A96E" stroke-width="2.2" opacity="0.35"><animate attributeName="opacity" values="0.35;0;0.35" dur="2.4s" repeatCount="indefinite"/><animate attributeName="r" values="32;38;32" dur="2.4s" repeatCount="indefinite"/></circle>
          <text x="150" y="154" text-anchor="middle" fill="#d9bf8a" font-family="'Fraunces',serif" font-size="18" font-weight="600">10%</text>
          <text x="150" y="170" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="8.5">royalty · $2</text>
        </g>
        <text x="150" y="216" text-anchor="middle" fill="#6b6862" font-family="'Spline Sans',sans-serif" font-size="10" letter-spacing="0.12em">STAGE 2 · THE ROYALTY</text>
        <g fill="none" stroke="url(#rsr-gv)" stroke-width="1.4" opacity="0">
          <animate attributeName="opacity" values="0;0.55" dur="0.6s" begin="1.05s" fill="freeze"/>
          <path d="M126 178 Q70 215 56 244" stroke-dasharray="150" stroke-dashoffset="150"><animate attributeName="stroke-dashoffset" values="150;0" dur="1.1s" begin="1.05s" fill="freeze"/></path>
          <path d="M150 190 Q150 215 150 244" stroke-dasharray="80" stroke-dashoffset="80"><animate attributeName="stroke-dashoffset" values="80;0" dur="1.1s" begin="1.2s" fill="freeze"/></path>
          <path d="M174 178 Q230 215 244 244" stroke-dasharray="150" stroke-dashoffset="150"><animate attributeName="stroke-dashoffset" values="150;0" dur="1.1s" begin="1.35s" fill="freeze"/></path>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.6s" fill="freeze"/>
          <circle r="3" fill="#d9bf8a"><animateMotion path="M126 178 Q70 215 56 244" dur="1.7s" begin="1.7s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" begin="1.7s" repeatCount="indefinite"/></circle>
          <circle r="3" fill="#d9bf8a"><animateMotion path="M150 190 Q150 215 150 244" dur="1.7s" begin="1.9s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" begin="1.9s" repeatCount="indefinite"/></circle>
          <circle r="3" fill="#d9bf8a"><animateMotion path="M174 178 Q230 215 244 244" dur="1.7s" begin="2.1s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" begin="2.1s" repeatCount="indefinite"/></circle>
        </g>
        <g font-family="'Spline Sans',sans-serif" text-anchor="middle">
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.5s" fill="freeze"/>
            <rect x="38" y="252" width="12" height="12" rx="3" fill="url(#rsr-gv)"/>
            <text x="56" y="262" fill="#ece9e1" font-size="11.5" font-weight="600" text-anchor="start">Artist</text>
            <text x="56" y="276" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9" text-anchor="start">50% · $1.00</text>
          </g>
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.65s" fill="freeze"/>
            <rect x="120" y="252" width="12" height="12" rx="3" fill="#C8A96E" opacity="0.8"/>
            <text x="138" y="262" fill="#ece9e1" font-size="11.5" font-weight="600" text-anchor="start">Producer</text>
            <text x="138" y="276" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9" text-anchor="start">30% · $0.60</text>
          </g>
          <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.8s" fill="freeze"/>
            <rect x="38" y="300" width="12" height="12" rx="3" fill="#C8A96E" opacity="0.6"/>
            <text x="56" y="310" fill="#ece9e1" font-size="11.5" font-weight="600" text-anchor="start">Featuring</text>
            <text x="56" y="324" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9" text-anchor="start">20% · $0.40</text>
          </g>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="2s" fill="freeze"/>
          <text x="150" y="360" text-anchor="middle" fill="#8a877f" font-family="'JetBrains Mono',monospace" font-size="8.5">the royalty is subdivided</text>
          <text x="150" y="375" text-anchor="middle" fill="#8a877f" font-family="'JetBrains Mono',monospace" font-size="8.5">up to 20 wallets · 30% cap</text>
        </g>
      </svg>
      <div class="figure-cap">Fig. 6.5 — The resale royalty is split among the team too</div>
    </div>

    <h2>Value comparison</h2>

    <div class="figure">
      <svg viewBox="0 0 560 280" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="32" text-anchor="middle" fill="#e08a72" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="1">STREAMING (you rent)</text><text x="410" y="32" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="1">GROOVES (you own)</text><line x1="280" y1="46" x2="280" y2="262" stroke="#2a2a30" stroke-width="1"/><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.30s" fill="freeze"/><path d="M34 76 l8 8 M42 76 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><text x="52" y="84" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="12">10 years → you own nothing</text><path d="M300 77 l3 3.5 l7 -8" fill="none" stroke="#4a8c5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><text x="316" y="84" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="12">10 works, yours & resellable</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.50s" fill="freeze"/><path d="M34 124 l8 8 M42 124 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><text x="52" y="132" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="12">cancel → lose everything</text><path d="M300 125 l3 3.5 l7 -8" fill="none" stroke="#4a8c5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><text x="316" y="132" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="12">keep it all, forever</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.70s" fill="freeze"/><path d="M34 172 l8 8 M42 172 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><text x="52" y="180" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="12">artist ≈ $400/mo</text><path d="M300 173 l3 3.5 l7 -8" fill="none" stroke="#4a8c5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><text x="316" y="180" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="12">artist $7,125 direct + royalties</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.90s" fill="freeze"/><path d="M34 220 l8 8 M42 220 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><text x="52" y="228" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="12">artist grows, you pay the same</text><path d="M300 221 l3 3.5 l7 -8" fill="none" stroke="#4a8c5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><text x="316" y="228" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="12">it appreciates: both win</text></g>
      </svg>
      <svg viewBox="0 0 300 330" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <text x="20" y="26" fill="#e08a72" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="1">STREAMING (you rent)</text><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.45s" begin="0.25s" fill="freeze"/><path d="M20 50 l8 8 M28 50 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><text x="40" y="58" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11.5">10 years → you own nothing</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.45s" begin="0.37s" fill="freeze"/><path d="M20 78 l8 8 M28 78 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><text x="40" y="86" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11.5">cancel → lose everything</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.45s" begin="0.49s" fill="freeze"/><path d="M20 106 l8 8 M28 106 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><text x="40" y="114" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11.5">artist ≈ $400/mo</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.45s" begin="0.61s" fill="freeze"/><path d="M20 134 l8 8 M28 134 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><text x="40" y="142" fill="#9a978f" font-family="'Spline Sans',sans-serif" font-size="11.5">artist grows, you pay the same</text></g><line x1="20" y1="162" x2="280" y2="162" stroke="#2a2a30" stroke-width="1"/><text x="20" y="190" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="1">GROOVES (you own)</text><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.45s" begin="0.85s" fill="freeze"/><path d="M20 215 l3 3.5 l7 -8" fill="none" stroke="#4a8c5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><text x="40" y="222" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="11.5">10 works, yours & resellable</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.45s" begin="0.97s" fill="freeze"/><path d="M20 243 l3 3.5 l7 -8" fill="none" stroke="#4a8c5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><text x="40" y="250" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="11.5">keep it all, forever</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.45s" begin="1.09s" fill="freeze"/><path d="M20 271 l3 3.5 l7 -8" fill="none" stroke="#4a8c5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><text x="40" y="278" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="11.5">artist $7,125 direct + royalties</text></g><g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.45s" begin="1.21s" fill="freeze"/><path d="M20 299 l3 3.5 l7 -8" fill="none" stroke="#4a8c5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><text x="40" y="306" fill="#ece9e1" font-family="'Spline Sans',sans-serif" font-size="11.5">it appreciates: both win</text></g>
      </svg>
      <div class="figure-cap">Fig. 6.6 — Renting vs. owning</div>
    </div>

    <h2>Operating currency: USDC</h2>
    <p>All transactions on Grooves are made in <strong>USDC</strong>, the stablecoin backed 1:1 by the US dollar, with public audits of its reserves. This is a fundamental design decision, not a technical limitation.</p>

    <div class="figure">
      <svg viewBox="0 0 560 224" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <text x="145" y="30" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13.5" font-weight="600">USDC — real money</text><line x1="40" y1="120" x2="255" y2="120" stroke="#2a2a30" stroke-width="1"/><line x1="40" y1="85" x2="255" y2="85" stroke="#C8A96E" stroke-width="2.4" stroke-dasharray="215" stroke-dashoffset="215"><animate attributeName="stroke-dashoffset" values="215;0" dur="1.3s" fill="freeze"/></line><circle cx="148" cy="85" r="3.5" fill="#C8A96E"><animate attributeName="opacity" values="1;0.4;1" dur="2.4s" repeatCount="indefinite"/></circle><text x="262" y="89" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="9">$1.00</text><text x="145" y="150" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">1:1 with the dollar · audited on-chain</text><text x="145" y="167" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="10.5">$15 → $14.25 real</text><line x1="278" y1="20" x2="278" y2="175" stroke="#2a2a30" stroke-width="1"/><text x="415" y="30" text-anchor="middle" fill="#e08a72" font-family="'Spline Sans',sans-serif" font-size="13.5" font-weight="600">Speculative token</text><path d="M455 22 l8 8 M463 22 l-8 8" stroke="#c0563f" stroke-width="1.8" stroke-linecap="round"/><line x1="300" y1="120" x2="530" y2="120" stroke="#2a2a30" stroke-width="1"/><path d="M300 100 L322 62 L342 88 L366 48 L388 95 L410 58 L432 108 L455 78 L500 122" fill="none" stroke="#c0563f" stroke-width="2.2" stroke-dasharray="320" stroke-dashoffset="320"><animate attributeName="stroke-dashoffset" values="320;0" dur="1.6s" fill="freeze"/></path><circle cx="500" cy="122" r="3.5" fill="#c0563f" opacity="0"><animate attributeName="opacity" values="0;1;0.3;1" dur="1.8s" begin="1.6s" repeatCount="indefinite"/></circle><text x="415" y="150" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">pumps and dumps · harms</text><text x="415" y="167" text-anchor="middle" fill="#e08a72" font-family="'JetBrains Mono',monospace" font-size="10.5">100 today, 50 tomorrow</text><text x="280" y="208" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9.5">Grooves uses USDC: real value, not chips worth half tomorrow</text>
      </svg>
      <svg viewBox="0 0 300 344" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="24" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">USDC — real money</text><line x1="30" y1="92" x2="270" y2="92" stroke="#2a2a30" stroke-width="1"/><line x1="30" y1="66" x2="270" y2="66" stroke="#C8A96E" stroke-width="2.4" stroke-dasharray="240" stroke-dashoffset="240"><animate attributeName="stroke-dashoffset" values="240;0" dur="1.3s" fill="freeze"/></line><circle cx="150" cy="66" r="3.5" fill="#C8A96E"><animate attributeName="opacity" values="1;0.4;1" dur="2.4s" repeatCount="indefinite"/></circle><text x="150" y="116" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">1:1 with the dollar · audited on-chain</text><text x="150" y="132" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="10.5">$15 → $14.25 real</text><line x1="30" y1="150" x2="270" y2="150" stroke="#2a2a30" stroke-width="1"/><text x="150" y="176" text-anchor="middle" fill="#e08a72" font-family="'Spline Sans',sans-serif" font-size="13" font-weight="600">Speculative token ✗</text><line x1="30" y1="240" x2="270" y2="240" stroke="#2a2a30" stroke-width="1"/><path d="M30 220 L62 190 L90 212 L120 186 L150 224 L180 196 L210 228 L240 200 L270 234" fill="none" stroke="#c0563f" stroke-width="2.2" stroke-dasharray="300" stroke-dashoffset="300"><animate attributeName="stroke-dashoffset" values="300;0" dur="1.6s" fill="freeze"/></path><text x="150" y="262" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">pumps and dumps · harms</text><text x="150" y="278" text-anchor="middle" fill="#e08a72" font-family="'JetBrains Mono',monospace" font-size="10.5">100 today, 50 tomorrow</text><text x="150" y="316" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="8.5">Grooves uses USDC: real value,</text><text x="150" y="330" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="8.5">not chips worth half tomorrow.</text>
      </svg>
      <div class="figure-cap">Fig. 6.7 — USDC: real value, not speculation</div>
    </div>

    <p>Value on Grooves appreciates organically: a Pressing from an artist who grows appreciates on the secondary market because there's more real demand, not because a token went up in price. That's authentic appreciation based on artistic merit, not financial speculation.</p>

    <div class="callout warn">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>
      <p><strong>Grooves is not a speculative business model.</strong> The artist can pay for their studio, their team, their life — with real money, not promises. The fan knows exactly how much they paid and what they got.</p>
    </div>

  `
});
