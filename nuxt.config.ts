export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  modules: ['@nuxt/content'],
  app: {
    head: {
      titleTemplate: '%s - Blog de Noticias',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Noticias nacionales organizadas por categoría con Nuxt Content.' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,300,600' },
        { rel: 'stylesheet', href: '/css/normalize.css' },
        { rel: 'stylesheet', href: '/css/skeleton.css' }
      ]
    }
  }
})
