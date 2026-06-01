/* ============================================================
   CAPÍTULO 03 — LA SOLUCIÓN: EL PRESSING
   Texto: ORIGINAL del autor (la-solucion.md), secciones 3.1–3.2 + Editions.
   (Flujos, onboarding y seguridad se desarrollan en caps posteriores.)
   ============================================================ */
registerChapter('solucion', {
  order: 3,
  es: `
    <div class="ch-eyebrow">
      <span class="num">CAPÍTULO 03</span>
      <span class="rule"></span>
      <span class="ch-status op"><span class="dot"></span> Operativo</span>
    </div>

    <h1 class="ch-title">El Pressing como <em>llave de acceso</em></h1>

    <p>En Grooves, cada obra creativa publicada se denomina un <strong>Pressing</strong>. Un Pressing no es simplemente un archivo de audio digitalizado. Es un objeto digital autenticado que funciona como llave de acceso a todo un universo creativo definido por el artista o el sello. Cada Pressing está registrado en blockchain, de manera perpetua, público en internet de manera que cualquier persona lo puede auditar, lo que garantiza propiedades fundamentales:</p>

    <div class="figure reflow">
      <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="key-svg svg-desktop">
        <defs><linearGradient id="s-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <circle cx="300" cy="150" r="40" fill="#131318" stroke="url(#s-gold)" stroke-width="2.5"/>
        <circle cx="294" cy="150" r="11" fill="none" stroke="#ece9e1" stroke-width="2"/>
        <circle cx="306" cy="150" r="11" fill="none" stroke="#C8A96E" stroke-width="2"/>
        <text x="300" y="210" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="12">PRESSING</text>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.6s" begin="0.4s" fill="freeze"/>
          <path d="M270 132 Q200 110 130 80" stroke="#C8A96E" stroke-width="1.3" fill="none" opacity="0.5"/>
          <rect x="40" y="58" width="150" height="44" rx="10" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.3"/>
          <text x="115" y="80" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Autenticidad</text>
          <text x="115" y="94" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10">verificable</text>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.6s" begin="0.65s" fill="freeze"/>
          <path d="M330 132 Q400 110 470 80" stroke="#C8A96E" stroke-width="1.3" fill="none" opacity="0.5"/>
          <rect x="410" y="58" width="150" height="44" rx="10" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.3"/>
          <text x="485" y="80" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Escasez</text>
          <text x="485" y="94" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10">programable</text>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.6s" begin="0.9s" fill="freeze"/>
          <path d="M270 168 Q200 190 130 220" stroke="#C8A96E" stroke-width="1.3" fill="none" opacity="0.5"/>
          <rect x="40" y="198" width="150" height="44" rx="10" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.3"/>
          <text x="115" y="220" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Propiedad</text>
          <text x="115" y="234" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10">transferible</text>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.6s" begin="1.15s" fill="freeze"/>
          <path d="M330 168 Q400 190 470 220" stroke="#C8A96E" stroke-width="1.3" fill="none" opacity="0.5"/>
          <rect x="410" y="198" width="150" height="44" rx="10" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.3"/>
          <text x="485" y="220" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Revenue splits</text>
          <text x="485" y="234" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10">configurables</text>
        </g>
      </svg>
      <svg viewBox="0 0 300 370" xmlns="http://www.w3.org/2000/svg" class="svg-mobile">
        <defs><linearGradient id="s-gold-v" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <circle cx="150" cy="56" r="34" fill="#131318" stroke="url(#s-gold-v)" stroke-width="2.5"/>
        <circle cx="144" cy="56" r="9" fill="none" stroke="#ece9e1" stroke-width="2"/>
        <circle cx="156" cy="56" r="9" fill="none" stroke="#C8A96E" stroke-width="2"/>
        <text x="150" y="104" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="12">PRESSING</text>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.40s" fill="freeze"/><line x1="150" y1="108" x2="150" y2="120" stroke="#C8A96E" stroke-width="1.3" opacity="0.5"/><rect x="30" y="120" width="240" height="44" rx="10" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.3"/><text x="150" y="140" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Autenticidad</text><text x="150" y="155" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10">verificable</text></g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.60s" fill="freeze"/><line x1="150" y1="166" x2="150" y2="178" stroke="#C8A96E" stroke-width="1.3" opacity="0.5"/><rect x="30" y="178" width="240" height="44" rx="10" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.3"/><text x="150" y="198" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Escasez</text><text x="150" y="213" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10">programable</text></g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.80s" fill="freeze"/><line x1="150" y1="224" x2="150" y2="236" stroke="#C8A96E" stroke-width="1.3" opacity="0.5"/><rect x="30" y="236" width="240" height="44" rx="10" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.3"/><text x="150" y="256" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Propiedad</text><text x="150" y="271" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10">transferible</text></g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.00s" fill="freeze"/><line x1="150" y1="282" x2="150" y2="294" stroke="#C8A96E" stroke-width="1.3" opacity="0.5"/><rect x="30" y="294" width="240" height="44" rx="10" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.3"/><text x="150" y="314" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Revenue splits</text><text x="150" y="329" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10">configurables</text></g>
      </svg>
      <div class="figure-cap">Fig. 3.1 — Las garantías de un Pressing</div>
    </div>

    <ul>
      <li><strong>Autenticidad verificable.</strong> Cualquiera puede comprobar que el Pressing fue creado por el artista original.</li>
      <li><strong>Escasez programable.</strong> El artista decide cuántos Pressings existen de cada obra, si es una colección limitada o ilimitada.</li>
      <li><strong>Propiedad transferible.</strong> El poseedor puede venderlo, regalarlo o transferirlo. En cada reventa, el artista creador del pressing recibe automáticamente su % royalty.</li>
      <li><strong>Porcentajes de creación.</strong> El creador del pressing puede hacer splits de % de ganancia como se acuerde. Ejemplo: X% para los músicos participantes, X% para los managers, X% para el sello discográfico, X% para los publishers, etc. Todos estos "splits" pueden quedar consignados de manera perpetua o por tiempos establecidos a elección, automáticamente distribuidos en cada venta y reventa. Sin intermediarios.</li>
    </ul>

    <p>Lo que hace único al Pressing es que <strong>el artista o sello define libremente qué derechos de acceso otorga</strong>. El audio del álbum es solo el punto de partida. Un Pressing puede desbloquear cualquier combinación de experiencias que el creador imagine.</p>

    <h2>Tres formas de imaginarlo</h2>

    <div class="cards c3">
      <div class="card">
        <span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11.9 12.1 19 5M17 3l4 4-2 2-4-4 2-2z"/><circle cx="8.5" cy="15.5" r="4.5"/><path d="M7 14.5c.5-.5 1.5-.5 2 0"/></svg></span>
        <span class="card-tag">Artista independiente</span>
        <h4>Álbum + mundo creativo</h4>
        <p>Un músico independiente crea un Sealed Edition de 300 Pressings de su nuevo álbum. Cada uno da acceso al álbum completo en calidad lossless de manera perpetua, pero también acceso a participar en un podcast exclusivo de 8 episodios donde el artista cuenta la historia detrás de cada canción, acceso anticipado a entradas VIP de su próxima gira, un libro con las partituras del disco, o camisetas edición limitada. Si el artista crece, esos 300 Pressings se revalorizan.</p>
      </div>
      <div class="card">
        <span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"/><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/><circle cx="12" cy="14" r="3"/><circle cx="12" cy="14" r=".5" fill="currentColor"/></svg></span>
        <span class="card-tag">Sello discográfico</span>
        <h4>Catálogo como experiencia</h4>
        <p>Un gran sello crea un Sealed Edition de 10.000 Pressings llamado "The Vinyl Vault: Los 70s". Cada uno desbloquea el catálogo completo de la década, sesiones de estudio remasterizadas nunca publicadas, un documental exclusivo, y acceso a listening parties virtuales con productores legendarios. El sello genera ingresos directos masivos en lugar de fracciones de centavo por stream, y cobra royalties en cada reventa futura.</p>
      </div>
      <div class="card">
        <span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/></svg></span>
        <span class="card-tag">Banda emergente</span>
        <h4>Acceso a la comunidad</h4>
        <p>Una banda crea un Open Edition sin límite de copias. Cada Pressing cuesta $5 y da acceso al EP completo, pero también a un grupo privado donde la banda comparte demos, vota con los fans sobre el setlist de conciertos, y ofrece descuentos en merch. A medida que la banda crece, añade más contenido. El Pressing se convierte en un objeto vivo que evoluciona con la carrera del artista.</p>
      </div>
    </div>

    <h2>Sealed Edition y Open Edition</h2>

    <p>El conjunto de Pressings de una obra se denomina un <strong>Edition</strong>. El creador elige entre dos tipos:</p>

    <div class="cards c2">
      <div class="card">
        <span class="card-tag">Inmutable</span>
        <h4>Sealed Edition</h4>
        <p>Edición limitada e inmutable. 500 Pressings y nunca habrá uno más. Crea escasez y valor de colección.</p>
      </div>
      <div class="card">
        <span class="card-tag">Flexible</span>
        <h4>Open Edition</h4>
        <p>Edición flexible. El creador ajusta la cantidad según demanda. Ideal para sellos con catálogos extensos.</p>
      </div>
    </div>

    <h2>El flujo del artista independiente</h2>

    <p>El proceso de publicación está diseñado para que el artista no necesite saber de blockchain:</p>

    <ol>
      <li><strong>Crea tu cuenta en Grooves.</strong> Conecta tu wallet o crea una dentro de la plataforma.</li>
      <li><strong>Sube tu obra al Pressing Studio.</strong> Audio, arte, metadata y define tus derechos de acceso.</li>
      <li><strong>Análisis de autenticidad.</strong> <span class="inline-roadmap">El Authenticity Engine verifica que no se infringen derechos de autor.</span> <span class="rm-badge">Roadmap</span></li>
      <li><strong>Configura tu Edition.</strong> Sealed u Open, precio, porcentajes de royalties, contenido vinculado.</li>
      <li><strong>Create your Pressing.</strong> La obra se registra en blockchain y queda disponible en el marketplace.</li>
      <li><strong>Recibe pagos directos.</strong> Cada venta y cada reventa futura genera royalties automáticos.</li>
    </ol>

    <div class="callout">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
      <p>La clave es que el Pressing no es solo un disco: <strong>es una membresía creativa</strong>. Poseer un Pressing significa tener acceso permanente al mundo del artista, y ese acceso crece en valor con su carrera.</p>
    </div>
  `,
  en: `
    <div class="ch-eyebrow">
      <span class="num">CHAPTER 03</span>
      <span class="rule"></span>
      <span class="ch-status op"><span class="dot"></span> Live</span>
    </div>

    <h1 class="ch-title">The Pressing as an <em>access key</em></h1>

    <p>On Grooves, every published creative work is called a <strong>Pressing</strong>. A Pressing is not simply a digitized audio file. It is an authenticated digital object that works as an access key to an entire creative universe defined by the artist or label. Each Pressing is registered on the blockchain, in perpetuity, public on the internet so that anyone can audit it — which guarantees fundamental properties:</p>

    <div class="figure reflow">
      <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="key-svg svg-desktop">
        <defs><linearGradient id="s-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <circle cx="300" cy="150" r="40" fill="#131318" stroke="url(#s-gold)" stroke-width="2.5"/>
        <circle cx="294" cy="150" r="11" fill="none" stroke="#ece9e1" stroke-width="2"/>
        <circle cx="306" cy="150" r="11" fill="none" stroke="#C8A96E" stroke-width="2"/>
        <text x="300" y="210" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="12">PRESSING</text>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.6s" begin="0.4s" fill="freeze"/>
          <path d="M270 132 Q200 110 130 80" stroke="#C8A96E" stroke-width="1.3" fill="none" opacity="0.5"/>
          <rect x="40" y="58" width="150" height="44" rx="10" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.3"/>
          <text x="115" y="80" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Authenticity</text>
          <text x="115" y="94" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10">verifiable</text>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.6s" begin="0.65s" fill="freeze"/>
          <path d="M330 132 Q400 110 470 80" stroke="#C8A96E" stroke-width="1.3" fill="none" opacity="0.5"/>
          <rect x="410" y="58" width="150" height="44" rx="10" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.3"/>
          <text x="485" y="80" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Scarcity</text>
          <text x="485" y="94" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10">programmable</text>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.6s" begin="0.9s" fill="freeze"/>
          <path d="M270 168 Q200 190 130 220" stroke="#C8A96E" stroke-width="1.3" fill="none" opacity="0.5"/>
          <rect x="40" y="198" width="150" height="44" rx="10" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.3"/>
          <text x="115" y="220" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Ownership</text>
          <text x="115" y="234" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10">transferable</text>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.6s" begin="1.15s" fill="freeze"/>
          <path d="M330 168 Q400 190 470 220" stroke="#C8A96E" stroke-width="1.3" fill="none" opacity="0.5"/>
          <rect x="410" y="198" width="150" height="44" rx="10" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.3"/>
          <text x="485" y="220" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Revenue splits</text>
          <text x="485" y="234" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10">configurable</text>
        </g>
      </svg>
      <svg viewBox="0 0 300 370" xmlns="http://www.w3.org/2000/svg" class="svg-mobile">
        <defs><linearGradient id="s-gold-v" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <circle cx="150" cy="56" r="34" fill="#131318" stroke="url(#s-gold-v)" stroke-width="2.5"/>
        <circle cx="144" cy="56" r="9" fill="none" stroke="#ece9e1" stroke-width="2"/>
        <circle cx="156" cy="56" r="9" fill="none" stroke="#C8A96E" stroke-width="2"/>
        <text x="150" y="104" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="12">PRESSING</text>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.40s" fill="freeze"/><line x1="150" y1="108" x2="150" y2="120" stroke="#C8A96E" stroke-width="1.3" opacity="0.5"/><rect x="30" y="120" width="240" height="44" rx="10" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.3"/><text x="150" y="140" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Authenticity</text><text x="150" y="155" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10">verifiable</text></g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.60s" fill="freeze"/><line x1="150" y1="166" x2="150" y2="178" stroke="#C8A96E" stroke-width="1.3" opacity="0.5"/><rect x="30" y="178" width="240" height="44" rx="10" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.3"/><text x="150" y="198" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Scarcity</text><text x="150" y="213" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10">programmable</text></g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.80s" fill="freeze"/><line x1="150" y1="224" x2="150" y2="236" stroke="#C8A96E" stroke-width="1.3" opacity="0.5"/><rect x="30" y="236" width="240" height="44" rx="10" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.3"/><text x="150" y="256" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Ownership</text><text x="150" y="271" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10">transferable</text></g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.00s" fill="freeze"/><line x1="150" y1="282" x2="150" y2="294" stroke="#C8A96E" stroke-width="1.3" opacity="0.5"/><rect x="30" y="294" width="240" height="44" rx="10" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.3"/><text x="150" y="314" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Revenue splits</text><text x="150" y="329" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="10">configurable</text></g>
      </svg>
      <div class="figure-cap">Fig. 3.1 — A Pressing's guarantees</div>
    </div>

    <ul>
      <li><strong>Verifiable authenticity.</strong> Anyone can confirm the Pressing was created by the original artist.</li>
      <li><strong>Programmable scarcity.</strong> The artist decides how many Pressings exist of each work — a limited or unlimited collection.</li>
      <li><strong>Transferable ownership.</strong> The holder can sell, gift or transfer it. On each resale, the artist who created the Pressing automatically receives their royalty.</li>
      <li><strong>Creation splits.</strong> The creator can split earnings as agreed: X% for the performing musicians, X% for managers, X% for the label, X% for publishers, and so on. These splits can be set in perpetuity or for defined periods, and are distributed automatically on every sale and resale. With no middlemen.</li>
    </ul>

    <p>What makes the Pressing unique is that <strong>the artist or label freely defines which access rights it grants</strong>. The album audio is only the starting point. A Pressing can unlock any combination of experiences the creator imagines.</p>

    <h2>Three ways to imagine it</h2>

    <div class="cards c3">
      <div class="card">
        <span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11.9 12.1 19 5M17 3l4 4-2 2-4-4 2-2z"/><circle cx="8.5" cy="15.5" r="4.5"/><path d="M7 14.5c.5-.5 1.5-.5 2 0"/></svg></span>
        <span class="card-tag">Independent artist</span>
        <h4>Album + creative world</h4>
        <p>An independent musician creates a Sealed Edition of 300 Pressings of their new album. Each one grants perpetual lossless access to the full album, plus access to take part in an exclusive 8-episode podcast where the artist tells the story behind every song, early access to VIP tickets for their next tour, a book of the album's sheet music, or limited-edition shirts. If the artist grows, those 300 Pressings appreciate.</p>
      </div>
      <div class="card">
        <span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"/><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/><circle cx="12" cy="14" r="3"/><circle cx="12" cy="14" r=".5" fill="currentColor"/></svg></span>
        <span class="card-tag">Record label</span>
        <h4>Catalog as experience</h4>
        <p>A major label creates a Sealed Edition of 10,000 Pressings called "The Vinyl Vault: The 70s." Each one unlocks the decade's full catalog, never-released remastered studio sessions, an exclusive documentary, and access to virtual listening parties with legendary producers. The label earns massive direct revenue instead of fractions of a cent per stream, and collects royalties on every future resale.</p>
      </div>
      <div class="card">
        <span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/></svg></span>
        <span class="card-tag">Emerging band</span>
        <h4>Access to the community</h4>
        <p>A band creates an Open Edition with no copy limit. Each Pressing costs $5 and grants access to the full EP, plus a private group where the band shares demos, votes with fans on the concert setlist, and offers merch discounts. As the band grows, it adds more content. The Pressing becomes a living object that evolves with the artist's career.</p>
      </div>
    </div>

    <h2>Sealed Edition and Open Edition</h2>

    <p>The set of Pressings of a work is called an <strong>Edition</strong>. The creator chooses between two types:</p>

    <div class="cards c2">
      <div class="card">
        <span class="card-tag">Immutable</span>
        <h4>Sealed Edition</h4>
        <p>A limited, immutable edition. 500 Pressings and there will never be one more. Creates scarcity and collectible value.</p>
      </div>
      <div class="card">
        <span class="card-tag">Flexible</span>
        <h4>Open Edition</h4>
        <p>A flexible edition. The creator adjusts the quantity based on demand. Ideal for labels with extensive catalogs.</p>
      </div>
    </div>

    <h2>The independent artist's flow</h2>

    <p>The publishing process is designed so the artist doesn't need to know anything about blockchain:</p>

    <ol>
      <li><strong>Create your Grooves account.</strong> Connect your wallet or create one inside the platform.</li>
      <li><strong>Upload your work to the Pressing Studio.</strong> Audio, art, metadata, and define your access rights.</li>
      <li><strong>Authenticity analysis.</strong> <span class="inline-roadmap">The Authenticity Engine verifies no copyright is infringed.</span> <span class="rm-badge">Roadmap</span></li>
      <li><strong>Configure your Edition.</strong> Sealed or Open, price, royalty percentages, bound content.</li>
      <li><strong>Create your Pressing.</strong> The work is registered on the blockchain and becomes available on the marketplace.</li>
      <li><strong>Receive direct payments.</strong> Every sale and every future resale generates automatic royalties.</li>
    </ol>

    <div class="callout">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
      <p>The key is that a Pressing is not just a record: <strong>it's a creative membership</strong>. Owning a Pressing means permanent access to the artist's world, and that access grows in value with their career.</p>
    </div>

  `
});
