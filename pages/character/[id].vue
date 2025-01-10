<script setup lang="ts">
import ButtonNavigate from '~/components/ButtonNavigate.vue';
import type { TCharacter, TResponse } from '~/types/characters';
const route = useRoute();
const id = Number(route.params.id) ?? 0;
const characters = useState<TResponse<TCharacter>>('characters');
const item = characters.value.data.find(item => item.id === id);
</script>

<template>
  <div :class="$style.page">
    <Character v-if="item" :item="item" :small="false" />
    <div :class="$style.btns">
      <ButtonNavigate to="/characters">{{ '\u2190' }} Characters</ButtonNavigate>
    </div>
  </div>
</template>

<style module>
.page {
  min-height: calc(100dvh - 3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btns {
  margin-top: 1.5rem;
}
</style>
