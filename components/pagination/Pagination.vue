<script setup lang="ts">
import { useCssModule } from 'vue';

const {
  page,
  total,
  pageSize = 10,
  onChange,
} = defineProps<{ page: number; total: number; pageSize?: number; onChange: (page: number) => void }>();

const styles = useCssModule('pagination');
const len = Math.ceil(total / pageSize);
const first = (() => {
  if (page < 3 || len <= 5) return 0;
  if (page + 2 >= len) return len - 5;
  return page - 2;
})();
const btns = Array.from({ length: Math.min(len, 5) }, (_, i) => first + i);

const leftClickHandler = () => {
  if (page > 0) onChange(page - 1);
};

const rightClickHandler = () => {
  if (page < len - 1) onChange(page + 1);
};
</script>

<template>
  <div v-if="total >= pageSize" :class="styles.pagination">
    <button :class="styles.pagination__slide" @click="leftClickHandler" :disabled="page === 0">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z" />
      </svg>
    </button>
    <div v-if="page >= 3 && len > 5">
      <button :class="styles.pagination__btn" @click="onChange(0)" :disabled="page === 0">1</button>
      <span v-if="first > 1" :class="styles.pagination__space">•••</span>
    </div>
    <button v-for="n in btns" :class="styles.pagination__btn" :key="n" @click="onChange(n)" :disabled="page === n">
      {{ n + 1 }}
    </button>
    <div v-if="page + 3 < len && len > 5">
      <span v-if="first + 4 < len" :class="styles.pagination__space">•••</span>
      <button :class="styles.pagination__btn" @click="onChange(len - 1)" :disabled="page === len - 1">{{ len }}</button>
    </div>
    <button :class="styles.pagination__slide" @click="rightClickHandler" :disabled="page === len - 1">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.172 12L8.222 7.04999L9.636 5.63599L16 12L9.636 18.364L8.222 16.95L13.172 12Z" />
      </svg>
    </button>
  </div>
</template>

<style module="pagination" src="./pagination.css"></style>
