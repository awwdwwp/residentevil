<template>
    <v-container class="my-10 mt-15">
        <h1 class="section-title mt-6 mb-6">CHARACTERS</h1>
        <div class="characters-nav mb-6">
            <v-btn
            variant="flat"
            class="mx-2"
            :class="['tab-btn', $route.path.includes('list') && 'active-tab']"
            @click="$router.push('/characters/list')">
                LIST
            </v-btn>
            <v-btn
            variant="flat"
            class="mx-2"
            :class="['tab-btn', $route.path.includes('presentation') && 'active-tab']"
            @click="$router.push('/characters/presentation')"
            >
                PRESENTATION
            </v-btn>
        </div>

        <router-view />
        
    </v-container>
</template>

<script lang="ts">
    
    export default {
        name:'CharactersView',
        
    }
</script>

<style scoped>
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