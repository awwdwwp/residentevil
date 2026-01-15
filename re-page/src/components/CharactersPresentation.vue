<template>
    <div>
        <v-slide-group
        show-arrows
        v-model="selected"
        class="mb-6"
        >
            <v-slide-group-item
            v-for="char in characterStore.characters"
            :key="char.id"
            :value="char.id"
            >
                <v-img
                :src="char.images[0]"
                height="100"
                width="100"
                class="ma-2 rounded-lg"
                :class="{'selected-thumb':selected === char.id}"
                @click="selected = char.id"
                ></v-img>
            </v-slide-group-item>
        </v-slide-group>

        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card
                v-if="curCharacter"
                class="character-card"
                elevation="8"
                >
                   
                    <v-card-text>
                        
                        <v-carousel
                        :show-arrows="false"
                        delimiter-icon="mdi-square"
                        height="420"
                        hide-delimiter-background
                        >
                            <v-carousel-item
                            v-for="(img, index) in curCharacter.images"
                            :key="index"
                            >
                             <v-img
                            :src="img"
                            aspect-ratio="3/2"
                            cover
                            referrerpolicy="no-referrer"
                            crossorigin="anonymous"
                            class="carousel-img"></v-img>
                            </v-carousel-item>
                        </v-carousel>
                        <v-card-title class="character-title text-start">
                        {{ curCharacter.name }}
                    </v-card-title>
                        <div class="character-desc">
                            {{ curCharacter.description }}
                        </div>
                    </v-card-text>
                     
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import { useCharacterStore } from '@/stores/characterStore';

export default {
    name:'CharactersPresentation',
    data() {
        return {
            characterStore: useCharacterStore(),
            selected: 1
        }
    }, 
    computed: {
        curCharacter() {
            return this.characterStore.characters.find(c => c.id === this.selected)
        }
    }
}

</script>

<style scoped>

.v-img {
  filter: grayscale(0.8);
}
    .selected-thumb {
        scale:1.1;
    filter:brightness(100%) !important;
  border: 3px solid rgb(var(--v-theme-accent));
}
.character-card {
  background: #0a0a0a44; 
  /*border: 2px solid #550000; */
  border-radius: 0px;
  margin-top:3rem;
  padding-inline: 3rem;
  padding-bottom:1.2rem;
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.character-card:hover {
  transition:ease-in-out 0.3s;
  scale: 1.1;
}

.character-title {
 font-family: メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
  font-weight: 900;
  font-size: 2.5rem !important;
  color: white;
  text-align: center;
  padding:0px !important;
  padding-bottom: 7px !important;
  margin-top: 8px;
}

.character-desc {
font-family: 'Oswald', sans-serif;
  background: white;
  padding: 10px;
  border-radius: 0px;
  font-size: 0.95rem;
    display: inline-block;
  line-height: 1.4;
  margin-top: 8px;
  text-align: justify;
  color: black;
}
.character-card:hover {
  box-shadow: 0 8px 25px rgba(255, 0, 0, 0.6), 0 0 15px rgba(255, 0, 0, 0.3) inset;
}
.carousel-img {
    filter:brightness(100%) !important;
  max-height: 500px; 
  scale:1.3;
  width: 100%;       
  border-radius: 0px;
}

:deep(.v-carousel__controls .v-btn--icon) {
  color: #e4e4e4
}
</style>

