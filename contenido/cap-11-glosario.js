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
        <tr><td data-label="Término Grooves"><strong>Pressing</strong></td><td data-label="Equivalente">NFT / token digital</td><td data-label="Definición">Objeto digital autenticado que funciona como llave de acceso a una obra y a todo el mundo creativo vinculado a ella.</td></tr>
        <tr><td data-label="Término Grooves"><strong>Edition</strong></td><td data-label="Equivalente">Colección / supply</td><td data-label="Definición">El conjunto de Pressings de una obra específica.</td></tr>
        <tr><td data-label="Término Grooves"><strong>Sealed Edition</strong></td><td data-label="Equivalente">Edición limitada (ERC-721)</td><td data-label="Definición">Edition con cantidad fija e inmutable. Crea escasez y valor de colección.</td></tr>
        <tr><td data-label="Término Grooves"><strong>Open Edition</strong></td><td data-label="Equivalente">Edición flexible (ERC-1155)</td><td data-label="Definición">Edition con cantidad ajustable por el creador.</td></tr>
        <tr><td data-label="Término Grooves"><strong>Create</strong></td><td data-label="Equivalente">Mintear / acuñar</td><td data-label="Definición">El acto de registrar una obra en blockchain. Sin costo de plataforma para el artista.</td></tr>
        <tr><td data-label="Término Grooves"><strong>Pressing Studio</strong></td><td data-label="Equivalente">Mint Studio</td><td data-label="Definición">La interfaz donde el artista sube, configura y crea su obra.</td></tr>
        <tr><td data-label="Término Grooves"><strong>Bound Content</strong></td><td data-label="Equivalente">Token-gated content</td><td data-label="Definición">Todo el material y los accesos exclusivos vinculados al Pressing: archivos descargables y llaves a experiencias.</td></tr>
        <tr><td data-label="Término Grooves"><strong>USDC</strong></td><td data-label="Equivalente">Dólar digital</td><td data-label="Definición">Stablecoin respaldado 1:1 por el dólar. Moneda única de operación en Grooves.</td></tr>
        <tr><td data-label="Término Grooves"><strong>Wallet</strong></td><td data-label="Equivalente">Billetera digital</td><td data-label="Definición">Aplicación donde viven las llaves y los activos del usuario. En Grooves es siempre suya: se conecta con un clic, y la plataforma nunca la genera ni la custodia.</td></tr>
        <tr><td data-label="Término Grooves"><strong>Revenue Splits</strong></td><td data-label="Equivalente">Reparto de ingresos</td><td data-label="Definición">Distribución automática de pagos entre artista, productores y colaboradores (hasta 20 wallets), vía smart contract. Se aplica en venta y reventa, y puede tener porciones con fecha.</td></tr>
        <tr><td data-label="Término Grooves"><strong>Royalty</strong></td><td data-label="Equivalente">Regalía</td><td data-label="Definición">Porcentaje (5–15%) que el artista recibe automáticamente en cada reventa de su Pressing.</td></tr>
        <tr><td data-label="Término Grooves"><strong>EIP-2981</strong></td><td data-label="Equivalente">Estándar de royalties</td><td data-label="Definición">Protocolo que garantiza el pago automático de royalties en cada transacción on-chain.</td></tr>
        <tr><td data-label="Término Grooves"><strong>Splitter</strong></td><td data-label="Equivalente">Contrato repartidor</td><td data-label="Definición">Contrato propio de cada Edition que recibe las regalías de reventa y las reparte entre las wallets del equipo, según porcentajes fijos.</td></tr>
        <tr><td data-label="Término Grooves"><strong>Voucher</strong></td><td data-label="Equivalente">Autorización firmada</td><td data-label="Definición">Firma del backend que habilita crear un Pressing bajo las reglas de la plataforma; incluye el reparto, de modo que nadie puede alterar quién cobra.</td></tr>
        <tr><td data-label="Término Grooves"><strong>Anclar</strong></td><td data-label="Equivalente">Publicar on-chain</td><td data-label="Definición">Pasar una Edition de borrador a la blockchain. Antes de anclar todo es editable; después, el reparto y las reglas quedan fijos.</td></tr>
        <tr><td data-label="Término Grooves"><strong>Relayer</strong></td><td data-label="Equivalente">Gas en USDC</td><td data-label="Definición">Componente que registra la compra en blockchain por el usuario y adelanta el gas; el costo de red se le cobra en USDC, sin necesitar la criptomoneda nativa.</td></tr>
        <tr><td data-label="Término Grooves"><strong>Gas</strong></td><td data-label="Equivalente">Costo de red</td><td data-label="Definición">La comisión que cobra la blockchain por procesar una transacción. En Grooves el usuario no la paga en la moneda nativa de la red: se le cobra en USDC a través del relayer.</td></tr>
        <tr><td data-label="Término Grooves"><strong>URL firmada</strong></td><td data-label="Equivalente">Signed URL</td><td data-label="Definición">Enlace temporal y de un solo uso que entrega un archivo privado solo al dueño verificado, y que expira en minutos.</td></tr>
        <tr><td data-label="Término Grooves"><strong>KYC</strong></td><td data-label="Equivalente">Verificación de identidad</td><td data-label="Definición">Proceso por el que un usuario confirma su identidad para poder crear Pressings.</td></tr>
        <tr><td data-label="Término Grooves"><strong>Authenticity Engine</strong> <span class="rm-badge">Roadmap</span></td><td data-label="Equivalente">Content ID</td><td data-label="Definición">Motor de verificación de copyright que analizará audio y arte antes de la creación. En desarrollo.</td></tr>
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
        <tr><td data-label="Grooves term"><strong>Pressing</strong></td><td data-label="Equivalent">NFT / digital token</td><td data-label="Definition">An authenticated digital object that works as an access key to a work and the entire creative world bound to it.</td></tr>
        <tr><td data-label="Grooves term"><strong>Edition</strong></td><td data-label="Equivalent">Collection / supply</td><td data-label="Definition">The set of Pressings of a specific work.</td></tr>
        <tr><td data-label="Grooves term"><strong>Sealed Edition</strong></td><td data-label="Equivalent">Limited edition (ERC-721)</td><td data-label="Definition">An Edition with fixed, immutable quantity. Creates scarcity and collectible value.</td></tr>
        <tr><td data-label="Grooves term"><strong>Open Edition</strong></td><td data-label="Equivalent">Flexible edition (ERC-1155)</td><td data-label="Definition">An Edition with quantity adjustable by the creator.</td></tr>
        <tr><td data-label="Grooves term"><strong>Create</strong></td><td data-label="Equivalent">Mint</td><td data-label="Definition">The act of registering a work on the blockchain. No platform cost for the artist.</td></tr>
        <tr><td data-label="Grooves term"><strong>Pressing Studio</strong></td><td data-label="Equivalent">Mint Studio</td><td data-label="Definition">The interface where the artist uploads, configures and creates their work.</td></tr>
        <tr><td data-label="Grooves term"><strong>Bound Content</strong></td><td data-label="Equivalent">Token-gated content</td><td data-label="Definition">All the exclusive material and access bound to the Pressing: downloadable files and keys to experiences.</td></tr>
        <tr><td data-label="Grooves term"><strong>USDC</strong></td><td data-label="Equivalent">Digital dollar</td><td data-label="Definition">A stablecoin backed 1:1 by the US dollar. The sole operating currency on Grooves.</td></tr>
        <tr><td data-label="Grooves term"><strong>Wallet</strong></td><td data-label="Equivalent">Digital wallet</td><td data-label="Definition">The app where a user's keys and assets live. On Grooves it's always theirs: connected in one click, and the platform never generates or custodies it.</td></tr>
        <tr><td data-label="Grooves term"><strong>Revenue Splits</strong></td><td data-label="Equivalent">Revenue sharing</td><td data-label="Definition">Automatic distribution of payments among artist, producers and collaborators (up to 20 wallets), via smart contract. It applies on sale and resale, and shares can be time-limited.</td></tr>
        <tr><td data-label="Grooves term"><strong>Royalty</strong></td><td data-label="Equivalent">Royalty</td><td data-label="Definition">A percentage (5–15%) the artist automatically receives on every resale of their Pressing.</td></tr>
        <tr><td data-label="Grooves term"><strong>EIP-2981</strong></td><td data-label="Equivalent">Royalty standard</td><td data-label="Definition">A protocol guaranteeing automatic royalty payment on every on-chain transaction.</td></tr>
        <tr><td data-label="Grooves term"><strong>Splitter</strong></td><td data-label="Equivalent">Royalty splitter</td><td data-label="Definition">Each Edition's own contract that receives resale royalties and distributes them among the team's wallets, by fixed percentages.</td></tr>
        <tr><td data-label="Grooves term"><strong>Voucher</strong></td><td data-label="Equivalent">Signed authorization</td><td data-label="Definition">The backend's signature that enables creating a Pressing under the platform's rules; it includes the split, so no one can alter who gets paid.</td></tr>
        <tr><td data-label="Grooves term"><strong>Anchor</strong></td><td data-label="Equivalent">Publish on-chain</td><td data-label="Definition">Moving an Edition from draft to the blockchain. Before anchoring everything is editable; afterward, the split and the rules are fixed.</td></tr>
        <tr><td data-label="Grooves term"><strong>Relayer</strong></td><td data-label="Equivalent">Gas in USDC</td><td data-label="Definition">A component that records the purchase on the blockchain for the user and fronts the gas; the network cost is charged in USDC, with no need for the native cryptocurrency.</td></tr>
        <tr><td data-label="Grooves term"><strong>Gas</strong></td><td data-label="Equivalent">Network cost</td><td data-label="Definition">The fee the blockchain charges to process a transaction. On Grooves the user doesn't pay it in the network's native currency: it's charged in USDC through the relayer.</td></tr>
        <tr><td data-label="Grooves term"><strong>Signed URL</strong></td><td data-label="Equivalent">Signed URL</td><td data-label="Definition">A temporary, single-use link that delivers a private file only to the verified owner, and expires in minutes.</td></tr>
        <tr><td data-label="Grooves term"><strong>KYC</strong></td><td data-label="Equivalent">Identity verification</td><td data-label="Definition">The process by which a user confirms their identity in order to create Pressings.</td></tr>
        <tr><td data-label="Grooves term"><strong>Authenticity Engine</strong> <span class="rm-badge">Roadmap</span></td><td data-label="Equivalent">Content ID</td><td data-label="Definition">A copyright-verification engine that will analyze audio and art before creation. In development.</td></tr>
      </tbody>
    </table>

    <div class="callout note">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      <p>Terms marked <span class="rm-badge">Roadmap</span> describe capabilities that are part of Grooves' vision and will be incorporated in later phases. The rest of the vocabulary corresponds to features already live.</p>
    </div>

  `
});
