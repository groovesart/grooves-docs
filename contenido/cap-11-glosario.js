/* ============================================================
   GLOSARIO
   Tabla del autor adaptada al MVP. Términos roadmap marcados.
   ============================================================ */
registerChapter('glosario', {
  order: 11,
  es: `
    <div class="ch-eyebrow">
      <span class="num">GLOSARIO</span>
      <span class="rule"></span>
    </div>

    <h1 class="ch-title">El lenguaje de <em>Grooves</em></h1>
    <p class="ch-lead">Grooves usa un vocabulario propio, pensado para que cualquier persona —venga o no del mundo cripto— entienda de qué se trata. Esta es la traducción.</p>

    <table>
      <thead><tr><th>Término Grooves</th><th>Equivalente</th><th>Definición</th></tr></thead>
      <tbody>
        <tr><td><strong>Pressing</strong></td><td>NFT / token digital</td><td>Objeto digital autenticado que funciona como llave de acceso a una obra y a todo el mundo creativo vinculado a ella.</td></tr>
        <tr><td><strong>Edition</strong></td><td>Colección / supply</td><td>El conjunto de Pressings de una obra específica.</td></tr>
        <tr><td><strong>Sealed Edition</strong></td><td>Edición limitada (ERC-721)</td><td>Edition con cantidad fija e inmutable. Crea escasez y valor de colección.</td></tr>
        <tr><td><strong>Open Edition</strong></td><td>Edición flexible (ERC-1155)</td><td>Edition con cantidad ajustable por el creador.</td></tr>
        <tr><td><strong>Create</strong></td><td>Mintear / acuñar</td><td>El acto de registrar una obra en blockchain. Sin costo de plataforma para el artista.</td></tr>
        <tr><td><strong>Pressing Studio</strong></td><td>Mint Studio</td><td>La interfaz donde el artista sube, configura y crea su obra.</td></tr>
        <tr><td><strong>Bound Content</strong></td><td>Token-gated content</td><td>Todo el material y los accesos exclusivos vinculados al Pressing: archivos descargables y llaves a experiencias.</td></tr>
        <tr><td><strong>USDC</strong></td><td>Dólar digital</td><td>Stablecoin respaldado 1:1 por el dólar. Moneda única de operación en Grooves.</td></tr>
        <tr><td><strong>Wallet</strong></td><td>Billetera digital</td><td>Aplicación donde viven las llaves y los activos del usuario. En Grooves es siempre suya: se conecta con un clic, y la plataforma nunca la genera ni la custodia.</td></tr>
        <tr><td><strong>Revenue Splits</strong></td><td>Reparto de ingresos</td><td>Distribución automática de pagos entre artista, productores y colaboradores, vía smart contract.</td></tr>
        <tr><td><strong>Royalty</strong></td><td>Regalía</td><td>Porcentaje (5–15%) que el artista recibe automáticamente en cada reventa de su Pressing.</td></tr>
        <tr><td><strong>EIP-2981</strong></td><td>Estándar de royalties</td><td>Protocolo que garantiza el pago automático de royalties en cada transacción on-chain.</td></tr>
        <tr><td><strong>Relayer</strong></td><td>Pago sin gas</td><td>Componente que registra la compra en blockchain por el usuario, para que no necesite la criptomoneda nativa de la red.</td></tr>
        <tr><td><strong>Gasless</strong></td><td>Sin comisión de red</td><td>Experiencia de compra donde el usuario no paga ni gestiona el "gas" de la transacción.</td></tr>
        <tr><td><strong>URL firmada</strong></td><td>Signed URL</td><td>Enlace temporal y de un solo uso que entrega un archivo privado solo al dueño verificado, y que expira en minutos.</td></tr>
        <tr><td><strong>KYC</strong></td><td>Verificación de identidad</td><td>Proceso por el que un usuario confirma su identidad para poder crear Pressings.</td></tr>
        <tr><td><strong>Authenticity Engine</strong> <span class="rm-badge">Roadmap</span></td><td>Content ID</td><td>Motor de verificación de copyright que analizará audio y arte antes de la creación. En desarrollo.</td></tr>
        <tr><td><strong>Referral</strong> <span class="rm-badge">Roadmap</span></td><td>Sistema de referidos</td><td>Comisión para quien refiere a un comprador mediante su enlace. En desarrollo.</td></tr>
        <tr><td><strong>Fiat On-Ramp</strong> <span class="rm-badge">Roadmap</span></td><td>Pasarela de pago</td><td>Servicio que convertirá dinero de tarjeta o PayPal a USDC en la wallet conectada del usuario, automáticamente. En desarrollo.</td></tr>
      </tbody>
    </table>

    <div class="callout note">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      <p>Los términos marcados como <span class="rm-badge">Roadmap</span> describen capacidades que forman parte de la visión de Grooves y se incorporarán en fases posteriores. El resto del vocabulario corresponde a funcionalidades ya operativas.</p>
    </div>
  `,
  en: `
    <div class="ch-eyebrow">
      <span class="num">GLOSSARY</span>
      <span class="rule"></span>
    </div>

    <h1 class="ch-title">The language of <em>Grooves</em></h1>
    <p class="ch-lead">Grooves uses its own vocabulary, designed so anyone — whether or not they come from the crypto world — understands what it's about. Here's the translation.</p>

    <table>
      <thead><tr><th>Grooves term</th><th>Equivalent</th><th>Definition</th></tr></thead>
      <tbody>
        <tr><td><strong>Pressing</strong></td><td>NFT / digital token</td><td>An authenticated digital object that works as an access key to a work and the entire creative world bound to it.</td></tr>
        <tr><td><strong>Edition</strong></td><td>Collection / supply</td><td>The set of Pressings of a specific work.</td></tr>
        <tr><td><strong>Sealed Edition</strong></td><td>Limited edition (ERC-721)</td><td>An Edition with fixed, immutable quantity. Creates scarcity and collectible value.</td></tr>
        <tr><td><strong>Open Edition</strong></td><td>Flexible edition (ERC-1155)</td><td>An Edition with quantity adjustable by the creator.</td></tr>
        <tr><td><strong>Create</strong></td><td>Mint</td><td>The act of registering a work on the blockchain. No platform cost for the artist.</td></tr>
        <tr><td><strong>Pressing Studio</strong></td><td>Mint Studio</td><td>The interface where the artist uploads, configures and creates their work.</td></tr>
        <tr><td><strong>Bound Content</strong></td><td>Token-gated content</td><td>All the exclusive material and access bound to the Pressing: downloadable files and keys to experiences.</td></tr>
        <tr><td><strong>USDC</strong></td><td>Digital dollar</td><td>A stablecoin backed 1:1 by the US dollar. The sole operating currency on Grooves.</td></tr>
        <tr><td><strong>Wallet</strong></td><td>Digital wallet</td><td>The app where a user's keys and assets live. On Grooves it's always theirs: connected in one click, and the platform never generates or custodies it.</td></tr>
        <tr><td><strong>Revenue Splits</strong></td><td>Revenue sharing</td><td>Automatic distribution of payments among artist, producers and collaborators, via smart contract.</td></tr>
        <tr><td><strong>Royalty</strong></td><td>Royalty</td><td>A percentage (5–15%) the artist automatically receives on every resale of their Pressing.</td></tr>
        <tr><td><strong>EIP-2981</strong></td><td>Royalty standard</td><td>A protocol guaranteeing automatic royalty payment on every on-chain transaction.</td></tr>
        <tr><td><strong>Relayer</strong></td><td>Gasless payment</td><td>A component that records the purchase on the blockchain for the user, so they don't need the network's native cryptocurrency.</td></tr>
        <tr><td><strong>Gasless</strong></td><td>No network fee</td><td>A buying experience where the user neither pays nor manages the transaction's "gas."</td></tr>
        <tr><td><strong>Signed URL</strong></td><td>Signed URL</td><td>A temporary, single-use link that delivers a private file only to the verified owner, and expires in minutes.</td></tr>
        <tr><td><strong>KYC</strong></td><td>Identity verification</td><td>The process by which a user confirms their identity in order to create Pressings.</td></tr>
        <tr><td><strong>Authenticity Engine</strong> <span class="rm-badge">Roadmap</span></td><td>Content ID</td><td>A copyright-verification engine that will analyze audio and art before creation. In development.</td></tr>
        <tr><td><strong>Referral</strong> <span class="rm-badge">Roadmap</span></td><td>Referral system</td><td>A commission for whoever refers a buyer through their link. In development.</td></tr>
        <tr><td><strong>Fiat On-Ramp</strong> <span class="rm-badge">Roadmap</span></td><td>Payment gateway</td><td>A service that will convert card or PayPal money to USDC in the user's connected wallet, automatically. In development.</td></tr>
      </tbody>
    </table>

    <div class="callout note">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      <p>Terms marked <span class="rm-badge">Roadmap</span> describe capabilities that are part of Grooves' vision and will be incorporated in later phases. The rest of the vocabulary corresponds to features already live.</p>
    </div>

  `
});
