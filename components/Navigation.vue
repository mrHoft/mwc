<template>
  <nav>
    <ul :class="$style.menu">
      <li v-for="(item, i) in menu" ref="i">
        <NuxtLink :to="item.url">{{ item.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const menu = [
  { title: 'Home', url: '/' },
  { title: 'Characters', url: '/characters' },
  { title: 'About', url: '/about' },
];
</script>

<style module>
.menu {
  display: flex;
  column-gap: 1rem;
}
</style>
