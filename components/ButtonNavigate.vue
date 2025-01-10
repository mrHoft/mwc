<template>
  <NuxtLink :to="to" :class="$style.button">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const { to = '/' } = defineProps<{ to: string }>();
</script>

<style module>
.button {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.25rem 2rem;
  background-color: var(--color30);
  color: var(--color100);
  transition: background-color 0.25s linear;
  border: 2px solid #000a;
}
.button:before {
  content: '';
  position: absolute;
  top: -1px;
  left: -0.25rem;
  height: calc(100% - 0.5rem + 2px);
  border-right: 0.25rem solid var(--color30);
  border-top: 0.25rem solid transparent;
  border-bottom: 0.25rem solid transparent;
  filter: drop-shadow(-2px 0 #000a);
  transition: border-color 0.25s linear;
}
.button:after {
  content: '';
  position: absolute;
  right: -1px;
  bottom: -0.25rem;
  width: 40%;
  border-top: 0.25rem solid var(--color30);
  border-left: 0.25rem solid transparent;
  border-right: 0.25rem solid transparent;
  filter: drop-shadow(0 2px #000a);
  transition: border-color 0.25s linear;
}
.button:hover {
  color: var(--color100);
  background-color: var(--color40);
}
.button:hover:before {
  border-right-color: var(--color40);
}
.button:hover:after {
  border-top-color: var(--color40);
}
</style>
