<template>
    <v-container class="mt-10 text-center">
        <h1 class="section-title mt-6 mb-6">LINEUP</h1>

        <div class="lineup-nav">
            <v-btn
             :class="['tab-btn', $route.path.includes('games') && 'active-tab']"
            
            variant="flat"
            class="mx-2"
            @click="$router.push('/lineup/games')">
        Games
        </v-btn>

        <v-btn
        
        variant="flat"
        :class="['tab-btn', $route.path.includes('movies') && 'active-tab']"
        class="mx-2"
        @click="$router.push('/lineup/movies')">
        Movies
    </v-btn>
        </div>
        <router-view />
    </v-container>
</template>

<script lang="ts" >
export default {
    name:"LineupView"
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
  justify-content: center;
  margin-bottom: 30px;
}

.v-btn:hover {
    background-color: rgba(184, 8, 8, 0.582);
}.tab-btn {
    border-radius: 0px;
    width:300px;
    height:60px;
  background: rgba(5, 0, 0, 0.76);
  color: white;
}

.active-tab {
  background: #8b00008e !important; 
  color: white !important;
}
</style>