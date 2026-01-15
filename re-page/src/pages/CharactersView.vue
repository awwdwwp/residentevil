<template>
    <v-container class="my-10 mt-15">
        <h1 class="section-title mt-6 mb-6">CHARACTERS</h1>
        <div class="characters-nav mb-6">
           
            <ThemedButton
            :color="$route.path.includes('list') ? 'primary' : 'surface'"
            :customClass="['tab-btn', $route.path.includes('list') && 'active-tab'].filter(Boolean).join(' ')"
            variant="flat"
            class="mx-2"
            @click="$router.push('/characters/list')">
                LIST
            </ThemedButton>
            <ThemedButton
            :color="$route.path.includes('presentation') ? 'primary' : 'surface'"
            :customClass="['tab-btn', $route.path.includes('presentation') && 'active-tab'].filter(Boolean).join(' ')"
            variant="flat"
            class="mx-2"
            @click="$router.push('/characters/presentation')">
                PRESENTATION
            </ThemedButton>
        </div>

        <router-view />
        
    </v-container>
</template>

<script lang="ts">
import ThemedButton from '@/components/ThemedButton.vue';

    
    export default {
        name:'CharactersView',
        components: {ThemedButton}
    }
</script>

<style scoped>
    .characters-nav {
        display: flex;
    }

.tab-btn {
    border-radius: 0px;
    width:300px !important;
    height:60px !important;
  background: rgba(5, 0, 0, 0.76);
  color: white;
}


</style>