<template>
    <v-container class="mt-10 text-center">
        <h1 class="section-title mt-6 mb-6">LINEUP</h1>

        <div class="lineup-nav">
          <ThemedButton
          :color="$route.path.includes('games') ? 'primary' : 'surface'"
          :customClass="['tab-btn', $route.path.includes('games') && 'active-tab'].filter(Boolean).join(' ')"
          variant="flat"
          class="mx-2"
          @click="$router.push('/lineup/games')"
        >
          Games
        </ThemedButton>

        <ThemedButton
        :color="$route.path.includes('movies') ? 'primary' : 'surface'"
        :customClass="['tab-btn', $route.path.includes('movies') && 'active-tab'].filter(Boolean).join(' ')"
        variant="flat"
        class="mx-2"
         @click="$router.push('/lineup/movies')">
          Movies
        </ThemedButton>

        </div>
        <router-view />
    </v-container>
</template>

<script lang="ts" >
import ThemedButton from '@/components/ThemedButton.vue';

export default {
    name:"LineupView",
    components: {ThemedButton}
}
</script>

<style scoped>
.section-title {
  color: white;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
}
.lineup-nav {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
}

.v-btn:hover {
    background-color: 'rgba'(184, 8, 8, 0.582);
}.tab-btn {
    border-radius: 0px;
    
}

</style>