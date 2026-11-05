<script setup>
const searchQuery = ref('')

// Nuxt Content indexa secciones del texto, incluidos sus encabezados.
const { data: sections } = await useAsyncData('search-sections', () =>
  queryCollectionSearchSections('blog')
)

// El título del frontmatter se consulta por separado para buscarlo con precisión.
const { data: articles } = await useAsyncData('search-articles', () =>
  queryCollection('blog').select('path', 'title').all()
)

const normalize = (value) => String(value ?? '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase('es')

const results = computed(() => {
  const term = normalize(searchQuery.value.trim())
  if (!term) return []

  const matchingPaths = new Set()

  for (const section of sections.value ?? []) {
    if (normalize(section.title).includes(term) || normalize(section.content).includes(term)) {
      matchingPaths.add(section.path)
    }
  }

  // Una noticia aparece una sola vez, usando el título real del Markdown.
  return (articles.value ?? [])
    .filter(article =>
      matchingPaths.has(article.path) || normalize(article.title).includes(term)
    )
    .slice(0, 9)
})
</script>

<template>
  <div class="search-box" role="search">
    <label for="buscar-noticia">Buscar noticias</label>
    <input
      id="buscar-noticia"
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Buscar en títulos y contenido"
    >

    <ul v-if="results.length" class="search-results" aria-label="Noticias encontradas">
      <li v-for="result in results" :key="result.path">
        <NuxtLink :to="result.path">{{ result.title }}</NuxtLink>
      </li>
    </ul>
    <p v-else-if="searchQuery.trim()">No se encontraron coincidencias.</p>
  </div>
</template>
