<template>
    <div>
        <v-slide-group
        show-arrows
        v-model="selected"
        class="mb-4"
        >
            <v-slide-group-item
            v-for="char in characterStore.characters"
            :key="char.id"
            :value="char.id"
            style="min-width: 80px;"
            >
                <v-img
                :src="char.images[0]"
                height="100"
                width="100"
                class="icons ma-1 rounded-lg"
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
                         hide-delimiter-background
                         class="character-carousel"
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
@media (max-width: 700px) {
    .carousel-img {
        scale:1 !important;
    }
    .character-title {
        font-size: 1.8rem !important;
    }
    .character-desc {
        font-size: 0.8rem ;
    }
}

:deep(.v-carousel__controls .v-btn--icon) {
  color: #e4e4e4
}
.character-carousel {
  height: 420px;
}

@media (max-width: 768px) {
  .character-carousel {
    height: 260px !important;
  }
  .character-card {
    padding-inline: 1rem;
    margin-top: 1.5rem;
  }
  .icons {
    height: 50px !important;
    width: 50px !important;
  }
}

@media (max-width: 480px) {
  .character-carousel {
    height: 220px;
  }
}
</style>

