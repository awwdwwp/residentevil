<template>
    <v-container class="my-10">
        <div class="section-header mb-4">
  <h2 class="section-title">Characters</h2>

  <div class="section-actions">
    <ThemedButton color="primary" @click="toggleImages">
      Change Pictures {{ previewIndex + 1 }}/2
    </ThemedButton>

    <ThemedButton color="surface" @click="$router.push('/characters')">
      More
    </ThemedButton>
  </div>
</div>

        <v-row>
            <v-col
            v-for="char in charactersSection"
            :key="char.id"
            cols="6"
            sm="6"
            md="4">
            <v-card class="preview-card" elevation="6">
                <v-img :src="char.images[previewIndex]" class="preview-img" cover referrerpolicy="no-referrer"></v-img>
                
                <v-card-title>{{ char.name }}</v-card-title>
                <v-card-text>
                    <p class="desc">{{ char.description }}</p>
                </v-card-text>

                <v-card-actions>
                    <v-btn variant="text" color="accent" @click="$router.push('characters')">
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
import ThemedButton from './ThemedButton.vue';

export default {
    name:"CharactersSection",
    components: {ThemedButton},
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
.preview-img {
  height: 250px;
}

@media (max-width: 600px) {
  .preview-img {
    height: 180px;
  }
}
@media (max-width: 600px) {
  h2.section-title {
    font-size: 1.4rem;
  }
  @media (max-width: 600px) {
  .section-actions {
    width: 100%;
  }

  .section-actions :deep(.themed-btn) {
    flex: 1 1 48%;
    max-width: 48%;
  }
}

  .v-card-title {
    font-size: 1rem;
    line-height: 1.2;
  }

  .v-card-text {
    font-size: 0.9rem;
  }
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
.v-card-title, .v-card-text {
    font-family: 'Oswald', sans-serif; 
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.section-actions {
  display: flex;
  gap: 8px;
  flex-direction: column;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .section-actions {
    width: 100%;
    justify-content: flex-start;
  }
  .section-actions :deep(.themed-btn) {
  width: auto;
  min-width: 140px;
  max-width: 220px;
}
}
</style>