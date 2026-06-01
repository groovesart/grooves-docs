/* ============================================================
   CAPÍTULO 02 — EL PROBLEMA
   Texto: ORIGINAL del autor (el-problema.md).
   ============================================================ */
registerChapter('problema', {
  order: 2,
  es: `
    <div class="ch-eyebrow">
      <span class="num">CAPÍTULO 02</span>
      <span class="rule"></span>
    </div>

    <h1 class="ch-title">Un ecosistema diseñado <em>contra el creador</em></h1>

    <p>En el modelo actual de streaming, el artista cede el control de su obra al momento de distribuirla. Las plataformas deciden cuánto se paga por cada reproducción (fracciones de centavo), las auditorías de la recolección de esas regalías son por auditores privados que han levantado muchos cuestionamientos a través del tiempo, existe un montón de intermediarios (agregadoras) que deciden si tu música la suben a plataformas o no, peor aún, casos de artistas que tienen un crecimiento orgánico o se viralizó de la noche a la mañana un sencillo o álbum y ellos arbitrariamente deciden censurar el álbum proponiendo conjeturas de actuaciones indebidas que en muchos casos son falsas, aún así el artista no puede hacer nada. Las irregularidades en este sistema de alquiler musical han traído un sinfín de problemas y el que termina al final más perjudicado es el creador. Así mismo, se pierde la relación directa con su audiencia. Se toma la música como un alquiler, un objeto de consumo sin más funcionalidad.</p>

    <div class="figure reflow">
      <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" class="chain-svg svg-desktop">
        <g>
          <rect x="30" y="78" width="110" height="44" rx="10" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/>
          <text x="85" y="105" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13">Artista</text>
        </g>
        <g>
          <rect x="245" y="70" width="110" height="60" rx="10" fill="#2e1a1a" stroke="#c0563f" stroke-width="1.8"/>
          <text x="300" y="95" text-anchor="middle" fill="#e08a72" font-family="'Spline Sans',sans-serif" font-size="12">Plataforma</text>
          <text x="300" y="113" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">+ agregadoras</text>
        </g>
        <g>
          <rect x="460" y="78" width="110" height="44" rx="10" fill="#131318" stroke="#5a5852" stroke-width="1.6"/>
          <text x="515" y="105" text-anchor="middle" fill="#c9c6bd" font-family="'Spline Sans',sans-serif" font-size="13">Oyente</text>
        </g>
        <line x1="140" y1="100" x2="245" y2="100" stroke="#C8A96E" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="40;0" dur="1.2s" repeatCount="indefinite"/></line>
        <text x="192" y="90" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">música</text>
        <line x1="460" y1="108" x2="355" y2="108" stroke="#7fc99a" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="0;40" dur="1.2s" repeatCount="indefinite"/></line>
        <text x="408" y="124" text-anchor="middle" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="8.5">$11/mes</text>
        <path d="M245 118 Q190 152 140 118" stroke="#c0563f" stroke-width="1.4" fill="none" stroke-dasharray="3 4"/>
        <text x="192" y="162" text-anchor="middle" fill="#c0563f" font-family="'JetBrains Mono',monospace" font-size="8.5">$0,003 / stream</text>
      </svg>
      <svg viewBox="0 0 300 330" xmlns="http://www.w3.org/2000/svg" class="svg-mobile">
        <rect x="80" y="20" width="140" height="44" rx="10" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/>
        <text x="150" y="47" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13">Artista</text>
        <line x1="150" y1="64" x2="150" y2="118" stroke="#C8A96E" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="40;0" dur="1.2s" repeatCount="indefinite"/></line>
        <text x="160" y="94" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">música ↓</text>
        <rect x="75" y="120" width="150" height="58" rx="10" fill="#2e1a1a" stroke="#c0563f" stroke-width="1.8"/>
        <text x="150" y="144" text-anchor="middle" fill="#e08a72" font-family="'Spline Sans',sans-serif" font-size="13">Plataforma</text>
        <text x="150" y="162" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">+ agregadoras</text>
        <line x1="150" y1="178" x2="150" y2="232" stroke="#7fc99a" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="0;40" dur="1.2s" repeatCount="indefinite"/></line>
        <text x="160" y="208" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="9">$11/mes ↑</text>
        <rect x="80" y="234" width="140" height="44" rx="10" fill="#131318" stroke="#5a5852" stroke-width="1.6"/>
        <text x="150" y="261" text-anchor="middle" fill="#c9c6bd" font-family="'Spline Sans',sans-serif" font-size="13">Oyente</text>
        <text x="150" y="306" text-anchor="middle" fill="#c0563f" font-family="'JetBrains Mono',monospace" font-size="10">↩ $0,003 / stream al artista</text>
      </svg>
      <div class="figure-cap">Fig. 2.1 — La cadena que extrae valor del creador</div>
    </div>

    <p>El artista independiente enfrenta un sistema diseñado para volumen, donde un millón de canciones nuevas se suben cada semana y la atención del oyente se fragmenta hasta volverse insignificante. Las disqueras tradicionales, por su parte, ofrecen adelantos a cambio de derechos master que el artista rara vez recupera.</p>

    <p>Pero el problema no termina en el artista independiente. Los propios sellos discográficos, desde las pequeñas disqueras hasta las grandes majors, operan dentro de un modelo que subestima el valor de su catálogo y las nuevas funciones que pueden optar por ello. Un catálogo que contiene décadas de historia musical se reduce a fracciones de centavo por stream, sin ninguna herramienta para crear escasez, exclusividad o experiencias diferenciadas alrededor de su música.</p>

    <div class="statline">
      <div class="stat"><div class="big" data-count="1000000">1.000.000</div><div class="lbl">de reproducciones necesarias…</div></div>
      <div class="stat"><div class="big">≈ $3.000</div><div class="lbl">…para ganar el equivalente a un salario mínimo mensual.</div></div>
    </div>

    <div class="callout warn">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>
      <p><strong>1.000.000 streams = ~$3.000 USD aprox.</strong> Un artista necesita más de un millón de reproducciones para ganar lo equivalente a un salario mínimo mensual aproximadamente. El sistema actual no fue diseñado para remunerar al creador.</p>
    </div>

    <h2>Grooves es una oportunidad para todos los actores del ecosistema musical</h2>

    <p>Grooves está diseñado para que cualquier creador, desde el artista independiente hasta el sello discográfico más grande del mundo encuentre un modelo superior al actual. Para el artista independiente, significa control total, una gama amplia de funcionalidades sobre su arte y pagos directos con comisiones por reventas. Para un gran sello, significa una nueva forma de monetizar catálogos que hoy solo generan fracciones de centavo por stream, creando experiencias premium que sus fanáticos están dispuestos a poseer y coleccionar.</p>

    <div class="callout note">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      <p>Imagina a un gran sello creando Pressings de acceso a catálogos históricos completos: toda la música de los años 70 de un artista legendario como un Sealed Edition de 10.000 unidades (<em>pressings</em>), con acceso a material inédito, sesiones de estudio remasterizadas y documentales exclusivos o hasta entradas a instalaciones icónicas a los que posean un <em>pressing</em> de esos. O un Open Edition del catálogo completo de un género, donde cada <em>Pressing</em> incluye acceso a una comunidad curada por los propios artistas. Las posibilidades para monetizar catálogos que hoy solo generan fracciones de centavo por stream son ilimitadas.</p>
    </div>

    <h2>El fan no posee nada</h2>

    <p>Un usuario de streaming que ha pagado $11 al mes durante 10 años ha invertido $1.320 en música. ¿Qué posee? Nada. Si cancela su suscripción, pierde acceso a todo. Si la plataforma cierra, pierde acceso a todo. Su "biblioteca" es una lista de enlaces que apuntan a servidores que no controla.</p>

    <table>
      <thead><tr><th></th><th>Streaming (hoy)</th><th>Grooves (propiedad)</th></tr></thead>
      <tbody>
        <tr><td><strong>Inversión 10 años</strong></td><td>$1.320</td><td>~$150 (10 <em>Pressings</em>)</td></tr>
        <tr><td><strong>¿Qué posee?</strong></td><td>Nada</td><td>10 obras revendibles</td></tr>
        <tr><td><strong>Si cancela</strong></td><td>Pierde todo</td><td>Conserva todo</td></tr>
        <tr><td><strong>Si el artista crece</strong></td><td>Nada cambia</td><td>Sus <em>Pressings</em> se revalorizan y los puede revender más caros; hay transabilidad</td></tr>
      </tbody>
    </table>

    <p>Contraste esto con el coleccionista de vinilos: cada disco que compró sigue siendo suyo. Puede venderlo, regalarlo, heredarlo. Algunos discos se revalorizan con el tiempo. La relación entre el fan y la obra es tangible, permanente, real.</p>

    <h2>El mercado secundario no beneficia al artista</h2>

    <p>Cuando un vinilo raro se vende por miles de dólares en el mercado secundario, el artista original no recibe nada. Los mercados de reventa de entradas a conciertos generan miles de millones de dólares al año sin que un centavo regrese al creador.</p>

    <div class="figure reflow">
      <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" class="sec-svg svg-desktop">
        <defs>
          <linearGradient id="p-goldbar" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
        </defs>
        <text x="150" y="22" text-anchor="middle" fill="#c0563f" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="1">MODELO ACTUAL</text>
        <text x="450" y="22" text-anchor="middle" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="1">MODELO GROOVES</text>
        <line x1="300" y1="36" x2="300" y2="234" stroke="#2a2a30" stroke-width="1" stroke-dasharray="3 4"/>

        <rect x="62" y="48" width="176" height="40" rx="9" fill="#131318" stroke="#5a5852"/>
        <text x="150" y="73" text-anchor="middle" fill="#c9c6bd" font-size="12" font-family="'Spline Sans',sans-serif">Reventa por $5.000</text>
        <path d="M150 88 L150 120" stroke="#5a5852" stroke-width="2"><animate attributeName="stroke-dashoffset" values="32;0" dur="1s" fill="freeze"/></path>
        <polygon points="150,124 145,116 155,116" fill="#5a5852"/>
        <rect x="80" y="128" width="140" height="56" rx="10" fill="#2e1a1a" stroke="#c0563f" stroke-width="1.6"/>
        <text x="150" y="150" text-anchor="middle" fill="#e08a72" font-size="12" font-family="'Spline Sans',sans-serif">El artista recibe</text>
        <text x="150" y="172" text-anchor="middle" fill="#c0563f" font-size="20" font-family="'Fraunces',serif" font-weight="600">$0</text>

        <rect x="362" y="48" width="176" height="40" rx="9" fill="#131318" stroke="#5a5852"/>
        <text x="450" y="73" text-anchor="middle" fill="#c9c6bd" font-size="12" font-family="'Spline Sans',sans-serif">Reventa por $5.000</text>
        <path d="M450 88 L450 104" stroke="url(#p-goldbar)" stroke-width="2"/>
        <path d="M450 104 L390 104 L390 126" stroke="#7fc99a" stroke-width="2" fill="none" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.6s" fill="freeze"/></path>
        <path d="M450 104 L510 104 L510 126" stroke="#C8A96E" stroke-width="2" fill="none" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/></path>
        <rect x="346" y="130" width="88" height="54" rx="10" fill="#131318" stroke="#5a5852"/>
        <text x="390" y="151" text-anchor="middle" fill="#c9c6bd" font-size="11" font-family="'Spline Sans',sans-serif">Vendedor</text>
        <text x="390" y="169" text-anchor="middle" fill="#9a978f" font-size="10" font-family="'JetBrains Mono',monospace">el resto</text>
        <rect x="466" y="130" width="88" height="54" rx="10" fill="#2e2a1a" stroke="#C8A96E" stroke-width="1.6"/>
        <text x="510" y="151" text-anchor="middle" fill="#d9bf8a" font-size="11" font-family="'Spline Sans',sans-serif">Artista</text>
        <text x="510" y="169" text-anchor="middle" fill="#C8A96E" font-size="12" font-family="'JetBrains Mono',monospace">royalty</text>
        <text x="450" y="214" text-anchor="middle" fill="#7fc99a" font-size="11" font-family="'Spline Sans',sans-serif" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.6s" begin="1.3s" fill="freeze"/>Automático · on-chain · perpetuo</text>
      </svg>
      <svg viewBox="0 0 300 430" xmlns="http://www.w3.org/2000/svg" class="svg-mobile">
        <defs><linearGradient id="p-goldbar-v" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <text x="150" y="16" text-anchor="middle" fill="#c0563f" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="1">MODELO ACTUAL</text>
        <rect x="55" y="26" width="190" height="36" rx="9" fill="#131318" stroke="#5a5852"/>
        <text x="150" y="49" text-anchor="middle" fill="#c9c6bd" font-size="12" font-family="'Spline Sans',sans-serif">Reventa por $5.000</text>
        <line x1="150" y1="62" x2="150" y2="86" stroke="#5a5852" stroke-width="2"/><polygon points="150,90 145,82 155,82" fill="#5a5852"/>
        <rect x="80" y="92" width="140" height="50" rx="10" fill="#2e1a1a" stroke="#c0563f" stroke-width="1.6"/>
        <text x="150" y="112" text-anchor="middle" fill="#e08a72" font-size="12" font-family="'Spline Sans',sans-serif">El artista recibe</text>
        <text x="150" y="133" text-anchor="middle" fill="#c0563f" font-size="19" font-family="'Fraunces',serif" font-weight="600">$0</text>

        <line x1="40" y1="168" x2="260" y2="168" stroke="#2a2a30" stroke-width="1" stroke-dasharray="3 4"/>
        <text x="150" y="196" text-anchor="middle" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="1">MODELO GROOVES</text>
        <rect x="55" y="206" width="190" height="36" rx="9" fill="#131318" stroke="#5a5852"/>
        <text x="150" y="229" text-anchor="middle" fill="#c9c6bd" font-size="12" font-family="'Spline Sans',sans-serif">Reventa por $5.000</text>
        <path d="M150 242 L150 262" stroke="url(#p-goldbar-v)" stroke-width="2"/>
        <path d="M150 262 L90 262 L90 286" stroke="#7fc99a" stroke-width="2" fill="none" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.6s" fill="freeze"/></path>
        <path d="M150 262 L210 262 L210 286" stroke="#C8A96E" stroke-width="2" fill="none" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/></path>
        <rect x="46" y="290" width="88" height="50" rx="10" fill="#131318" stroke="#5a5852"/>
        <text x="90" y="311" text-anchor="middle" fill="#c9c6bd" font-size="11" font-family="'Spline Sans',sans-serif">Vendedor</text>
        <text x="90" y="328" text-anchor="middle" fill="#9a978f" font-size="10" font-family="'JetBrains Mono',monospace">el resto</text>
        <rect x="166" y="290" width="88" height="50" rx="10" fill="#2e2a1a" stroke="#C8A96E" stroke-width="1.6"/>
        <text x="210" y="311" text-anchor="middle" fill="#d9bf8a" font-size="11" font-family="'Spline Sans',sans-serif">Artista</text>
        <text x="210" y="328" text-anchor="middle" fill="#C8A96E" font-size="11" font-family="'JetBrains Mono',monospace">royalty</text>
        <text x="150" y="370" text-anchor="middle" fill="#7fc99a" font-size="11" font-family="'Spline Sans',sans-serif" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.6s" begin="1.3s" fill="freeze"/>Automático · on-chain · perpetuo</text>
      </svg>
      <div class="figure-cap">Fig. 2.2 — En cada reventa, el creador cobra</div>
    </div>

    <p>La tecnología blockchain resuelve esto de forma programática: cada vez que una obra cambia de manos, un porcentaje definido por el artista regresa automáticamente a su billetera, sin intermediarios, todo escrito públicamente y auditado por la blockchain que cualquier persona puede corroborar, de manera perpetua sin auditores privados. No es una promesa contractual — es código ejecutable descentralizado que no puede ser alterado.</p>
  `,
  en: `
    <div class="ch-eyebrow">
      <span class="num">CHAPTER 02</span>
      <span class="rule"></span>
    </div>

    <h1 class="ch-title">An ecosystem designed <em>against the creator</em></h1>

    <p>In today's streaming model, the artist gives up control of their work the moment they distribute it. Platforms decide how much each play pays — fractions of a cent. The audits of how those royalties are collected are run by private auditors who have raised many questions over the years. There is a layer of middlemen — aggregators — who decide whether your music reaches the platforms at all. Worse still: there are cases of artists with organic growth, or whose single went viral overnight, whom the platform arbitrarily censors on conjectures of misconduct that are often false — and the artist can do nothing. The irregularities of this music-rental system have caused endless problems, and the one most harmed, in the end, is always the creator. The direct relationship with the audience is lost, and music is treated as a rental, a consumption object with no further function.</p>

    <div class="figure reflow">
      <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" class="chain-svg svg-desktop">
        <g>
          <rect x="30" y="78" width="110" height="44" rx="10" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/>
          <text x="85" y="105" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13">Artist</text>
        </g>
        <g>
          <rect x="245" y="70" width="110" height="60" rx="10" fill="#2e1a1a" stroke="#c0563f" stroke-width="1.8"/>
          <text x="300" y="95" text-anchor="middle" fill="#e08a72" font-family="'Spline Sans',sans-serif" font-size="12">Platform</text>
          <text x="300" y="113" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">+ aggregators</text>
        </g>
        <g>
          <rect x="460" y="78" width="110" height="44" rx="10" fill="#131318" stroke="#5a5852" stroke-width="1.6"/>
          <text x="515" y="105" text-anchor="middle" fill="#c9c6bd" font-family="'Spline Sans',sans-serif" font-size="13">Listener</text>
        </g>
        <line x1="140" y1="100" x2="245" y2="100" stroke="#C8A96E" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="40;0" dur="1.2s" repeatCount="indefinite"/></line>
        <text x="192" y="90" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="8.5">music</text>
        <line x1="460" y1="108" x2="355" y2="108" stroke="#7fc99a" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="0;40" dur="1.2s" repeatCount="indefinite"/></line>
        <text x="408" y="124" text-anchor="middle" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="8.5">$11/mo</text>
        <path d="M245 118 Q190 152 140 118" stroke="#c0563f" stroke-width="1.4" fill="none" stroke-dasharray="3 4"/>
        <text x="192" y="162" text-anchor="middle" fill="#c0563f" font-family="'JetBrains Mono',monospace" font-size="8.5">$0,003 / stream</text>
      </svg>
      <svg viewBox="0 0 300 330" xmlns="http://www.w3.org/2000/svg" class="svg-mobile">
        <rect x="80" y="20" width="140" height="44" rx="10" fill="#131318" stroke="#C8A96E" stroke-width="1.6"/>
        <text x="150" y="47" text-anchor="middle" fill="#d9bf8a" font-family="'Spline Sans',sans-serif" font-size="13">Artist</text>
        <line x1="150" y1="64" x2="150" y2="118" stroke="#C8A96E" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="40;0" dur="1.2s" repeatCount="indefinite"/></line>
        <text x="160" y="94" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">music ↓</text>
        <rect x="75" y="120" width="150" height="58" rx="10" fill="#2e1a1a" stroke="#c0563f" stroke-width="1.8"/>
        <text x="150" y="144" text-anchor="middle" fill="#e08a72" font-family="'Spline Sans',sans-serif" font-size="13">Platform</text>
        <text x="150" y="162" text-anchor="middle" fill="#9a978f" font-family="'JetBrains Mono',monospace" font-size="9">+ aggregators</text>
        <line x1="150" y1="178" x2="150" y2="232" stroke="#7fc99a" stroke-width="2" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" values="0;40" dur="1.2s" repeatCount="indefinite"/></line>
        <text x="160" y="208" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="9">$11/mo ↑</text>
        <rect x="80" y="234" width="140" height="44" rx="10" fill="#131318" stroke="#5a5852" stroke-width="1.6"/>
        <text x="150" y="261" text-anchor="middle" fill="#c9c6bd" font-family="'Spline Sans',sans-serif" font-size="13">Listener</text>
        <text x="150" y="306" text-anchor="middle" fill="#c0563f" font-family="'JetBrains Mono',monospace" font-size="10">↩ $0,003 / stream to artist</text>
      </svg>
      <div class="figure-cap">Fig. 2.1 — The chain that extracts value from the creator</div>
    </div>

    <p>The independent artist faces a system designed for volume, where a million new songs are uploaded every week and the listener's attention fragments until it becomes insignificant. Traditional labels, for their part, offer advances in exchange for master rights the artist rarely recovers.</p>

    <p>But the problem doesn't end with the independent artist. The labels themselves — from the smallest to the major companies — operate within a model that underestimates the value of their catalog and the new functions they could build around it. A catalog holding decades of music history is reduced to fractions of a cent per stream, with no tool to create scarcity, exclusivity or differentiated experiences around their music.</p>

    <div class="statline">
      <div class="stat"><div class="big" data-count="1000000">1,000,000</div><div class="lbl">streams needed…</div></div>
      <div class="stat"><div class="big">≈ $3,000</div><div class="lbl">…to earn the equivalent of a monthly minimum wage.</div></div>
    </div>

    <div class="callout warn">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>
      <p><strong>1,000,000 streams = ~$3,000 USD approx.</strong> An artist needs more than a million plays to earn roughly the equivalent of a monthly minimum wage. Today's system was not designed to pay the creator.</p>
    </div>

    <h2>Grooves is an opportunity for every actor in the music ecosystem</h2>

    <p>Grooves is designed so that any creator — from the independent artist to the largest label in the world — finds a model superior to the current one. For the independent artist it means total control, a broad range of functionality over their art, and direct payments with resale commissions. For a large label it means a new way to monetize catalogs that today only generate fractions of a cent per stream, creating premium experiences their fans are willing to own and collect.</p>

    <div class="callout note">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      <p>Imagine a major label creating Pressings that unlock complete historical catalogs: an entire decade of a legendary artist as a 10,000-unit Sealed Edition, with unreleased material, remastered studio sessions and exclusive documentaries — or even access to iconic venues for those who hold one of those Pressings. Or an Open Edition of an entire genre's catalog, where each Pressing includes access to a community curated by the artists themselves. The possibilities for monetizing catalogs that today earn only fractions of a cent are limitless.</p>
    </div>

    <h2>The fan owns nothing</h2>

    <p>A streaming user who has paid $11 a month for 10 years has invested $1,320 in music. What do they own? Nothing. If they cancel, they lose access to everything. If the platform shuts down, they lose access to everything. Their "library" is a list of links pointing to servers they don't control.</p>

    <table>
      <thead><tr><th></th><th>Streaming (today)</th><th>Grooves (ownership)</th></tr></thead>
      <tbody>
        <tr><td><strong>10-year investment</strong></td><td>$1,320</td><td>~$150 (10 Pressings)</td></tr>
        <tr><td><strong>What do you own?</strong></td><td>Nothing</td><td>10 resellable works</td></tr>
        <tr><td><strong>If you cancel</strong></td><td>Lose everything</td><td>Keep everything</td></tr>
        <tr><td><strong>If the artist grows</strong></td><td>Nothing changes</td><td>Your Pressings appreciate and can be resold higher; there is tradability</td></tr>
      </tbody>
    </table>

    <p>Contrast this with the vinyl collector: every record they bought is still theirs. They can sell it, gift it, pass it on. Some records appreciate over time. The relationship between fan and work is tangible, permanent, real.</p>

    <h2>The secondary market doesn't benefit the artist</h2>

    <p>When a rare vinyl sells for thousands of dollars on the secondary market, the original artist receives nothing. Concert-ticket resale markets move billions a year without a single cent returning to the creator.</p>

    <div class="figure reflow">
      <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" class="sec-svg svg-desktop">
        <defs>
          <linearGradient id="p-goldbar" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient>
        </defs>
        <text x="150" y="22" text-anchor="middle" fill="#c0563f" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="1">CURRENT MODEL</text>
        <text x="450" y="22" text-anchor="middle" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="1">GROOVES MODEL</text>
        <line x1="300" y1="36" x2="300" y2="234" stroke="#2a2a30" stroke-width="1" stroke-dasharray="3 4"/>

        <rect x="62" y="48" width="176" height="40" rx="9" fill="#131318" stroke="#5a5852"/>
        <text x="150" y="73" text-anchor="middle" fill="#c9c6bd" font-size="12" font-family="'Spline Sans',sans-serif">Resale at $5.000</text>
        <path d="M150 88 L150 120" stroke="#5a5852" stroke-width="2"><animate attributeName="stroke-dashoffset" values="32;0" dur="1s" fill="freeze"/></path>
        <polygon points="150,124 145,116 155,116" fill="#5a5852"/>
        <rect x="80" y="128" width="140" height="56" rx="10" fill="#2e1a1a" stroke="#c0563f" stroke-width="1.6"/>
        <text x="150" y="150" text-anchor="middle" fill="#e08a72" font-size="12" font-family="'Spline Sans',sans-serif">The artist gets</text>
        <text x="150" y="172" text-anchor="middle" fill="#c0563f" font-size="20" font-family="'Fraunces',serif" font-weight="600">$0</text>

        <rect x="362" y="48" width="176" height="40" rx="9" fill="#131318" stroke="#5a5852"/>
        <text x="450" y="73" text-anchor="middle" fill="#c9c6bd" font-size="12" font-family="'Spline Sans',sans-serif">Resale at $5.000</text>
        <path d="M450 88 L450 104" stroke="url(#p-goldbar)" stroke-width="2"/>
        <path d="M450 104 L390 104 L390 126" stroke="#7fc99a" stroke-width="2" fill="none" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.6s" fill="freeze"/></path>
        <path d="M450 104 L510 104 L510 126" stroke="#C8A96E" stroke-width="2" fill="none" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/></path>
        <rect x="346" y="130" width="88" height="54" rx="10" fill="#131318" stroke="#5a5852"/>
        <text x="390" y="151" text-anchor="middle" fill="#c9c6bd" font-size="11" font-family="'Spline Sans',sans-serif">Seller</text>
        <text x="390" y="169" text-anchor="middle" fill="#9a978f" font-size="10" font-family="'JetBrains Mono',monospace">the rest</text>
        <rect x="466" y="130" width="88" height="54" rx="10" fill="#2e2a1a" stroke="#C8A96E" stroke-width="1.6"/>
        <text x="510" y="151" text-anchor="middle" fill="#d9bf8a" font-size="11" font-family="'Spline Sans',sans-serif">Artist</text>
        <text x="510" y="169" text-anchor="middle" fill="#C8A96E" font-size="12" font-family="'JetBrains Mono',monospace">royalty</text>
        <text x="450" y="214" text-anchor="middle" fill="#7fc99a" font-size="11" font-family="'Spline Sans',sans-serif" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.6s" begin="1.3s" fill="freeze"/>Automatic · on-chain · perpetual</text>
      </svg>
      <svg viewBox="0 0 300 430" xmlns="http://www.w3.org/2000/svg" class="svg-mobile">
        <defs><linearGradient id="p-goldbar-v" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9bf8a"/><stop offset="1" stop-color="#C8A96E"/></linearGradient></defs>
        <text x="150" y="16" text-anchor="middle" fill="#c0563f" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="1">CURRENT MODEL</text>
        <rect x="55" y="26" width="190" height="36" rx="9" fill="#131318" stroke="#5a5852"/>
        <text x="150" y="49" text-anchor="middle" fill="#c9c6bd" font-size="12" font-family="'Spline Sans',sans-serif">Resale at $5.000</text>
        <line x1="150" y1="62" x2="150" y2="86" stroke="#5a5852" stroke-width="2"/><polygon points="150,90 145,82 155,82" fill="#5a5852"/>
        <rect x="80" y="92" width="140" height="50" rx="10" fill="#2e1a1a" stroke="#c0563f" stroke-width="1.6"/>
        <text x="150" y="112" text-anchor="middle" fill="#e08a72" font-size="12" font-family="'Spline Sans',sans-serif">The artist gets</text>
        <text x="150" y="133" text-anchor="middle" fill="#c0563f" font-size="19" font-family="'Fraunces',serif" font-weight="600">$0</text>

        <line x1="40" y1="168" x2="260" y2="168" stroke="#2a2a30" stroke-width="1" stroke-dasharray="3 4"/>
        <text x="150" y="196" text-anchor="middle" fill="#7fc99a" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="1">GROOVES MODEL</text>
        <rect x="55" y="206" width="190" height="36" rx="9" fill="#131318" stroke="#5a5852"/>
        <text x="150" y="229" text-anchor="middle" fill="#c9c6bd" font-size="12" font-family="'Spline Sans',sans-serif">Resale at $5.000</text>
        <path d="M150 242 L150 262" stroke="url(#p-goldbar-v)" stroke-width="2"/>
        <path d="M150 262 L90 262 L90 286" stroke="#7fc99a" stroke-width="2" fill="none" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.6s" fill="freeze"/></path>
        <path d="M150 262 L210 262 L210 286" stroke="#C8A96E" stroke-width="2" fill="none" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/></path>
        <rect x="46" y="290" width="88" height="50" rx="10" fill="#131318" stroke="#5a5852"/>
        <text x="90" y="311" text-anchor="middle" fill="#c9c6bd" font-size="11" font-family="'Spline Sans',sans-serif">Seller</text>
        <text x="90" y="328" text-anchor="middle" fill="#9a978f" font-size="10" font-family="'JetBrains Mono',monospace">the rest</text>
        <rect x="166" y="290" width="88" height="50" rx="10" fill="#2e2a1a" stroke="#C8A96E" stroke-width="1.6"/>
        <text x="210" y="311" text-anchor="middle" fill="#d9bf8a" font-size="11" font-family="'Spline Sans',sans-serif">Artist</text>
        <text x="210" y="328" text-anchor="middle" fill="#C8A96E" font-size="11" font-family="'JetBrains Mono',monospace">royalty</text>
        <text x="150" y="370" text-anchor="middle" fill="#7fc99a" font-size="11" font-family="'Spline Sans',sans-serif" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.6s" begin="1.3s" fill="freeze"/>Automatic · on-chain · perpetual</text>
      </svg>
      <div class="figure-cap">Fig. 2.2 — On every resale, the creator earns</div>
    </div>

    <p>Blockchain technology solves this programmatically: each time a work changes hands, a percentage defined by the artist returns automatically to their wallet, with no middlemen, written publicly and auditable by anyone on the blockchain, in perpetuity, with no private auditors. It is not a contractual promise — it is decentralized executable code that cannot be altered.</p>

  `
});

(function(){
  function runCounts(){
    document.querySelectorAll('.stat .big[data-count]').forEach(el=>{
      if(el.dataset.done) return; el.dataset.done='1';
      const target=parseInt(el.dataset.count,10); const dur=1400, t0=performance.now();
      function tick(now){ const p=Math.min(1,(now-t0)/dur); const cur=Math.floor(target*(1-Math.pow(1-p,3)));
        el.textContent=cur.toLocaleString('es'); if(p<1) requestAnimationFrame(tick); }
      requestAnimationFrame(tick);
    });
  }
  window.addEventListener('hashchange',()=>setTimeout(runCounts,80));
  window.addEventListener('DOMContentLoaded',()=>setTimeout(runCounts,250));
})();
