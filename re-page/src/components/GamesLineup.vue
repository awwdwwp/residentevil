<template>
    <div>
        <h2 class="lineup-title mb-5">GAME LINEUP</h2>
        <v-row>
            <v-col
            v-for="game in games"
            :key="game.id"
            cols="6"
            sm="4"
            md="4">
                <v-card elevation="6"
                class="game-card"
                color="surface"
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
        <v-card color="surface">
            <v-card-title class="text-end">
                <v-btn icon @click="closeOverlay">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
            </v-card-title>
                    
            <v-card-text>
                <v-row>
                    <v-col cols="6" sm="8" md="7">
                        <v-img :src="selectedGame?.image" style="max-height: 300;height: 100%;" cover></v-img>
                    </v-col>
                    <v-col cols="6" sm="4" md="5">
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
import { getPlatformColor } from '@/utils/platformColors';
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
        getPlatformColor,
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
  color: white;
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  border-radius: 0;
  padding: 4px 10px;
  min-height: 28px;
  min-width: unset;
  width: auto;
  font-size: 0.75rem;
}
@media (max-width: 600px) {
  .platform-chip {
    font-size: 0.65rem;
    padding: 3px 8px;
  }
}
.v-dialog > .v-overlay__content > .v-card, .v-dialog > .v-overlay__content > form > .v-card {
    border: 1px rgba(255, 255, 255, 0.26) solid;
    border-radius: 0px;

}
.v-card .v-card-title {
 background-color: rgb(var(--v-theme-primary)) !important;
margin-bottom: 13px;;
}

@media (max-width: 600px) {
  .game-card {
    font-size: 0.9rem;
  }

  .v-card-title {
    font-size: 0.8rem;
    line-height: 1.2;
  }
}
</style>