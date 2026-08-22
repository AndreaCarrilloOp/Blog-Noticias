<script setup>
const route = useRoute()

const { data: posts } = await useAsyncData(`categoria-${route.params.categoria}`, () => {
  return queryCollection('blog')
    .where('category', '=', route.params.categoria)
    .order('date', 'DESC')
    .select('path', 'title', 'description', 'date')
    .all()
})
</script>

<template>
  <div class="container">
    <p>
      <NuxtLink to="/blog">
        ← Volver al blog
      </NuxtLink>
    </p>

    <h1 class="capitalize">{{ route.params.categoria }}</h1>
    <ul>
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
