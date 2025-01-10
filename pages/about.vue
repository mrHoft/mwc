<template>
  <section :class="$style.page">
    <h1 :class="$style.title">About</h1>
    <div :class="$style.content">
      <p>Educational project.</p>
      <p>Generated as SPA for easyer deployment.</p>
      <h3>Stack:</h3>
      <ul>
        <li>Vue 3 (Composition API)</li>
        <li>Nuxt 3 (SSR)</li>
        <li>Strapi CMS (CRUD REST api)</li>
        <li>PostgreSQL</li>
        <li>TepeScript</li>
      </ul>
      <h3>Custom Vue components:</h3>
      <ul>
        <li>Slider</li>
        <li>Pagination</li>
        <li>ButtonNavigate</li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style module>
.page {
  padding: 3rem 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  text-align: center;
}
.content {
  width: fit-content;
}
.content ul {
  list-style-type: disc;
}
</style>
