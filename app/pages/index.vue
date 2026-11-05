<script setup>
// La página principal del blog es /blog; evitamos mantener dos inicios.
await navigateTo('/blog', { redirectCode: 301 })
</script>
