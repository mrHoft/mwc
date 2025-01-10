<template>
  <div :class="$style.page">
    <h1 :class="$style.title">Characters</h1>
    <div :class="$style.cards">
      <Character v-for="item in items()" :key="item.id" :item="item" />
    </div>
    <Pagination :page="page" :total="total" :page-size="6" @change="handlePageChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TCharacter, TResponse } from '~/types/characters';

const characters = useState<TResponse<TCharacter>>('characters');
const {
  data,
  meta: {
    pagination: { total },
  },
} = characters.value;
const page = ref(0);
const items = () => data.slice(page.value * 6, page.value * 6 + 6);

const handlePageChange = (n: number) => {
  page.value = n;
};
</script>

<style module>
.page {
  min-height: calc(100dvh - 3rem);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  text-align: center;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  max-width: 45rem;
}
</style>
