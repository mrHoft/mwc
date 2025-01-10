<template>
  <Header />
  <main>
    <slot />
  </main>
  <!-- <AppFooter /> -->
</template>

<style>
@import url('~/styles/styles.css');

body:before {
  content: '';
  position: absolute;
  display: block;
  background-image: url('./service_bay.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #234;
  filter: invert(var(--color-scheme));
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100dvh;
  z-index: 0;
}
</style>
