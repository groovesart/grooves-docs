/* ============================================================
   CAPÍTULO 10 — VISIÓN
   Texto: ORIGINAL del autor (vision.md). Cierre ideológico.
   ============================================================ */
registerChapter('vision', {
  order: 10,
  es: `
    <div class="ch-eyebrow">
      <span class="num">CAPÍTULO 10</span>
      <span class="rule"></span>
    </div>

    <h1 class="ch-title">El arte merece un ecosistema <em>a su altura</em></h1>
    <p class="ch-lead">Grooves no es una empresa de tecnología que vende herramientas a artistas. Es un movimiento que reconoce una verdad simple: el arte es uno de los pilares de la civilización humana, y merece un ecosistema económico que refleje su valor real.</p>

    <p>Durante décadas, la industria creativa ha sido dominada por intermediarios que extraen valor sin crearlo. Los artistas producen las obras. Los fans las valoran. Los intermediarios cobran por conectarlos y distribuyen de manera injusta. Grooves deja solo lo que importa: el creador y su comunidad. Los intermediarios y partícipes de la obra los decide el creador, pagando en porcentajes que él mismo define.</p>

    <div class="figure">
      <svg viewBox="0 0 480 240" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="vis-glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#C8A96E" stop-opacity="0.2"/><stop offset="100%" stop-color="#C8A96E" stop-opacity="0"/></radialGradient>
          <linearGradient id="vis-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
        </defs>
        <ellipse cx="240" cy="120" rx="160" ry="110" fill="url(#vis-glow)"/>
        <!-- center: the artwork -->
        <circle cx="240" cy="120" r="40" fill="#131318" stroke="url(#vis-g)" stroke-width="2.5"/>
        <circle cx="234" cy="120" r="11" fill="none" stroke="#ece9e1" stroke-width="2"/>
        <circle cx="246" cy="120" r="11" fill="none" stroke="#C8A96E" stroke-width="2"/>
        <text x="240" y="178" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="11">LA OBRA</text>
        <!-- creator + community orbit -->
        <g>
          <circle cx="100" cy="120" r="30" fill="#1a2e1a" stroke="#4a8c5c" stroke-width="1.5"/>
          <text x="100" y="116" text-anchor="middle" fill="#9fd9b4" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Creador</text>
          <text x="100" y="131" text-anchor="middle" fill="#7fc99a" font-family="'Spline Sans',sans-serif" font-size="9">define todo</text>
          <line x1="130" y1="120" x2="200" y2="120" stroke="url(#vis-g)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="40;0" dur="1.4s" repeatCount="indefinite"/></line>
        </g>
        <g>
          <circle cx="380" cy="120" r="30" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.5"/>
          <text x="380" y="116" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Comunidad</text>
          <text x="380" y="131" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="9">posee y apoya</text>
          <line x1="280" y1="120" x2="350" y2="120" stroke="url(#vis-g)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="0;40" dur="1.4s" repeatCount="indefinite"/></line>
        </g>
      </svg>
      <svg viewBox="0 0 300 360" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="vis-glow-v" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#C8A96E" stop-opacity="0.2"/><stop offset="100%" stop-color="#C8A96E" stop-opacity="0"/></radialGradient>
          <linearGradient id="vis-gv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
        </defs>
        <circle cx="150" cy="50" r="30" fill="#1a2e1a" stroke="#4a8c5c" stroke-width="1.5"/>
        <text x="150" y="47" text-anchor="middle" fill="#9fd9b4" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Creador</text>
        <text x="150" y="62" text-anchor="middle" fill="#7fc99a" font-family="'Spline Sans',sans-serif" font-size="9">define todo</text>
        <line x1="150" y1="80" x2="150" y2="130" stroke="url(#vis-gv)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="40;0" dur="1.4s" repeatCount="indefinite"/></line>
        <ellipse cx="150" cy="185" rx="120" ry="70" fill="url(#vis-glow-v)"/>
        <circle cx="150" cy="185" r="40" fill="#131318" stroke="url(#vis-gv)" stroke-width="2.5"/>
        <circle cx="144" cy="185" r="11" fill="none" stroke="#ece9e1" stroke-width="2"/>
        <circle cx="156" cy="185" r="11" fill="none" stroke="#C8A96E" stroke-width="2"/>
        <text x="150" y="245" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="11">LA OBRA</text>
        <line x1="150" y1="255" x2="150" y2="290" stroke="url(#vis-gv)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="0;40" dur="1.4s" repeatCount="indefinite"/></line>
        <circle cx="150" cy="320" r="30" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.5"/>
        <text x="150" y="317" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Comunidad</text>
        <text x="150" y="332" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="9">posee y apoya</text>
      </svg>
      <div class="figure-cap">Fig. 10.1 — Solo el creador y su comunidad</div>
    </div>

    <p>Cada Pressing que se adquiere en Grooves no es solo una compra, es un voto de confianza en un artista. Es una declaración de que esa obra tiene valor suficiente para ser poseída y transada, no solo escuchada. Y cuando ese Pressing se revaloriza y se revende, el artista sigue recibiendo su parte, porque el código así lo dicta.</p>

    <p class="pquote big">El ecosistema creativo es de todos, manejado de manera justa y programable por el artista.</p>

    <p>No buscamos reemplazar de un día para otro lo que existe. Buscamos demostrar que hay otra forma posible: una donde el arte se posee de verdad, donde el valor fluye hacia quien lo crea, y donde la relación entre un artista y quienes lo apoyan no pasa por un intermediario que decide cuánto vale cada reproducción. Esa idea ya no es teoría — es código que funciona, y crece con cada artista que decide creer en ella.</p>

    <h2>Grooves solo funciona si creemos en la idea</h2>

    <p>No se trata de pedirle al artista que retire su música de las plataformas de streaming de la noche a la mañana. Se trata de algo más profundo: comprender una idea, el concepto. Un artista sube su álbum a Grooves como un Pressing. Sus fans lo adquieren, lo poseen, acceden a su mundo creativo, esto puede ser muchas cosas, a la imaginación del artista, es un activo, comprender que se adquiere un activo que es valorado.</p>

    <p>Pero esta idea solo tendrá efecto, solo se transformará en algo real, en el momento en que nosotros mismos además de creer, compremos música, compremos los activos, los compartamos, los revendamos. Que lleguemos a casa de un amigo y podamos decir "mira los discos que compré", conectarnos al Bluetooth y ponerlos a sonar. Así sean clásicos, así sean descubrimientos nuevos. Que creamos en esa idea inmutable de reproducir algo que fue apoyado y adquirido. Es un cambio de mentalidad. Un ideal que no parte de una plataforma, ni de una empresa, ni de una tecnología, parte de nosotros mismos.</p>

    <div class="vision-close">
      <div class="vc-mark">
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="18" cy="24" r="11" stroke="#ece9e1" stroke-width="2.2"/><circle cx="18" cy="24" r="3" fill="#ece9e1"/>
          <circle cx="30" cy="24" r="11" stroke="#C8A96E" stroke-width="2.2"/><circle cx="30" cy="24" r="3" fill="#C8A96E"/>
        </svg>
      </div>
      <p class="vc-name">Grooves — Ecosistemas Creativos</p>
      <p class="vc-url">www.grooves.art</p>
      <p class="vc-meta">Documento Confidencial — Grooves © 2026 · White Paper v3.0</p>
    </div>
  `,
  en: `
    <div class="ch-eyebrow">
      <span class="num">CHAPTER 10</span>
      <span class="rule"></span>
    </div>

    <h1 class="ch-title">Art deserves an ecosystem <em>worthy of it</em></h1>
    <p class="ch-lead">Grooves is not a technology company that sells tools to artists. It's a movement that recognizes a simple truth: art is one of the pillars of human civilization, and it deserves an economic ecosystem that reflects its real value.</p>

    <p>For decades, the creative industry has been dominated by middlemen who extract value without creating it. Artists make the works. Fans value them. The middlemen charge to connect them and distribute unfairly. Grooves keeps only what matters: the creator and their community. The middlemen and participants in the work are chosen by the creator, paid in percentages they themselves define.</p>

    <div class="figure">
      <svg viewBox="0 0 480 240" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="vis-glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#C8A96E" stop-opacity="0.2"/><stop offset="100%" stop-color="#C8A96E" stop-opacity="0"/></radialGradient>
          <linearGradient id="vis-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
        </defs>
        <ellipse cx="240" cy="120" rx="160" ry="110" fill="url(#vis-glow)"/>
        <!-- center: the artwork -->
        <circle cx="240" cy="120" r="40" fill="#131318" stroke="url(#vis-g)" stroke-width="2.5"/>
        <circle cx="234" cy="120" r="11" fill="none" stroke="#ece9e1" stroke-width="2"/>
        <circle cx="246" cy="120" r="11" fill="none" stroke="#C8A96E" stroke-width="2"/>
        <text x="240" y="178" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="11">THE WORK</text>
        <!-- creator + community orbit -->
        <g>
          <circle cx="100" cy="120" r="30" fill="#1a2e1a" stroke="#4a8c5c" stroke-width="1.5"/>
          <text x="100" y="116" text-anchor="middle" fill="#9fd9b4" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Creator</text>
          <text x="100" y="131" text-anchor="middle" fill="#7fc99a" font-family="'Spline Sans',sans-serif" font-size="9">defines all</text>
          <line x1="130" y1="120" x2="200" y2="120" stroke="url(#vis-g)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="40;0" dur="1.4s" repeatCount="indefinite"/></line>
        </g>
        <g>
          <circle cx="380" cy="120" r="30" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.5"/>
          <text x="380" y="116" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Community</text>
          <text x="380" y="131" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="9">owns & supports</text>
          <line x1="280" y1="120" x2="350" y2="120" stroke="url(#vis-g)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="0;40" dur="1.4s" repeatCount="indefinite"/></line>
        </g>
      </svg>
      <svg viewBox="0 0 300 360" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="vis-glow-v" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#C8A96E" stop-opacity="0.2"/><stop offset="100%" stop-color="#C8A96E" stop-opacity="0"/></radialGradient>
          <linearGradient id="vis-gv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
        </defs>
        <circle cx="150" cy="50" r="30" fill="#1a2e1a" stroke="#4a8c5c" stroke-width="1.5"/>
        <text x="150" y="47" text-anchor="middle" fill="#9fd9b4" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Creator</text>
        <text x="150" y="62" text-anchor="middle" fill="#7fc99a" font-family="'Spline Sans',sans-serif" font-size="9">defines all</text>
        <line x1="150" y1="80" x2="150" y2="130" stroke="url(#vis-gv)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="40;0" dur="1.4s" repeatCount="indefinite"/></line>
        <ellipse cx="150" cy="185" rx="120" ry="70" fill="url(#vis-glow-v)"/>
        <circle cx="150" cy="185" r="40" fill="#131318" stroke="url(#vis-gv)" stroke-width="2.5"/>
        <circle cx="144" cy="185" r="11" fill="none" stroke="#ece9e1" stroke-width="2"/>
        <circle cx="156" cy="185" r="11" fill="none" stroke="#C8A96E" stroke-width="2"/>
        <text x="150" y="245" text-anchor="middle" fill="#d9bf8a" font-family="'JetBrains Mono',monospace" font-size="11">THE WORK</text>
        <line x1="150" y1="255" x2="150" y2="290" stroke="url(#vis-gv)" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="0;40" dur="1.4s" repeatCount="indefinite"/></line>
        <circle cx="150" cy="320" r="30" fill="#1a1d2e" stroke="#4a6fa5" stroke-width="1.5"/>
        <text x="150" y="317" text-anchor="middle" fill="#cdd9ee" font-family="'Spline Sans',sans-serif" font-size="12" font-weight="600">Community</text>
        <text x="150" y="332" text-anchor="middle" fill="#8fa8d0" font-family="'Spline Sans',sans-serif" font-size="9">owns & supports</text>
      </svg>
      <div class="figure-cap">Fig. 10.1 — Only the creator and their community</div>
    </div>

    <p>Every Pressing acquired on Grooves is not just a purchase, it's a vote of confidence in an artist. It's a declaration that the work has enough value to be owned and traded, not merely listened to. And when that Pressing appreciates and is resold, the artist keeps receiving their share, because the code dictates it.</p>

    <p class="pquote big">The creative ecosystem belongs to everyone, managed fairly and programmably by the artist.</p>

    <p>We don't seek to replace what exists overnight. We seek to prove there is another possible way: one where art is truly owned, where value flows to whoever creates it, and where the relationship between an artist and those who support them doesn't pass through a middleman deciding how much each play is worth. That idea is no longer theory — it's code that works, and it grows with every artist who decides to believe in it.</p>

    <h2>Grooves only works if we believe in the idea</h2>

    <p>It is not about asking the artist to pull their music from streaming platforms overnight. It is about something deeper: understanding an idea, the concept. An artist uploads their album to Grooves as a Pressing. Their fans acquire it, own it, access their creative world — which can be many things, up to the artist's imagination. It's an asset; understanding that you are acquiring an asset that is valued.</p>

    <p>But this idea will only take effect, will only become something real, the moment we ourselves — beyond believing — buy music, buy the assets, share them, resell them. When we arrive at a friend's house and can say "look at the records I bought," connect to the Bluetooth and play them. Whether classics or new discoveries. When we believe in that immutable idea of playing something that was supported and acquired. It's a shift in mindset. An ideal that doesn't start from a platform, a company or a technology — it starts from ourselves.</p>

    <div class="vision-close">
      <div class="vc-mark">
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="18" cy="24" r="11" stroke="#ece9e1" stroke-width="2.2"/><circle cx="18" cy="24" r="3" fill="#ece9e1"/>
          <circle cx="30" cy="24" r="11" stroke="#C8A96E" stroke-width="2.2"/><circle cx="30" cy="24" r="3" fill="#C8A96E"/>
        </svg>
      </div>
      <p class="vc-name">Grooves — Creative Ecosystems</p>
      <p class="vc-url">www.grooves.art</p>
      <p class="vc-meta">Confidential Document — Grooves © 2026 · White Paper v3.0</p>
    </div>

  `
});
