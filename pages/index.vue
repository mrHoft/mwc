<template>
  <div :class="styles.page">
    <h1 :class="styles.title">Monkey wrench characters</h1>
    <Slider :items="items" />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue';
import type { TCharacter, TResponse } from '~/types/characters';
const characters = useState<TResponse<TCharacter>>('characters');
const router = useRouter();
const styles = useCssModule('page');
const {
  public: { mediaUrl },
} = useRuntimeConfig();

const handleNavigate = (event: MouseEvent, id: number) => {
  event.preventDefault();
  router.push({ path: `/character/${id}` });
};

const items = characters.value.data
  .slice(0, 6)
  .map(item =>
    h(
      'a',
      { key: item.id, href: `/character/${item.id}`, class: styles.card, onClick: e => handleNavigate(e, item.id) },
      [
        h('img', { class: styles.card__image, src: `${mediaUrl}${item.cover.url}`, alt: item.name }),
        h('div', { class: styles.card__info }, [
          h('h2', { innerHTML: item.name }),
          h('div', { innerHTML: `<span>Gender: </span><i>${item.gender?.title}</i>` }),
          h('div', { innerHTML: `Species: ${item.species?.title}` }),
          h('p', { innerHTML: item.desc }),
        ]),
      ],
    ),
  );
</script>

<style module="page">
.page {
  min-height: calc(100dvh - 3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  text-align: center;
  margin-bottom: 2rem;
}
.card {
  position: relative;
  height: 100%;
  box-sizing: border-box;
  /* background-color: var(--color10); */
  border-radius: 1rem;
  padding: 1rem 2rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  gap: 1rem;
  color: var(--color100);
  border: 2px solid #000a;
}
.card:before {
  position: absolute;
  content: '';
  display: block;
  background-image: url('/bg.webp');
  background-repeat: no-repeat;
  background-size: cover;
  filter: invert(var(--color-scheme));
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.card:hover {
  color: var(--color100);
}
.card__image {
  aspect-ratio: 1;
  object-fit: contain;
}

@media (max-width: 840px) {
  .card__info {
    display: none;
  }
}
</style>
