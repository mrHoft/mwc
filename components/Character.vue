<template>
  <a
    :class="[small ? $style.card_small : $style.card, 'frame']"
    :href="`/character/${item.id}`"
    @click="handleNavigate($event, item.id)"
  >
    <img :class="$style.cover" :src="src" alt="cover" />
    <h3>{{ item.name }}</h3>
    <div>
      <span>Gender: </span><i>{{ item.gender.title }}</i>
    </div>
    <div>
      {{ `Species: ${item.species?.title}` }}
    </div>
    <p v-for="(desc, i) in item.desc.split('\n')" :class="$style.desc">{{ desc }}</p>
  </a>
</template>

<script setup lang="ts">
import type { TCharacter } from '~/types/characters';
const router = useRouter();
const {
  public: { mediaUrl },
} = useRuntimeConfig();

const { item, small = true } = defineProps<{ item: TCharacter; small?: Boolean }>();
const src = `${mediaUrl}${item.cover.url}`;

const handleNavigate = (e: Event, id: number) => {
  e.preventDefault();
  if (!small) return;
  router.push({ path: `/character/${id}` });
};
</script>

<style module>
.card {
  max-width: 30rem;
  pointer-events: none;
}
.card_small {
  flex: 0 0 14rem;
}

.cover {
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
}

.desc {
  overflow: hidden;
  margin-bottom: 0;
}
.card_small .desc {
  max-height: 4lh;
}
</style>
