<template>
  <header :class="$style.header">
    <NuxtLink :class="$style.header__left" to="/">
      <div :class="$style.logo" />
      <h3 :class="$style.title">Monkey wrench</h3>
    </NuxtLink>
    <div>
      <Navigation />
    </div>
    <div :class="$style.header__right"></div>
  </header>
</template>

<script setup lang="ts"></script>

<style module>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color20);
  box-shadow: 0 2px black;
  z-index: 1;
}

.logo {
  height: 2.5rem;
  aspect-ratio: 1.875;
  background-image: url('./ship.webp');
  background-size: cover;
  background-repeat: no-repeat;
}

@media (max-width: 1200px) {
  .title {
    display: none;
  }
}

.header__left {
  width: calc(min(20rem, 24%));
  position: relative;
  height: 3rem;
  box-sizing: border-box;
  display: flex;
  column-gap: 1rem;
  padding: 0.75rem 1rem 0;
  color: inherit;
}
.header__left:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: calc(-0.75rem + 2px);
  width: calc(100% - 1.5rem);
  border-top: 0.75rem solid var(--color20);
  border-left: 0.75rem solid transparent;
  border-right: 0.75rem solid transparent;
  filter: drop-shadow(0px 2px rgba(0, 0, 0, 0.8));
}
.header__left:hover {
  color: inherit;
}

.header__right {
  width: calc(min(20rem, 24%));
}
</style>
