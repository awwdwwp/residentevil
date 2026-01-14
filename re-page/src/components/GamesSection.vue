<template>
    <v-container class="my-10">
        <div class="d-flex justify-space-between align-center mb-4">
            <h2 class="section-title">Games</h2>
            <ThemedButton color="surface" @click="$router.push('/lineup/games')">
              More
            </ThemedButton>
        </div>

        <v-row>
      <v-col
        v-for="game in previewGames"
        :key="game.id"
        cols="12"
        md="4"
      >
        <v-card class="preview-card" elevation="6">
          <v-img :src="game.image" height="350" cover></v-img>

          <v-card-title>{{ game.title }}</v-card-title>

          <v-card-text>
            <p class="desc">{{ game.platforms.join(', ') }}</p>
          </v-card-text>

          <v-card-actions>
            <v-btn variant="text" color="accent" @click="$router.push('/lineup/games')">
              Details
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
    </v-container>
</template>

<script lang="ts">
import { mapState } from 'pinia';
import { useGameStore } from '@/stores/gameStore';
import ThemedButton from './ThemedButton.vue';

export default {
    name:"GamesSection",
    components: {ThemedButton},
     computed: {
      ...mapState(useGameStore, ['previewGames'])
    }
}
</script>


<style scoped>
.section-title {
  color: white;
  font-weight: bold;
}

.preview-card {
  background: #0d0d0d;
  color: white;
}

.desc {
  color: #dcdcdc;
}
h2 {
    font-family: 'Oswald', sans-serif; 
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 0.05em;
    font-weight: 400;
}

</style>