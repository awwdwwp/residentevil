<template>
    <v-container class="my-10">
        <div class="d-flex justify-space-between align-center mb-4">
            <h2 class="section-title">Characters</h2>
            <v-btn  color="primary" class=" btn" @click="toggleImages">
                Change Pictures {{ previewIndex+1 }}/2
            </v-btn>
            <v-btn class="btn" @click="$router.push('/characters')">
                More
            </v-btn>
        </div>

        <v-row>
            <v-col
            v-for="char in charactersSection"
            :key="char.id"
            cols="12"
            sm="6"
            md="4">
            <v-card class="preview-card" elevation="6">
                <v-img :src="char.images[previewIndex]" height="250" style="object-position: top;" cover referrerpolicy="no-referrer"></v-img>
                
                <v-card-title>{{ char.name }}</v-card-title>
                <v-card-text>
                    <p class="desc">{{ char.description }}</p>
                </v-card-text>

                <v-card-actions>
                    <v-btn variant="text" color="red" @click="$router.push('characters')">
                        Details
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import {useCharacterStore} from '@/stores/characterStore'

export default {
    name:"CharactersSection",
    data() {
        return {
            previewIndex:0
        }
    },
    computed: {
        charactersSection() {
            const store = useCharacterStore()
            return store.previewCharacters
        }
    },
    methods: {
        toggleImages() {
            this.previewIndex = this.previewIndex === 0 ? 1 : 0
        }
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
  width: 220px !important;
  height: 50px !important;
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
.v-card-title, .v-card-text {
    font-family: 'Oswald', sans-serif; 
}
</style>