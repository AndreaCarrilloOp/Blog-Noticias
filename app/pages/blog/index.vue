<template>
  <div class="container">
    <h1>Blog de noticias</h1>
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
  </div>
</template>
