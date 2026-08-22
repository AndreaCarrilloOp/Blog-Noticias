<script setup>
const searchQuery = ref('')

const { data: sections } = await useAsyncData('search-sections', () => {
  return queryCollectionSearchSections('blog')
})

const results = computed(() => {
  if (!searchQuery.value) return []
  const q = searchQuery.value.toLowerCase()
  return (sections.value || [])
    .filter(section =>
      section.title?.toLowerCase().includes(q) ||
      section.content?.toLowerCase().includes(q)
    )
    .slice(0, 8)
})
</script>

<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Buscar artículos"
    >
    <ul v-if="results.length">
      <li v-for="result in results" :key="result.id">
        <NuxtLink :to="result.path">{{ result.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
