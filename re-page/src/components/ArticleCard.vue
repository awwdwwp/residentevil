<template>
    <v-card class="article-card" @click="$emit('open')">
        <v-img :src="article?.image"
        class="article-image"
            contain></v-img>
        <v-card-title class="title">{{ article.title }}</v-card-title>

        <v-card-text class="meta">
            <span>{{ article.date }}</span>
            <span>{{ article.category }}</span>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
    import type { Article} from '@/stores/newsStore'

    export default {
        name:'ArticleCard',
        props: {
            article: {
                type: Object as ()=> Article,
                required: true
            }
        }
    }
</script>

<style scoped>
.article-card {
  cursor: pointer;
  transition: transform 0.2s;
}
.article-card:hover {
  transform: translateY(-4px);
}
.meta {
  display: flex;
  justify-content: space-between;
  opacity: 0.7;
}
.article-image {
  width: 100%;        
  aspect-ratio: 1;  
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
</style>