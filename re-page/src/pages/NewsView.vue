<template>
  <v-container>
    <h1 class="mb-6">Articles</h1>
    <div class="d-flex sort-buttons align-center mb-4">
      <ThemedButton :color="store.sortOrder === 'newest' ? 'primary' : 'surface'"
      @click="setSort('newest')" >Newest</ThemedButton>

      <ThemedButton :color="store.sortOrder === 'oldest' ? 'primary' : 'surface'"
      @click="setSort('oldest')" >Oldest</ThemedButton>
    </div>

    <NewsCategoryNav
      :currentCategory="store.selectedCategory"
      @category-changed="changeCategory"
    />

    <v-row class="mt-6">
      <v-col
        v-for="article in store.filteredArticles"
        :key="article.id"
        cols="6"
        sm="4"
        md="4"
      >
        <ArticleCard :article="article" @open="openArticle(article)" />
      </v-col>
    </v-row>

    <ArticleOverlay v-model="overlay" :article="selectedArticle" />
  </v-container>
</template>

<script lang="ts">
import NewsCategoryNav from '@/components/NewsCategoryNav.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import ArticleOverlay from '@/components/ArticleOverlay.vue'
import { useNewsStore, type Article, type NewsCategory } from '@/stores/newsStore'
import ThemedButton from '@/components/ThemedButton.vue';

export default {
  name: 'NewsView',
  components: { NewsCategoryNav, ArticleCard, ArticleOverlay, ThemedButton },
  data() {
    return {
      store: useNewsStore(),
      overlay: false,
      selectedArticle: null as Article | null
    }
  },
  mounted() {
    const category = this.$route.params.category
    if (category) this.store.selectedCategory = category as NewsCategory
  },
  watch: {
    '$route.params.category'(newCategory: string) {
      this.store.selectedCategory = newCategory ? (newCategory as NewsCategory) : 'All'
    }
  },
  methods: {
    openArticle(article: Article) {
      this.selectedArticle = article
      this.overlay = true
    },
    changeCategory(category: NewsCategory) {
      this.store.selectedCategory = category
      this.$router.push({ name: 'news', params: { category } })
    },
    setSort(order: 'newest' | 'oldest') {
      this.store.sortOrder = order
    }
  }
}
</script>

<style scoped>
  @media (max-width: 600px) {
  .v-card {
    padding: 8px;
  }

  .v-card-title {
    font-size: 0.95rem;
    line-height: 1.2;
  }

  .v-card-text {
    font-size: 0.85rem;
  }
  .sort-buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  flex-direction: row;
}

@media (max-width: 600px) {
  .sort-buttons .themed-btn {
    flex: 1 1 48%;
    max-width: 48%;
  }
}
}
</style>