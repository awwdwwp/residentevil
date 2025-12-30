<template>
    <div>
        <h2 class="lineup-title mb-5">GAME LINEUP</h2>
        <v-row>
            <v-col
            v-for="game in games"
            :key="game.id"
            cols="12"
            md="4">
                <v-card elevation="6">
                    <v-img :src="game.image" height="220 cover"></v-img>
                    <v-card-title>{{game.title}}</v-card-title>
                    <v-card-text>
                        <p class="mb-5">Available on:</p>
                        <div class="platforms">
                            <v-chip
                            v-for="(platform, i) in game.platforms"
                            :key="i"
                            class="platform-chip"
                            :style="{backgroundColor: getPlatformColor(platform)}"
                            label
                            size="small">
                            {{ platform }}
                            </v-chip>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import { useGameStore } from '@/stores/gameStore';
import { mapState } from 'pinia';

export default {
    name:"GamesLineup",
    data() {
        return {
            
        }
    },
    methods: {
        getPlatformColor(platform: string) {
            const colors: Record<string,string> = {
                PC: '#1E90FF',
                PS5: '#0A2FFF',
                PS4: '#1B4BFF',
                Xbox: '#006129',
                XboxOne: '#2ECC71',
                Switch: '#d50500'
            }
            if (!colors[platform]) {
                const extra = ['#FF9800', '#9C27B0', '#00BCD4', '#5da904']
                return extra[platform.length % extra.length]
            }
            return colors[platform]
        }
    },
    computed: {
        ...mapState(useGameStore, ['games'])
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
.platforms {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.platform-chip {
  color: rgb(255, 255, 255);
  font-family: 'Oswald', sans-serif;
  border-radius: 20px;
  font-weight: 600;
  font-weight: bold;
}
</style>