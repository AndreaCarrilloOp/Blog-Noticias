# Blog de Noticias

[![Nuxt](https://img.shields.io/badge/Nuxt-4.5.2-00DC82?logo=nuxtdotjs\&logoColor=white)](https://nuxt.com/)
[![Nuxt Content](https://img.shields.io/badge/Nuxt%20Content-enabled-00DC82?logo=nuxtdotjs\&logoColor=white)](https://content.nuxt.com/)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify\&logoColor=white)](https://www.netlify.com/)
![Status](https://img.shields.io/badge/status-pending-lightgrey)

Blog de noticias nacionales desarrollado con **Nuxt 4** y **Nuxt Content** como parte de una actividad académica de Arquitectura de Información.

## Sitio

**Web desplegada:**
https://blog-noticias-cr.netlify.app

## Contenido

El blog contiene **nueve noticias nacionales**, distribuidas en tres categorías:

* Sucesos
* Deportes
* Espectáculos

Cada noticia incluye:

* Título.
* Fecha de publicación.
* Categoría.
* Autor.
* Biografía del autor.
* Imagen del autor.
* Contenido de la noticia.

## Implementación

El proyecto aplica los conceptos trabajados en clase:

* Contenido administrado mediante archivos Markdown.
* Colección definida en `content.config.ts`.
* Rutas automáticas mediante `app/pages`.
* Página principal del blog en `/blog`.
* Navegación interna con `NuxtLink`.
* Filtrado por categoría mediante `.where('category', '=', ...)`.
* Página dinámica para visualizar cada noticia.
* Navegación entre noticia anterior y siguiente con `queryCollectionItemSurroundings`.
* Navegación limitada a noticias de la misma categoría.
* Búsqueda global mediante `queryCollectionSearchSections`.
* Búsqueda sobre título y contenido de las noticias.
* Renderizado de contenido mediante `ContentRenderer`.
* Generación estática para publicación en Netlify.

## Estructura

```text
app/
├── components/
│   ├── AppSearchInput.vue
│   ├── Author.vue
│   └── PrevNext.vue
├── pages/
│   └── blog/
│       ├── index.vue
│       ├── [...slug].vue
│       └── [categoria]/
│           └── index.vue
└── app.vue

content/
└── blog/
    ├── sucesos/
    │   ├── 01.ataque-cartago.md
    │   ├── 02.ataque-orotina.md
    │   └── 03.incendio-alajuela.md
    ├── deportes/
    │   ├── 01.entidades-icoder.md
    │   ├── 02.retiro-bryan-oviedo.md
    │   └── 03.medallas-santo-domingo.md
    └── espectaculos/
        ├── 01.iconos-rock.md
        ├── 02.arjona-costa-rica.md
        └── 03.blessd-parque-viva.md

public/
└── images/
    └── authors/
        └── avatar.png

content.config.ts
nuxt.config.ts
netlify.toml
package.json
README.md
```

## Ejecución

Instalar las dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

Abrir en el navegador:

```text
http://localhost:3000/blog
```

## Generación estática

```bash
npm run generate
```

Los archivos generados se almacenan en:

```text
.output/public
```

## Despliegue

El proyecto está configurado para publicarse en **Netlify** desde el repositorio de GitHub.

```toml
[build]
  command = "npm run generate"
  publish = ".output/public"

[[redirects]]
  from = "/"
  to = "/blog"
  status = 302
```
