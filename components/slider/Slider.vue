<script setup lang="ts">
import { h, useCssModule, type VNode } from 'vue';

const { items, itemsToShow = 1 } = defineProps<{
  items: VNode[];
  itemsToShow?: number;
}>();
const showNav = itemsToShow === 1;
const counter = 1;
const length = Math.ceil(items.length / itemsToShow);
const styles = useCssModule('slider');

const chunks: VNode[][] = [];
for (let i = 0; i < items.length; i += itemsToShow) {
  const chunk = items.slice(i, i + itemsToShow);
  chunks.push(chunk);
}

const inputs: VNode[] = Array.from({ length: items.length }, (_, i) =>
  h('input', {
    type: 'radio',
    name: `slider${counter}`,
    id: `slider${counter}_${i}`,
    defaultChecked: i === 0,
  }),
);

const slides: VNode[] = Array.from({ length }, (_, i) => {
  const prev = i - 1 < 0 ? length - 1 : i - 1;
  const next = i + 1 > length - 1 ? 0 : i + 1;

  return h('li', { key: i, class: styles.slider__item }, [
    ...chunks[i]?.map((item, index) => h('div', { key: index, class: styles[`slider__card${itemsToShow}`] }, h(item))),
    h('div', { class: styles.slider__ctrl }, [
      h('label', { for: `slider${counter}_${prev}`, class: styles.slider__ctrl_prev }),
      h('label', { for: `slider${counter}_${next}`, class: styles.slider__ctrl_next }),
    ]),
  ]);
});

const slidesMobile: VNode[] = Array.from({ length: items.length }, (_, i) => {
  const prev = i - 1 < 0 ? items.length - 1 : i - 1;
  const next = i + 1 > items.length - 1 ? 0 : i + 1;

  return h('li', { key: i, class: styles.slider__item }, [
    h('div', { class: styles.slider__card1 }, [items[i]]),
    h('div', { class: styles.slider__ctrl }, [
      h('label', { for: `slider${counter}_${prev}`, class: styles.slider__ctrl_prev }),
      h('label', { for: `slider${counter}_${next}`, class: styles.slider__ctrl_next }),
    ]),
  ]);
});

const navItems: VNode[] = Array.from({ length }, (_, i) =>
  h('li', { key: i, class: styles.slider__nav_item }, [h('label', { for: `slider${counter}_${i}` })]),
);
</script>

<template>
  <div :class="styles.slider" aria-label="Slider">
    <component v-for="item in inputs" :is="item" />
    <div v-if="length" :class="styles.slider__sides"></div>
    <div :class="styles.slider__sides_mobile"></div>
    <div :class="styles.slider__wrap">
      <div :class="styles.slider__container">
        <ul :class="styles.slider__list">
          <component v-for="item in slides" :is="item" />
        </ul>
        <ul :class="styles.slider__list_mobile">
          <component v-for="item in slidesMobile" :is="item" />
        </ul>
      </div>
    </div>
    <ul v-if="showNav" :class="styles.slider__nav">
      <component v-for="item in navItems" :is="item" />
    </ul>
  </div>
</template>

<style module="slider" src="./slider.css"></style>
