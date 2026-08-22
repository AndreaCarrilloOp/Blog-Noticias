<script setup>
const route = useRoute()

const { data: article } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Artículo no encontrado'
  })
}

const { data: surround } = await useAsyncData(`surround-${route.path}`, () => {
  return queryCollectionItemSurroundings('blog', route.path)
    .where('category', '=', article.value?.category)
    .order('date', 'DESC')
})
</script>

<template>
  <article class="container">
    <p>
      <NuxtLink :to="`/blog/${article.category}`">
        ← Volver a {{ article.category }}
      </NuxtLink>
    </p>

    <h1>{{ article.title }}</h1>

    <p><strong>Categoría:</strong> {{ article.category }}</p>

    <ContentRenderer :value="article" />
    <Author :author="article.author" />

    <PrevNext :prev="surround?.[0]" :next="surround?.[1]" />
  </article>
</template>
