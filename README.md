# Portafolio 2026 — Daniela Niembro

Sitio web de portafolio personal. Estático, sin build, sin dependencias de servidor.
Multipágina: una portada/home y seis páginas de disciplina.

## Cómo subirlo a GitHub (para Claude Code)

Este directorio **ES el repositorio**. Es un sitio estático listo para publicar — no hay
paso de build ni `npm install`. Para desplegarlo:

```bash
git init
git add .
git commit -m "Portafolio 2026 — sitio estático"
git branch -M main
git remote add origin <URL_DEL_REPO>
git push -u origin main
```

### GitHub Pages
1. En el repo → **Settings → Pages**.
2. **Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. La home se sirve desde `index.html` automáticamente.
4. El archivo `.nojekyll` ya está incluido para que Pages no procese nada y sirva los
   archivos tal cual.

Cualquier host estático funciona igual (Netlify, Vercel, Cloudflare Pages): apuntar al
root del repo, sin comando de build, directorio de salida = root.

## Estructura

```
index.html          Portada / home (nav, portada, sobre mí, lista de disciplinas, contacto)
diseno.html         Disciplina 01 · Diseño
fotografia.html     Disciplina 02 · Fotografía
contenido.html      Disciplina 03 · Contenido
guion.html          Disciplina 04 · Guion
edicion.html        Disciplina 05 · Edición
produccion.html     Disciplina 06 · Producción
disciplina.css      Estilos compartidos de las 6 páginas de disciplina
disciplina.js       Comportamiento compartido de las páginas de disciplina
image-slot.js       Componente <image-slot> (placeholders de imagen arrastrables)
.nojekyll           Desactiva el procesamiento Jekyll en GitHub Pages
```

Los nombres de archivo se normalizaron a ASCII en minúsculas (sin espacios ni acentos)
para tener URLs limpias en Pages. Todos los enlaces internos ya apuntan a los nombres
nuevos — no hace falta tocar nada.

## Tipografía y assets externos
- Fuentes vía Google Fonts: **Archivo** (sans) y **Space Mono** (mono), cargadas con
  `<link>` desde `fonts.googleapis.com`. Requiere conexión a internet en runtime.
- No hay imágenes binarias en el repo (ver nota abajo).

## ⚠️ Importante: las imágenes no están incluidas
El sitio usa el componente `<image-slot>`: cada hueco de imagen (la foto de "Sobre mí",
las galerías de cada disciplina, los previews de programas) es un **placeholder donde la
usuaria arrastra su propia imagen**. Las imágenes arrastradas se guardan en el
`localStorage` del navegador, **no como archivos** — por eso no viajan en el repo y no
aparecerán al abrir el sitio publicado en otro dispositivo.

Para un sitio público con imágenes reales hay que reemplazar los `<image-slot>` por
imágenes reales: añadir los archivos (p. ej. en una carpeta `assets/`) y cambiar cada
`<image-slot id="..." placeholder="..."></image-slot>` por un `<img src="assets/...">`
con el mismo encuadre/recorte. Cada slot tiene un `id` descriptivo que indica qué imagen
le corresponde.

## Notas de implementación
- Todo el CSS y JS de la home está inline en `index.html`. Las páginas de disciplina
  comparten `disciplina.css` y `disciplina.js`.
- Interacciones: ticker animado en la portada, anillo de texto orbital en "Sobre mí",
  preview de imagen que sigue al cursor sobre la lista de programas, lupa que sigue al
  cursor y resalta filas en la lista de disciplinas.
- No hay analytics, cookies ni llamadas a APIs externas (salvo Google Fonts).
