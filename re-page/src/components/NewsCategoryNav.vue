<template>
  <div class="news-nav">
    <ThemedButton
      v-for="c in categories"
      :key="c"
      :color="c === currentCategory ? 'primary' : 'surface'"
      @click="setCategory(c)"
    >
      {{ c }}
    </ThemedButton>
  </div>
</template>

<script lang="ts">

import type { NewsCategory } from '@/stores/newsStore';
import ThemedButton from './ThemedButton.vue';

export default {
  name: 'NewsCategoryNav',
  components: { ThemedButton },
  props: {
    currentCategory: {
      type: String as () => NewsCategory,
      required: true
    }
  },
  data() {
    return {
      categories: ['All', 'Game', 'Collaboration', 'Movie', 'RE NET'] as NewsCategory[]
    }
  },
  methods: {
    setCategory(c: NewsCategory) {
      this.$emit('category-changed', c) 
    }
  }
}
</script>

<style scoped>
.news-nav {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>