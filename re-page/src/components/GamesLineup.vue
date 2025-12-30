<template>
    <div>
        <h2 class="lineup-title mb-5">GAME LINEUP</h2>
        <v-row>
            <v-col
            v-for="game in games"
            :key="game.id"
            cols="12"
            md="4">
                <v-card elevation="6"
                class="game-card"
                @click="openOverlay(game)"
                style="cursor:pointer;">
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

    <v-dialog v-model="overlay" max-width="800">
        <v-card>
            <v-card-title class="text-end">
                <v-btn icon @click="closeOverlay">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
            </v-card-title>
                    
            <v-card-text>
                <v-row>
                    <v-col cols="12" md="5">
                        <v-img :src="selectedGame?.image" height="300" cover></v-img>
                    </v-col>
                    <v-col cols="12" md="7">
                        <span class="text-h5">{{ selectedGame?.title }}</span>
                        <p class="mb-2"><strong>Platforms</strong></p>
                        <div class="platforms">
                            <v-chip
                            v-for="(platform, i) in selectedGame?.platforms"
                            :key="i"
                            class="platform-chip"
                            :style="{backgroundColor: getPlatformColor(platform)}"
                            label
                            size="small"
                            >{{ platform }}</v-chip>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { useGameStore } from '@/stores/gameStore';
import { mapState } from 'pinia';
import type {Game} from '@/stores/gameStore';

export default {
    name:"GamesLineup",
    data() {
        return {
            overlay:false,
            selectedGame: null as Game | null
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
        },
        openOverlay(game: Game) {
            this.selectedGame = game;
            this.overlay = true;
        },
        closeOverlay() {
            this.overlay = false;
            this.selectedGame = null;
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
  border-radius: 0px;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
  outline: none;
  text-align: center;
  justify-content: center;
  width: 7rem;
  height: 50px;
  position: relative;
  cursor: pointer;

}
.v-dialog > .v-overlay__content > .v-card, .v-dialog > .v-overlay__content > form > .v-card {
    border: 1px rgba(255, 255, 255, 0.26) solid;
    border-radius: 0px;
    background:linear-gradient(rgba(0, 0, 0, 0.89), rgb(0, 0, 0)) ;
}
.v-card .v-card-title {
background-color: rgba(97, 2, 2, 0.705);
margin-bottom: 13px;;
}
</style>