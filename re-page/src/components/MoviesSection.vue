<template>
    <v-container class="my-10">
        <div class="d-flex justify-space-between align-center mb-4">
            <h2 class="section-title">Movies</h2>
            <v-btn class="btn" @click="$router.push('/lineup/movies')">
                More
            </v-btn>
        </div>

        <v-row>
            <v-col
            v-for="movie in previewMovies"
            :key="movie.id"
            cols="12"
            md="4"
            >
            <v-card class="preview-card" elevation="6">
                <v-img :src="movie.image"  aspect-ratio="2/3" cover></v-img>
                <v-card-title>{{ movie.title }}</v-card-title>
                <v-card-text>
                    <p class="desc">{{ movie.year }}</p>
                </v-card-text>

                <v-card-actions>
                    <v-btn variant="text" color="red" @click="$router.push('/lineup/movies')">
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
import { useMovieStore } from '@/stores/movieStore';

export default {
    name:"MoviesSection",
    computed: {
      ...mapState(useMovieStore, ['previewMovies'])
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
.btn {
 margin: 0;
  padding: 0;
  border: 1px solid red;
  border-radius: 0px;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
  outline: none;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 50px;
  background: #24010546;
  color: #ff0000;
  font-size: 14px;
  letter-spacing: 0.05rem;
  transition: background 0.3s;
  position: relative;

  cursor: pointer;
}

.btn:hover {
    background: #70000894;
}
</style>