<template>
    <div>
        <h2 class="lineup-title">MOVIE LINEUP</h2>

        <v-row>
            <v-col
            v-for="movie in movies"
            :key="movie.id"
            cols="12"
            md="4">
                <v-card class="pa-4 preview-card">
                    <v-img :src="movie.image" height="220 cover"></v-img>
                    <h3>{{ movie.title }}</h3>
                    <p>{{ movie.year }}</p>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import { useMovieStore } from '@/stores/movieStore'; 
import { mapState } from 'pinia';

export default {
    name:"MoviesLineup",
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(useMovieStore, ['movies'])
    }
}
</script>

<style scoped>
.preview-card {
  background:#0d0d0d;
  color:white;
}
.lineup-title {
  color:white;
}
</style>