<script setup>
defineProps({
  prev: { type: Object, default: null },
  next: { type: Object, default: null }
})
</script>

<template>
  <nav v-if="prev || next" class="prev-next" aria-label="Otras noticias de esta categoría">
    <NuxtLink v-if="prev" :to="prev.path" class="button">← {{ prev.title }}</NuxtLink>
    <NuxtLink v-if="next" :to="next.path" class="button">{{ next.title }} →</NuxtLink>
  </nav>
</template>
