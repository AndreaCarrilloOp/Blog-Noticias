<script setup>
defineProps({
  author: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="author">
    <img :src="author.image" :alt="author.name" width="40" height="40">
    <div>
      <h4>Autor</h4>
      <p>{{ author.name }}</p>
      <p>{{ author.bio }}</p>
    </div>
  </div>
</template>
