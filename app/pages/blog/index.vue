<script setup>
useHead({
  title: 'Blog',
  meta: [{ name: 'description', content: 'Noticias nacionales de sucesos, deportes y espectáculos.' }]
})
</script>

<template>
  <main class="container">
    <h1>Blog de noticias</h1>
    <AppSearchInput />
    <h2>Categorías</h2>
    <ul class="category-links">
      <li><NuxtLink to="/blog/sucesos">Sucesos</NuxtLink></li>
      <li><NuxtLink to="/blog/deportes">Deportes</NuxtLink></li>
      <li><NuxtLink to="/blog/espectaculos">Espectáculos</NuxtLink></li>
    </ul>
  </main>
</template>
