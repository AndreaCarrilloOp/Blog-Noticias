<script setup>
const route = useRoute()
const categoria = String(route.params.categoria)
const categorias = ['sucesos', 'deportes', 'espectaculos']
if (!categorias.includes(categoria)) {
  throw createError({ statusCode: 404, statusMessage: 'Categoría no encontrada' })
}
const { data: posts } = await useAsyncData(`categoria-${categoria}`, () => {
  return queryCollection('blog')
    .where('category', '=', categoria)
    .order('date', 'DESC')
    .select('path', 'title', 'description', 'date')
    .all()
})
useHead({
  title: categoria.charAt(0).toUpperCase() + categoria.slice(1),
  meta: [{ name: 'description', content: `Noticias nacionales de ${categoria}.` }]
})
</script>

<template>
  <main class="container">
    <p><NuxtLink to="/blog">← Todas las categorías</NuxtLink></p>
    <h1 class="capitalize">{{ categoria }}</h1>
    <ul v-if="posts?.length" class="post-list">
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path"><h2>{{ post.title }}</h2></NuxtLink>
        <p>{{ post.description }}</p>
        <p class="post-date">{{ post.date }}</p>
      </li>
    </ul>
    <p v-else>No hay noticias en esta categoría.</p>
  </main>
</template>
