/* ============================================================
   CAPÍTULO 04 — BOUND CONTENT
   Las dos familias (Archivos + Accesos), enriquecidas.
   Operativo: PDF descargable + enlaces. Roadmap: QR de eventos.
   ============================================================ */
registerChapter('bound-content', {
  order: 4,
  es: `
    <div class="ch-eyebrow">
      <span class="num">CAPÍTULO 04</span>
      <span class="rule"></span>
      <span class="ch-status op"><span class="dot"></span> Operativo</span>
    </div>

    <h1 class="ch-title">Bound Content — la obra es <em>solo el comienzo</em></h1>
    <p class="ch-lead">Un Pressing no termina en el audio. Es una llave que abre todo un mundo creativo: archivos que el dueño descarga y accesos que solo él desbloquea. Y nadie más.</p>

    <p>En Grooves, poseer un Pressing significa tener acceso permanente a lo que el artista decida vincularle. A ese material exclusivo lo llamamos <strong>Bound Content</strong>: contenido atado a la propiedad del Pressing, que se entrega únicamente a quien lo posee y se verifica directamente en la blockchain.</p>

    <p>Y acá está lo esencial: el Bound Content <strong>no es "un archivo"</strong>. Es <strong>todo un mundo creativo</strong>. Lo que el dueño recibe depende enteramente de lo que el creador quiera ofrecer — y la imaginación del artista es el único límite. Un Pressing puede abrir desde el álbum en calidad de estudio hasta un universo completo: las partituras, las sesiones inéditas, un podcast donde el artista cuenta cada secreto, la llave de su comunidad, la entrada a su próximo concierto. El creador construye ese mundo; el Pressing es la llave que lo abre.</p>

    <p>Ese mundo se organiza en dos familias, y un artista puede combinar cuantas quiera —y tantas como imagine— dentro de una misma Edición.</p>

    <div class="cards c2">
      <div class="card">
        <span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg></span>
        <span class="card-tag">Familia I · Archivos</span>
        <h4>Todo lo que el dueño descarga</h4>
        <p>Un mundo de material que vive en almacenamiento privado y se descarga solo tras verificar la propiedad: liner notes, partituras, stems para remezclar, arte en alta resolución, bonus tracks, libros digitales — lo que el artista quiera entregar.</p>
      </div>
      <div class="card">
        <span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5"/></svg></span>
        <span class="card-tag">Familia II · Accesos</span>
        <h4>Todo lo que el dueño desbloquea</h4>
        <p>Llaves a experiencias que solo ve el poseedor: un Discord privado, un podcast exclusivo, un Patreon, una comunidad curada, un pase personalizado, la entrada a un evento — el acceso al mundo del artista.</p>
      </div>
    </div>

    <h2>Una caja fuerte, no una puerta abierta</h2>
    <p>La diferencia entre el <em>preview</em> de 30 segundos y el Bound Content es deliberada y fundamental. El preview es público: vive en almacenamiento abierto y cualquiera puede oírlo — es la vitrina. El Bound Content es privado: vive bajo llave, y esa llave solo se entrega tras comprobar, contra la blockchain, que quien la pide es el dueño en ese instante.</p>

    <div class="figure">
      <svg viewBox="0 0 560 300" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bc-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
          <radialGradient id="bc-glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#C8A96E" stop-opacity="0.35"/><stop offset="1" stop-color="#C8A96E" stop-opacity="0"/></radialGradient>
        </defs>
        <circle cx="80" cy="150" r="46" stroke="#ece9e1" stroke-width="2" fill="none"/>
        <circle cx="80" cy="150" r="30" stroke="#5a5852" stroke-width="1" fill="none"/>
        <circle cx="80" cy="150" r="9" fill="#C8A96E"><animate attributeName="opacity" values="1;0.6;1" dur="2.4s" repeatCount="indefinite"/></circle>
        <text x="80" y="222" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="11">PRESSING</text>
        <line x1="128" y1="150" x2="232" y2="150" stroke="url(#bc-gold)" stroke-width="2" stroke-dasharray="6 6"><animate attributeName="stroke-dashoffset" values="48;0" dur="1.1s" repeatCount="indefinite"/></line>
        <text x="180" y="138" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9.5">verificación on-chain</text>
        <ellipse cx="290" cy="150" rx="70" ry="70" fill="url(#bc-glow)"/>
        <path d="M270 128 Q270 104 290 104 Q310 104 310 128" stroke="url(#bc-gold)" stroke-width="6" fill="none" stroke-linecap="round"><animate attributeName="d" values="M270 128 Q270 104 290 104 Q310 104 310 128;M270 128 Q270 96 290 96 Q310 96 310 128;M270 128 Q270 104 290 104 Q310 104 310 128" dur="3s" repeatCount="indefinite"/></path>
        <rect x="258" y="126" width="64" height="52" rx="9" fill="#17171d" stroke="url(#bc-gold)" stroke-width="2.5"/>
        <circle cx="290" cy="148" r="6" fill="#C8A96E"/><rect x="287.5" y="150" width="5" height="14" rx="2.5" fill="#C8A96E"/>
        <text x="290" y="222" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="11">PRIVADO</text>
        <line x1="348" y1="150" x2="452" y2="150" stroke="url(#bc-gold)" stroke-width="2" stroke-dasharray="6 6"><animate attributeName="stroke-dashoffset" values="0;48" dur="1.1s" repeatCount="indefinite"/></line>
        <text x="400" y="138" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9.5">llave temporal · 15 min</text>
        <rect x="458" y="118" width="64" height="64" rx="12" fill="#131318" stroke="#ece9e1" stroke-width="1.6"/>
        <path d="M474 140 h32 M474 150 h32 M474 160 h20" stroke="#C8A96E" stroke-width="2" stroke-linecap="round"><animate attributeName="opacity" values="0;1" dur="0.8s" begin="0.6s" fill="freeze"/></path>
        <text x="490" y="222" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="11">CONTENIDO</text>
      </svg>

      <svg viewBox="0 0 300 420" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bc-gold-v" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
          <radialGradient id="bc-glow-v" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#C8A96E" stop-opacity="0.35"/><stop offset="1" stop-color="#C8A96E" stop-opacity="0"/></radialGradient>
        </defs>
        <circle cx="150" cy="46" r="34" stroke="#ece9e1" stroke-width="2" fill="none"/>
        <circle cx="150" cy="46" r="22" stroke="#5a5852" stroke-width="1" fill="none"/>
        <circle cx="150" cy="46" r="7" fill="#C8A96E"><animate attributeName="opacity" values="1;0.6;1" dur="2.4s" repeatCount="indefinite"/></circle>
        <text x="200" y="50" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="11">PRESSING</text>
        <line x1="150" y1="80" x2="150" y2="130" stroke="url(#bc-gold-v)" stroke-width="2" stroke-dasharray="6 6"><animate attributeName="stroke-dashoffset" values="48;0" dur="1.1s" repeatCount="indefinite"/></line>
        <text x="160" y="110" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9">verificación on-chain</text>
        <ellipse cx="150" cy="185" rx="60" ry="55" fill="url(#bc-glow-v)"/>
        <rect x="120" y="162" width="60" height="48" rx="9" fill="#17171d" stroke="url(#bc-gold-v)" stroke-width="2.5"/>
        <path d="M134 162 Q134 142 150 142 Q166 142 166 162" stroke="url(#bc-gold-v)" stroke-width="5" fill="none" stroke-linecap="round"/>
        <circle cx="150" cy="182" r="6" fill="#C8A96E"/><rect x="147.5" y="184" width="5" height="13" rx="2.5" fill="#C8A96E"/>
        <text x="200" y="190" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="11">PRIVADO</text>
        <line x1="150" y1="240" x2="150" y2="290" stroke="url(#bc-gold-v)" stroke-width="2" stroke-dasharray="6 6"><animate attributeName="stroke-dashoffset" values="0;48" dur="1.1s" repeatCount="indefinite"/></line>
        <text x="160" y="270" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9">llave temporal · 15 min</text>
        <rect x="118" y="300" width="64" height="64" rx="12" fill="#131318" stroke="#ece9e1" stroke-width="1.6"/>
        <path d="M134 322 h32 M134 332 h32 M134 342 h20" stroke="#C8A96E" stroke-width="2" stroke-linecap="round"><animate attributeName="opacity" values="0;1" dur="0.8s" begin="0.6s" fill="freeze"/></path>
        <text x="200" y="338" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="11">CONTENIDO</text>
      </svg>
      <div class="figure-cap">Fig. 4.1 — Flujo de entrega segura del Bound Content</div>
    </div>

    <p>Cuando el dueño pulsa <strong>"Descargar"</strong> o <strong>"Abrir"</strong>, el servidor de Grooves no devuelve el archivo directamente. Primero pregunta a la blockchain si esa billetera posee el Pressing. Solo si la respuesta es afirmativa, genera una <strong>URL firmada que expira</strong> — una llave de un solo uso con tiempo de vida limitado. El que no es dueño nunca llega a recibirla.</p>

    <div class="flow">
      <div class="flow-step"><div class="flow-num">1</div><h5>Solicitud</h5><p>El dueño pide desbloquear un perk desde la página del Pressing.</p></div>
      <div class="flow-arrow">→</div>
      <div class="flow-step"><div class="flow-num">2</div><h5>Verificación</h5><p>El backend confirma la propiedad consultando la blockchain en ese momento.</p></div>
      <div class="flow-arrow">→</div>
      <div class="flow-step"><div class="flow-num">3</div><h5>Entrega</h5><p>Se firma una URL temporal. El contenido se abre. La llave caduca.</p></div>
    </div>

    <div class="callout">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/></svg>
      <p><strong>Por qué importa.</strong> Aunque alguien copiara la URL desde la consola del navegador, no le serviría: expira en minutos, y para generar una nueva tendría que volver a demostrar — contra la blockchain — que posee el Pressing. La propiedad es la única llave.</p>
    </div>

    <h2>Esto es, exactamente, qué es la criptografía</h2>
    <p>Mucha gente escucha "blockchain" o "criptografía" y piensa en algo abstracto o especulativo. Pero lo que acabás de leer <em>es</em> la criptografía, en su forma más concreta y útil. Vale la pena entenderlo, porque es la base de toda la confianza en Grooves.</p>

    <p>La idea es simple y poderosa: en lugar de pedirte que <em>confíes</em> en que somos honestos, el sistema te da una <strong>prueba matemática</strong>. La blockchain es un registro público donde cada Pressing y cada dueño quedan anotados de forma que nadie —ni siquiera nosotros— puede alterar ni borrar. Cuando pedís tu Bound Content, no abrimos una base de datos privada para ver si "figurás en la lista": le preguntamos a ese registro público e inmutable, y la respuesta es verificable por cualquiera.</p>

    <div class="cards c3">
      <div class="card">
        <span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/></svg></span>
        <h4>Queda registrado</h4>
        <p>Cada propiedad y cada transacción se escribe en un libro público que nadie puede modificar. No hay "borrón y cuenta nueva": la verdad es permanente y la puede auditar cualquiera.</p>
      </div>
      <div class="card">
        <span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg></span>
        <h4>Se verifica, no se confía</h4>
        <p>El servidor no decide a dedo. Consulta la blockchain en el momento exacto del pedido. Si la cadena dice que sos el dueño, recibís la llave. Si no, no hay llave. Sin excepciones ni favores.</p>
      </div>
      <div class="card">
        <span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span>
        <h4>La llave caduca</h4>
        <p>El acceso que recibís es una llave de un solo uso con fecha de vencimiento. No es una contraseña que se filtra y queda abierta para siempre: en minutos deja de existir, y solo la propiedad genera una nueva.</p>
      </div>
    </div>

    <p>Esa es la diferencia entre la seguridad tradicional y la criptográfica. En un sistema común, alguien con acceso al servidor podría regalarse a sí mismo lo que quiera, y tendrías que confiar en que no lo hace. Acá, <strong>la propiedad on-chain es la única autoridad</strong>: ni el artista, ni un empleado, ni nosotros podemos saltarnos esa verificación. La matemática manda, no la buena voluntad.</p>

    <p class="pquote">No te pedimos que confíes. Te damos una prueba que cualquiera puede verificar, y que nadie puede falsificar.</p>

    <p>Y detrás de cada "sí" hay un proceso real de autenticación en el backend: la consulta a la cadena, la comprobación de la firma, la generación de la llave temporal. Todo eso ocurre en una fracción de segundo, invisible para vos — pero es lo que convierte un simple "Descargar" en una garantía blindada. <em>Eso</em> es la criptografía trabajando a tu favor.</p>

    <h2>Familia I — Archivos descargables</h2>
    <p>Todo un mundo de material que el artista quiera entregar como archivos que el dueño guarda. Viven en almacenamiento privado cifrado y solo se descargan tras la verificación de propiedad:</p>

    <div class="cards c3">
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></span><h4>Liner notes</h4><p>El PDF con el arte, las letras, los créditos y la historia del disco — como el librito que traía el CD.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3"/><circle cx="4" cy="12" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="20" cy="14" r="2"/></svg></span><h4>Stems</h4><p>Las pistas separadas (voz, batería, bajo…) en alta calidad, para que productores y fans remezclen la obra.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></span><h4>Bonus & rarezas</h4><p>Demos, versiones alternativas, tomas de estudio o tracks que no están en ninguna otra parte.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg></span><h4>Arte en alta resolución</h4><p>Portadas, fotografías del proceso y material visual listo para imprimir o coleccionar.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3M8 3v15a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V8h-3M8 3h8a2 2 0 0 1 2 2v3M11 8h4M11 12h4M11 16h2"/></svg></span><h4>Partituras</h4><p>El libro completo de partituras del disco, para músicos que quieran interpretar la obra.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg></span><h4>Lo que imagine</h4><p>Cualquier archivo: un fanzine, un wallpaper, un set de samples. El formato lo define el artista.</p></div>
    </div>

    <h2>Familia II — Accesos desbloqueables</h2>
    <p>El Pressing también puede funcionar como una llave a experiencias que viven fuera de Grooves. En vez de un archivo, el dueño desbloquea un acceso:</p>

    <div class="cards c3">
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg></span><h4>Comunidad privada</h4><p>Acceso a un Discord o Telegram exclusivo donde el artista comparte avances, hace Q&A y construye su círculo íntimo.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="11" r="3"/><path d="M5 11a7 7 0 1 1 14 0M8 11a4 4 0 1 1 8 0M12 14v7M9 21h6"/></svg></span><h4>Podcast exclusivo</h4><p>No solo escucharlo: participar en un podcast privado track-by-track donde el artista cuenta la historia detrás de cada canción.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6.5 7 .9-5 4.8 1.3 7L12 18l-6.3 3.2L7 14.2l-5-4.8 7-.9L12 2z"/></svg></span><h4>Patreon & membresías</h4><p>El Pressing desbloquea el acceso a un Patreon o a una membresía de pago externa, sin tener que suscribirse aparte.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 11h20M6 15h4"/></svg></span><h4>Pases personalizados</h4><p>Accesos a medida que el artista define: una sesión privada, un sorteo cerrado, una preventa anticipada.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9a3 3 0 0 0 0 6v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2z"/><path d="M13 5v2M13 11v2M13 17v2" stroke-dasharray="0.5 3"/></svg></span><h4>Entradas a eventos <span class="rm-badge">Roadmap</span></h4><p>El Pressing como boleto: en la puerta del concierto se escanea un QR que verifica on-chain que posees el NFT, y entrás a la zona VIP.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/></svg></span><h4>Lo que imagine</h4><p>Cualquier enlace o llave a una experiencia digital. La lista no es el límite — es el punto de partida.</p></div>
    </div>

    <div class="callout note">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      <p><strong>Una nota honesta sobre los eventos físicos.</strong> El QR en la puerta de un concierto es una de las experiencias más poderosas que un Pressing puede ofrecer, y está en nuestra hoja de ruta (requiere una app de validación en el lugar). Hoy ya son plenamente operativos los archivos descargables y los accesos por enlace; el QR de eventos es la evolución natural de la Familia II.</p>
    </div>

    <p class="pquote big">El Pressing no es un disco. Es una membresía creativa que crece en valor con la carrera del artista.</p>

    <p>Esta es la pieza que convierte a Grooves en algo más que un marketplace: cada obra es un objeto vivo al que el artista puede seguir añadiendo valor —nuevos archivos, nuevos accesos— mucho después de la venta. El dueño no compró una canción. Compró una puerta de entrada permanente.</p>
  `,
  en: `
    <div class="ch-eyebrow">
      <span class="num">CHAPTER 04</span>
      <span class="rule"></span>
      <span class="ch-status op"><span class="dot"></span> Live</span>
    </div>

    <h1 class="ch-title">Bound Content — the work is <em>only the beginning</em></h1>
    <p class="ch-lead">A Pressing doesn't end at the audio. It's a key that opens a whole creative world: files the owner downloads and access the owner alone unlocks. And no one else.</p>

    <p>On Grooves, owning a Pressing means permanent access to whatever the artist chooses to bind to it. We call that exclusive material <strong>Bound Content</strong>: content tied to ownership of the Pressing, delivered only to whoever holds it and verified directly on the blockchain.</p>

    <p>And here's the essential part: Bound Content is <strong>not "a file."</strong> It is <strong>a whole creative world</strong>. What the owner receives depends entirely on what the creator chooses to offer — and the artist's imagination is the only limit. A Pressing can open anything from the album in studio quality to a complete universe: the sheet music, the unreleased sessions, a podcast where the artist reveals every secret, the key to their community, the ticket to their next concert. The creator builds that world; the Pressing is the key that opens it.</p>

    <p>That world is organized into two families, and an artist can combine as many as they want — and as many as they can imagine — within a single Edition.</p>

    <div class="cards c2">
      <div class="card">
        <span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg></span>
        <span class="card-tag">Family I · Files</span>
        <h4>Everything the owner downloads</h4>
        <p>A world of material that lives in private storage and downloads only after ownership is verified: liner notes, sheet music, stems to remix, high-resolution art, bonus tracks, digital books — whatever the artist wants to deliver.</p>
      </div>
      <div class="card">
        <span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5"/></svg></span>
        <span class="card-tag">Family II · Access</span>
        <h4>Everything the owner unlocks</h4>
        <p>Keys to experiences only the holder sees: a private Discord, an exclusive podcast, a Patreon, a curated community, a custom pass, entry to an event — access to the artist's world.</p>
      </div>
    </div>

    <h2>A vault, not an open door</h2>
    <p>The difference between the 30-second <em>preview</em> and Bound Content is deliberate and fundamental. The preview is public: it lives in open storage and anyone can hear it — it's the shop window. Bound Content is private: it lives under lock, and that key is handed over only after confirming, against the blockchain, that whoever asks is the owner at that exact moment.</p>

    <div class="figure">
      <svg viewBox="0 0 560 300" class="svg-desktop" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bc-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
          <radialGradient id="bc-glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#C8A96E" stop-opacity="0.35"/><stop offset="1" stop-color="#C8A96E" stop-opacity="0"/></radialGradient>
        </defs>
        <circle cx="80" cy="150" r="46" stroke="#ece9e1" stroke-width="2" fill="none"/>
        <circle cx="80" cy="150" r="30" stroke="#5a5852" stroke-width="1" fill="none"/>
        <circle cx="80" cy="150" r="9" fill="#C8A96E"><animate attributeName="opacity" values="1;0.6;1" dur="2.4s" repeatCount="indefinite"/></circle>
        <text x="80" y="222" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="11">PRESSING</text>
        <line x1="128" y1="150" x2="232" y2="150" stroke="url(#bc-gold)" stroke-width="2" stroke-dasharray="6 6"><animate attributeName="stroke-dashoffset" values="48;0" dur="1.1s" repeatCount="indefinite"/></line>
        <text x="180" y="138" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9.5">on-chain verification</text>
        <ellipse cx="290" cy="150" rx="70" ry="70" fill="url(#bc-glow)"/>
        <path d="M270 128 Q270 104 290 104 Q310 104 310 128" stroke="url(#bc-gold)" stroke-width="6" fill="none" stroke-linecap="round"><animate attributeName="d" values="M270 128 Q270 104 290 104 Q310 104 310 128;M270 128 Q270 96 290 96 Q310 96 310 128;M270 128 Q270 104 290 104 Q310 104 310 128" dur="3s" repeatCount="indefinite"/></path>
        <rect x="258" y="126" width="64" height="52" rx="9" fill="#17171d" stroke="url(#bc-gold)" stroke-width="2.5"/>
        <circle cx="290" cy="148" r="6" fill="#C8A96E"/><rect x="287.5" y="150" width="5" height="14" rx="2.5" fill="#C8A96E"/>
        <text x="290" y="222" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="11">PRIVATE</text>
        <line x1="348" y1="150" x2="452" y2="150" stroke="url(#bc-gold)" stroke-width="2" stroke-dasharray="6 6"><animate attributeName="stroke-dashoffset" values="0;48" dur="1.1s" repeatCount="indefinite"/></line>
        <text x="400" y="138" text-anchor="middle" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9.5">temporary key · 15 min</text>
        <rect x="458" y="118" width="64" height="64" rx="12" fill="#131318" stroke="#ece9e1" stroke-width="1.6"/>
        <path d="M474 140 h32 M474 150 h32 M474 160 h20" stroke="#C8A96E" stroke-width="2" stroke-linecap="round"><animate attributeName="opacity" values="0;1" dur="0.8s" begin="0.6s" fill="freeze"/></path>
        <text x="490" y="222" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="11">CONTENT</text>
      </svg>

      <svg viewBox="0 0 300 420" class="svg-mobile" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bc-gold-v" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
          <radialGradient id="bc-glow-v" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#C8A96E" stop-opacity="0.35"/><stop offset="1" stop-color="#C8A96E" stop-opacity="0"/></radialGradient>
        </defs>
        <circle cx="150" cy="46" r="34" stroke="#ece9e1" stroke-width="2" fill="none"/>
        <circle cx="150" cy="46" r="22" stroke="#5a5852" stroke-width="1" fill="none"/>
        <circle cx="150" cy="46" r="7" fill="#C8A96E"><animate attributeName="opacity" values="1;0.6;1" dur="2.4s" repeatCount="indefinite"/></circle>
        <text x="200" y="50" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="11">PRESSING</text>
        <line x1="150" y1="80" x2="150" y2="130" stroke="url(#bc-gold-v)" stroke-width="2" stroke-dasharray="6 6"><animate attributeName="stroke-dashoffset" values="48;0" dur="1.1s" repeatCount="indefinite"/></line>
        <text x="160" y="110" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9">on-chain verification</text>
        <ellipse cx="150" cy="185" rx="60" ry="55" fill="url(#bc-glow-v)"/>
        <rect x="120" y="162" width="60" height="48" rx="9" fill="#17171d" stroke="url(#bc-gold-v)" stroke-width="2.5"/>
        <path d="M134 162 Q134 142 150 142 Q166 142 166 162" stroke="url(#bc-gold-v)" stroke-width="5" fill="none" stroke-linecap="round"/>
        <circle cx="150" cy="182" r="6" fill="#C8A96E"/><rect x="147.5" y="184" width="5" height="13" rx="2.5" fill="#C8A96E"/>
        <text x="200" y="190" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="11">PRIVATE</text>
        <line x1="150" y1="240" x2="150" y2="290" stroke="url(#bc-gold-v)" stroke-width="2" stroke-dasharray="6 6"><animate attributeName="stroke-dashoffset" values="0;48" dur="1.1s" repeatCount="indefinite"/></line>
        <text x="160" y="270" fill="#C8A96E" font-family="'JetBrains Mono',monospace" font-size="9">temporary key · 15 min</text>
        <rect x="118" y="300" width="64" height="64" rx="12" fill="#131318" stroke="#ece9e1" stroke-width="1.6"/>
        <path d="M134 322 h32 M134 332 h32 M134 342 h20" stroke="#C8A96E" stroke-width="2" stroke-linecap="round"><animate attributeName="opacity" values="0;1" dur="0.8s" begin="0.6s" fill="freeze"/></path>
        <text x="200" y="338" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="11">CONTENT</text>
      </svg>
      <div class="figure-cap">Fig. 4.1 — Secure Bound Content delivery flow</div>

    <p>When the owner taps <strong>"Download"</strong> or <strong>"Open,"</strong> the Grooves server does not return the file directly. First it asks the blockchain whether that wallet owns the Pressing. Only if the answer is yes does it generate a <strong>signed URL that expires</strong> — a single-use key with a limited lifetime. Whoever is not the owner never receives it.</p>

    <div class="flow">
      <div class="flow-step"><div class="flow-num">1</div><h5>Request</h5><p>The owner asks to unlock a perk from the Pressing page.</p></div>
      <div class="flow-arrow">→</div>
      <div class="flow-step"><div class="flow-num">2</div><h5>Verification</h5><p>The backend confirms ownership by querying the blockchain at that moment.</p></div>
      <div class="flow-arrow">→</div>
      <div class="flow-step"><div class="flow-num">3</div><h5>Delivery</h5><p>A temporary URL is signed. The content opens. The key expires.</p></div>
    </div>

    <div class="callout">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/></svg>
      <p><strong>Why it matters.</strong> Even if someone copied the URL from the browser console, it wouldn't help them: it expires in minutes, and to generate a new one they'd have to prove again — against the blockchain — that they own the Pressing. Ownership is the only key.</p>
    </div>

    <h2>This is, exactly, what cryptography is</h2>
    <p>Many people hear "blockchain" or "cryptography" and picture something abstract or speculative. But what you just read <em>is</em> cryptography, in its most concrete and useful form. It's worth understanding, because it's the foundation of all trust on Grooves.</p>

    <p>The idea is simple and powerful: instead of asking you to <em>trust</em> that we're honest, the system gives you a <strong>mathematical proof</strong>. The blockchain is a public ledger where every Pressing and every owner are recorded in a way no one — not even us — can alter or erase. When you request your Bound Content, we don't open a private database to check whether you're "on the list": we ask that public, immutable ledger, and the answer is verifiable by anyone.</p>

    <div class="cards c3">
      <div class="card">
        <span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/></svg></span>
        <h4>It's recorded</h4>
        <p>Every ownership and every transaction is written into a public ledger no one can modify. There is no "wipe and start over": the truth is permanent and anyone can audit it.</p>
      </div>
      <div class="card">
        <span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg></span>
        <h4>Verified, not trusted</h4>
        <p>The server doesn't decide by hand. It queries the blockchain at the exact moment of the request. If the chain says you're the owner, you get the key. If not, no key. No exceptions, no favors.</p>
      </div>
      <div class="card">
        <span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span>
        <h4>The key expires</h4>
        <p>The access you receive is a single-use key with an expiry date. It's not a password that leaks and stays open forever: in minutes it ceases to exist, and only ownership generates a new one.</p>
      </div>
    </div>

    <p>That's the difference between traditional and cryptographic security. In an ordinary system, someone with server access could grant themselves anything they wanted, and you'd have to trust they don't. Here, <strong>on-chain ownership is the only authority</strong>: not the artist, not an employee, not us can bypass that verification. Math rules, not goodwill.</p>

    <p class="pquote">We don't ask you to trust. We give you a proof anyone can verify, and no one can forge.</p>

    <p>And behind every "yes" there is a real authentication process in the backend: the query to the chain, the signature check, the generation of the temporary key. All of that happens in a fraction of a second, invisible to you — but it's what turns a simple "Download" into an armored guarantee. <em>That</em> is cryptography working in your favor.</p>

    <h2>Family I — Downloadable files</h2>
    <p>A whole world of material the artist chooses to deliver as files the owner keeps. They live in private, encrypted storage and download only after ownership verification:</p>

    <div class="cards c3">
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></span><h4>Liner notes</h4><p>The PDF with the art, lyrics, credits and story of the record — like the booklet that came with the CD.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3"/><circle cx="4" cy="12" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="20" cy="14" r="2"/></svg></span><h4>Stems</h4><p>The separated tracks (vocals, drums, bass…) in high quality, so producers and fans can remix the work.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></span><h4>Bonus & rarities</h4><p>Demos, alternate versions, studio takes or tracks found nowhere else.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg></span><h4>High-resolution art</h4><p>Covers, process photography and visual material ready to print or collect.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3M8 3v15a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V8h-3M8 3h8a2 2 0 0 1 2 2v3M11 8h4M11 12h4M11 16h2"/></svg></span><h4>Sheet music</h4><p>The complete book of the record's scores, for musicians who want to perform the work.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg></span><h4>Whatever they imagine</h4><p>Any file: a zine, a wallpaper, a sample pack. The artist defines the format.</p></div>
    </div>

    <h2>Family II — Unlockable access</h2>
    <p>A Pressing can also work as a key to experiences that live outside Grooves. Instead of a file, the owner unlocks access:</p>

    <div class="cards c3">
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg></span><h4>Private community</h4><p>Access to an exclusive Discord or Telegram where the artist shares previews, runs Q&As and builds their inner circle.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="11" r="3"/><path d="M5 11a7 7 0 1 1 14 0M8 11a4 4 0 1 1 8 0M12 14v7M9 21h6"/></svg></span><h4>Exclusive podcast</h4><p>Not just listening: taking part in a private track-by-track podcast where the artist tells the story behind every song.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6.5 7 .9-5 4.8 1.3 7L12 18l-6.3 3.2L7 14.2l-5-4.8 7-.9L12 2z"/></svg></span><h4>Patreon & memberships</h4><p>The Pressing unlocks access to a Patreon or an external paid membership, with no separate subscription.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 11h20M6 15h4"/></svg></span><h4>Custom passes</h4><p>Tailored access the artist defines: a private session, a closed raffle, an early presale.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9a3 3 0 0 0 0 6v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2z"/></svg></span><h4>Event tickets <span class="rm-badge">Roadmap</span></h4><p>The Pressing as a ticket: at the concert door a QR is scanned that verifies on-chain you own the NFT, and you enter the VIP area.</p></div>
      <div class="card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/></svg></span><h4>Whatever they imagine</h4><p>Any link or key to a digital experience. The list isn't the limit — it's the starting point.</p></div>
    </div>

    <div class="callout note">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      <p><strong>An honest note on physical events.</strong> The QR at a concert door is one of the most powerful experiences a Pressing can offer, and it's on our roadmap (it requires a validation app on-site). Today, downloadable files and link-based access are fully live; the event QR is the natural evolution of Family II.</p>
    </div>

    <p class="pquote big">A Pressing is not a record. It's a creative membership that grows in value with the artist's career.</p>

    <p>This is the piece that makes Grooves more than a marketplace: every work is a living object the artist can keep adding value to — new files, new access — long after the sale. The owner didn't buy a song. They bought a permanent door in.</p>

  `
});
