<script setup>
defineProps({
  prev: { type: Object, default: null },
  next: { type: Object, default: null }
})
</script>

<template>
  <div class="flex justify-between">
    <NuxtLink v-if="prev" :to="prev.path" class="button">← {{ prev.title }}</NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink v-if="next" :to="next.path" class="button">{{ next.title }} →</NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>
