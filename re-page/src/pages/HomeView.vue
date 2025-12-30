<template>
    <div>
        <VideoHeroBanner/>
    <NewsCarousel />
    <NewsSection />
    <GamesSection />
    <MoviesSection />
    <CharactersSection />

    <v-container class="mt-8 mb-8 text-center" >
      <v-row justify="center">
        <v-col cols="12" md="6">
          <router-link to="/about" style="text-decoration:none;">
            <v-card class="pa-6 pt-15 pb-15 about-card" elevation="6">
              <v-card-title class="text-h5" style="border-radius: 0px;">
                ABOUT
              </v-card-title>
            
              <v-card-text class="text-subtitle-1">
                RESIDENT EVIL PORTAL<br>
              </v-card-text>
              <v-btn color="primary" style="border-radius: 0px;" @click="$router.push('/games')">
            More
        </v-btn>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
    </div>

</template>

<script lang="ts">
import  NewsCarousel from '@/components/NewsCarousel.vue';
import VideoHeroBanner from '@/components/VideoHeroBanner.vue';
import NewsSection from '@/components/NewsSection.vue';
import GamesSection from '@/components/GamesSection.vue';
import MoviesSection from '@/components/MoviesSection.vue';
import CharactersSection from '@/components/CharactersSection.vue';

export default {
    name:"HomeView",
    components: {
        VideoHeroBanner,
        NewsCarousel,
        NewsSection,
        GamesSection,
        MoviesSection,
        CharactersSection
    }
}
</script>

<style scoped>
    .about-card {
  background: rgba(0,0,0,0.7);
  color: white;
}

</style>