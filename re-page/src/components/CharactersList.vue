<template>
<v-row>
            <v-col
            v-for="char in characterStore.characters"
            :key="char.id"
            cols="12"
            md="6"
            lg="4"
            >
                <v-card class="character-card" elevation="6">
                    <v-card-title class="text-h6 mt-2">{{ char.name }}
                    </v-card-title>
                    <v-card-text>
                        <p class="desc mb-5">{{ char.description }}</p>
                        <v-carousel
                        :continuous="false"
                        :show-arrows="false"
                        delimiter-icon="mdi-square"
                        height="300"
                        hide-delimiter-background
                        >
                            <v-carousel-item
                            v-for="(img, index) in char.images"
                            :key="index"
                            >
                            <v-img :src="img" height="250" cover 
                            referrerpolicy="no-referrer"
                             crossorigin="anonymous"></v-img>
                            </v-carousel-item>
                        </v-carousel>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
</template>

<script lang="ts">
import { useCharacterStore } from '@/stores/characterStore';

export default {
    name:'CharactersList',
    data() {
            return {
                characterStore: useCharacterStore()
            }
        }
}
</script>

<style scoped>
    .v-carousel__controls__item .v-icon {
background: #555555a3;
}
.desc {
    font-family: 'Oswald', sans-serif!important;
}
:deep(.v-carousel__controls .v-btn--icon) {
  color: #e4e4e4
}
</style>