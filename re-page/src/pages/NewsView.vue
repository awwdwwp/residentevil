<template>
  <v-container>
    <h1 class="mb-6">Articles</h1>

    <NewsCategoryNav
      :currentCategory="store.selectedCategory"
      @category-changed="changeCategory"
    />

    <v-row class="mt-6">
      <v-col
        v-for="article in store.filteredArticles"
        :key="article.id"
        cols="12"
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

export default {
  name: 'NewsView',
  components: { NewsCategoryNav, ArticleCard, ArticleOverlay },
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
    }
  }
}
</script>