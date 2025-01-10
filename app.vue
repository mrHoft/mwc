<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const characters = useState('characters');

await callOnce(async () => {
  characters.value = await $fetch('/api/characters');
});
</script>
