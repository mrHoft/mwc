<template>
  <div :class="$style.page">
    <h1 :class="$style.title">Palette</h1>
    <div v-for="i in 7" :key="i" :class="$style.block" :style="{ 'background-color': `var(--color${i - 1}0)` }">
      {{ i - 1 }}
    </div>
  </div>
</template>

<style module>
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 0.5rem;
}
.title {
  text-align: center;
  margin-bottom: 2rem;
}
.block {
  width: 10rem;
  height: 2rem;
}
</style>
