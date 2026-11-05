<script setup>
const route = useRoute()
const { data: article } = await useAsyncData(`article-${route.path}`, () => {
  return queryCollection('blog').path(route.path).first()
})
if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artículo no encontrado' })
}
const { data: surround } = await useAsyncData(`surround-${route.path}`, () => {
  return queryCollectionItemSurroundings('blog', route.path)
    .where('category', '=', article.value.category)
    .order('date', 'DESC')
})
useHead({
  title: article.value.title,
  meta: [{ name: 'description', content: article.value.description }]
})
</script>

<template>
  <main class="container">
    <p><NuxtLink :to="`/blog/${article.category}`">← {{ article.category }}</NuxtLink></p>
    <article>
      <h1>{{ article.title }}</h1>
      <p class="post-date">{{ article.date }}</p>
      <p>{{ article.description }}</p>
      <ContentRenderer :value="article" />
      <Author :author="article.author" />
      <PrevNext :prev="surround?.[0]" :next="surround?.[1]" />
    </article>
  </main>
</template>
