/* ============================================================
   CAPÍTULO 00 — PORTADA / HERO
   Discos entrelazados limpios (estilo logo del sidebar), girando.
   Sin partículas. Estética sobria y adulta.
   ============================================================ */
registerChapter('portada', {
  order: 0,
  es: `
    <div class="hero">
      <div class="hero-stage">
        <svg class="hero-discs" viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" aria-label="Grooves">
          <defs>
            <linearGradient id="h-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#e8d4a2"/><stop offset="50%" stop-color="#C8A96E"/><stop offset="100%" stop-color="#9a7f4e"/>
            </linearGradient>
          </defs>
          <!-- LEFT DISC (white) — clean, like the sidebar mark -->
          <g class="disc disc-left" style="transform-origin:108px 80px">
            <circle cx="108" cy="80" r="46" fill="none" stroke="#ece9e1" stroke-width="3.2"/>
            <circle cx="108" cy="80" r="31" fill="none" stroke="#ece9e1" stroke-width="1" opacity="0.35"/>
            <circle cx="108" cy="80" r="12" fill="#ece9e1"/>
          </g>
          <!-- RIGHT DISC (gold) -->
          <g class="disc disc-right" style="transform-origin:172px 80px">
            <circle cx="172" cy="80" r="46" fill="none" stroke="url(#h-gold)" stroke-width="3.2"/>
            <circle cx="172" cy="80" r="31" fill="none" stroke="#C8A96E" stroke-width="1" opacity="0.35"/>
            <circle cx="172" cy="80" r="12" fill="url(#h-gold)"/>
          </g>
        </svg>
      </div>

      <div class="hero-text">
        <div class="hero-kicker">White Paper · v3.0 · 2026</div>
        <h1 class="hero-title">GROOVES</h1>
        <p class="hero-tagline" style="text-align:center">Ecosistemas Creativos</p>
        <p class="hero-lead" style="text-align:center">Grooves son <strong>ecosistemas creativos</strong>. Un ideal hacia la revolución de la industria musical y creativa. La música se transforma en un <strong>objeto de valor transable</strong>, con propiedades no solo audibles, sino infinitas de acuerdo al artista y a lo que la obra busque.</p>
        <div class="hero-cta">
          <a class="hero-btn" onclick="goChapter('manifiesto')">Comenzar a leer →</a>
          <a class="hero-btn ghost" onclick="goChapter('solucion')">Qué es un Pressing</a>
        </div>
        <div class="hero-meta">
          <div class="hm-item"><span class="hm-k">Operativo</span><span class="hm-v">Mercado secundario · Bound Content · Royalties</span></div>
          <div class="hm-item"><span class="hm-k">Moneda</span><span class="hm-v">USDC · dinero real, sin especulación</span></div>
        </div>
      </div>
    </div>
  `,
  en: `
    <div class="hero">
      <div class="hero-stage">
        <svg class="hero-discs" viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" aria-label="Grooves">
          <defs><linearGradient id="h-gold-en" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e8d4a2"/><stop offset="50%" stop-color="#C8A96E"/><stop offset="100%" stop-color="#9a7f4e"/></linearGradient></defs>
          <g class="disc disc-left" style="transform-origin:108px 80px">
            <circle cx="108" cy="80" r="46" fill="none" stroke="#ece9e1" stroke-width="3.2"/>
            <circle cx="108" cy="80" r="31" fill="none" stroke="#ece9e1" stroke-width="1" opacity="0.35"/>
            <circle cx="108" cy="80" r="12" fill="#ece9e1"/>
          </g>
          <g class="disc disc-right" style="transform-origin:172px 80px">
            <circle cx="172" cy="80" r="46" fill="none" stroke="url(#h-gold-en)" stroke-width="3.2"/>
            <circle cx="172" cy="80" r="31" fill="none" stroke="#C8A96E" stroke-width="1" opacity="0.35"/>
            <circle cx="172" cy="80" r="12" fill="url(#h-gold-en)"/>
          </g>
        </svg>
      </div>
      <div class="hero-text">
        <div class="hero-kicker">White Paper · v3.0 · 2026</div>
        <h1 class="hero-title">GROOVES</h1>
        <p class="hero-tagline" style="text-align:center">Creative Ecosystems</p>
        <p class="hero-lead" style="text-align:center">Grooves is <strong>creative ecosystems</strong>. An ideal toward a revolution in the music and creative industries. Music becomes a <strong>tradable object of value</strong>, with properties that are not only audible but infinite, shaped by the artist and what each work seeks.</p>
        <div class="hero-cta">
          <a class="hero-btn" onclick="goChapter('manifiesto')">Start reading →</a>
          <a class="hero-btn ghost" onclick="goChapter('solucion')">What is a Pressing</a>
        </div>
        <div class="hero-meta">
          <div class="hm-item"><span class="hm-k">Live</span><span class="hm-v">Secondary market · Bound Content · Royalties</span></div>
          <div class="hm-item"><span class="hm-k">Currency</span><span class="hm-v">USDC · real money, no speculation</span></div>
        </div>
      </div>
    </div>
  `
});
