<script setup>
useHead({
  title: 'Categorías',
  meta: [{ name: 'description', content: 'Noticias nacionales de sucesos, deportes y espectáculos.' }]
})
</script>

<template>
  <main class="container">
    <h1>Categorías</h1>
    <AppSearchInput />
    <ul>
      <li>
        <NuxtLink to="/blog/sucesos">
          <h2>Sucesos</h2>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog/deportes">
          <h2>Deportes</h2>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog/espectaculos">
          <h2>Espectáculos</h2>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>
