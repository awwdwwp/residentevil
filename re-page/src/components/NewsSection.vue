<template>
    <v-container class="my-10">
        <div class="d-flex justify-space-between align-center mb-4">
            <h2 class="section-title">Latest News</h2>
            <ThemedButton color="surface" @click="$router.push('/news')">
              More
            </ThemedButton>
        </div>
        <v-row>
            <v-col
            v-for="item in latestArticles"
            :key="item.id"
            cols="12"
            md="4">
            <v-card class="news-card" elevation="6">
                <v-img :src="item.image" cover/>
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-text>
                    <p class="date">{{ item.date }}</p>
                </v-card-text>
                <v-card-actions>
                    <v-btn variant="text" color="accent" @click="$router.push('/news')">
                        More
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { mapState } from 'pinia';
import ThemedButton from './ThemedButton.vue';
import { useNewsStore } from '@/stores/newsStore';

    export default {
        name:"NewsSection",
        components: {ThemedButton},
        computed: {
            ...mapState(useNewsStore, ['latestArticles'])
        }
    }
</script>

<style scoped>
.section-title {
  color: white;
  font-weight: bold;
}

.news-card {
  background: #111;
  color: white;
}

.news-text {
  color: #ddd;
}

.date {
  color: gray;
}
h2 {
    font-family: 'Oswald', sans-serif; 
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 0.05em;
    font-weight: 400;
}

</style>