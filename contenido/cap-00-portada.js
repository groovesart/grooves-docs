/* ============================================================
   CAPÍTULO 00 — PORTADA / HERO
   Discos entrelazados limpios (estilo logo del sidebar), girando.
   Sin partículas. Estética sobria y adulta.
   ============================================================ */
registerChapter('portada', {
  order: 0,
  es: `
    <style>
      .cta-enter{position:relative;display:inline-flex;align-items:center;gap:14px;font-family:'Spline Sans',sans-serif;font-size:.82rem;font-weight:600;letter-spacing:.24em;text-transform:uppercase;color:#C8A96E;text-decoration:none;cursor:pointer;padding:16px 32px;border:1px solid rgba(200,169,110,0.45);border-radius:3px;overflow:hidden;isolation:isolate;transition:color .4s ease,border-color .4s ease,box-shadow .4s ease}
      .cta-enter::before{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,#d9bf8a,#C8A96E);transform:translateX(-101%);transition:transform .45s cubic-bezier(.4,0,.2,1)}
      .cta-enter:hover{color:#15110a;border-color:#C8A96E;box-shadow:0 12px 34px rgba(200,169,110,0.18)}
      .cta-enter:hover::before{transform:translateX(0)}
      .cta-enter .cta-arrow{transition:transform .4s ease;font-family:'JetBrains Mono',monospace}
      .cta-enter:hover .cta-arrow{transform:translateX(6px)}
    </style>
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
          <a class="cta-enter" onclick="goChapter('manifiesto')"><span>Comenzar a leer</span><span class="cta-arrow">→</span></a>
        </div>
      </div>
    </div>
  `,
  en: `
    <style>
      .cta-enter{position:relative;display:inline-flex;align-items:center;gap:14px;font-family:'Spline Sans',sans-serif;font-size:.82rem;font-weight:600;letter-spacing:.24em;text-transform:uppercase;color:#C8A96E;text-decoration:none;cursor:pointer;padding:16px 32px;border:1px solid rgba(200,169,110,0.45);border-radius:3px;overflow:hidden;isolation:isolate;transition:color .4s ease,border-color .4s ease,box-shadow .4s ease}
      .cta-enter::before{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,#d9bf8a,#C8A96E);transform:translateX(-101%);transition:transform .45s cubic-bezier(.4,0,.2,1)}
      .cta-enter:hover{color:#15110a;border-color:#C8A96E;box-shadow:0 12px 34px rgba(200,169,110,0.18)}
      .cta-enter:hover::before{transform:translateX(0)}
      .cta-enter .cta-arrow{transition:transform .4s ease;font-family:'JetBrains Mono',monospace}
      .cta-enter:hover .cta-arrow{transform:translateX(6px)}
    </style>
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
          <a class="cta-enter" onclick="goChapter('manifiesto')"><span>Start reading</span><span class="cta-arrow">→</span></a>
        </div>
      </div>
    </div>
  `
});
