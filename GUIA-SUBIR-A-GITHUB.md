# Cómo subir el nuevo White Paper a GitHub (grooves-docs)

Este paquete reemplaza el sitio Docsify viejo por el nuevo White Paper v3.0
(bilingüe, con gráficas animadas).

## Qué contiene este paquete
- index.html          → el sitio (diseño, navegación, idiomas)
- contenido/          → los 12 capítulos (editás el texto acá)
- assets/             → logos e imágenes
- CNAME               → tu dominio (docs.grooves.art) — NO BORRAR
- .nojekyll           → necesario para GitHub Pages — NO BORRAR

## PASO A PASO (la forma más simple, por la web de GitHub)

1. Entrá a https://github.com/groovesart/grooves-docs

2. BORRAR lo viejo (los .md del Docsify):
   - Borrá estos archivos del repo (uno por uno, con el ícono de papelera):
     README.md, _sidebar.md, manifiesto.md, vision.md, el-problema.md,
     la-solucion.md, modelo-economico.md, arquitectura-tecnica.md,
     roadmap.md, glosario.md, index.html (el viejo)
   - NO borres: la carpeta assets/, CNAME, .nojekyll

3. SUBIR lo nuevo:
   - Clic en "Add file" → "Upload files"
   - Arrastrá: index.html, la carpeta contenido/ completa
   - (assets/, CNAME y .nojekyll ya están — si querés, subí los de este paquete encima)
   - Escribí abajo: "White Paper v3.0 — bilingüe + gráficas"
   - Clic en "Commit changes"

4. ESPERAR 1-2 minutos y entrar a https://docs.grooves.art
   - Si ves el sitio nuevo con la portada de los discos → ¡listo!
   - Si ves el viejo, esperá un par de minutos más (GitHub Pages tarda).

## Para EDITAR el texto después
- Entrá a contenido/ → abrí el capítulo (ej. cap-04-bound-content.js)
- El texto está adentro, entre comillas. Editás, guardás (commit). Listo.
