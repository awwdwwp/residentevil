<template>
    <v-container class=" mt-10 mb-10 history-container ">
        <v-img
  src="https://raw.githubusercontent.com/awwdwwp/re_assets/refs/heads/main/history.jpg"
  height="220"
  width="auto"
  class="mx-auto"
  contain
/>
        <div class="history-grid">
            
             <div class="timeline-column"></div>
            <div v-for="item in history"
                :key="item.year" class="history-row">
                <div
                
                class="history-year"
                
                >
                    {{ item.year }}
                </div>

                <div class="history-center">
                     <div class="timeline-line"></div>
                    <div class="timeline-dot"></div>
                </div>

                <div class="history-card"
                @click="openOverlay(item)"
                >
                    <div class="history-card-content">
                        <img class="entry_img" :src="item.img1" alt="game"/>
                        <h2 class="history-title">
                            {{ item.title }}
                        </h2>
                    </div>
                </div>

                
            </div>
        </div>

        <v-dialog v-model="overlay" fullscreen transition="fade-transition">
                  <div class="history-overlay">
                    <div class="overlay-bg" :style="{backgroundImage:`url(${selected?.img1})`}">
                    </div>

                    <div class="overlay-content">
                      <v-btn 
                      icon 
                      class="close-btn"
                      @click="closeOverlay">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>

                      <v-img
                      :src="selected?.img1"
                      height="260"
                      contain
                      class="mb-6"
                      />
                      <v-img class="my-7" src="https://game.capcom.com/residentevil/pc/img/about/history/bar_title.png" alt="br" />
                      <h2 class="overlay-title">STORY</h2>
                      <p class="overlay-text">
                        {{ selected?.story }}
                      </p>
                      <v-img class="my-7" src="https://game.capcom.com/residentevil/pc/img/about/history/bar_title.png" alt="br" />
                      <h2 class="overlay-title mt-6">RELATED TITLES</h2>
                      <v-table density="comfortable">
                        <thead>
                          <tr>
                            <th>Release</th>
                            <th>Platform</th>
                            <th>Title</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                          v-for="(rel,i) in selected?.related"
                          :key="i"
                          >
                            <td>{{rel.release}}</td>
                            <td>{{ rel.platform }}</td>
                            <td>{{ rel.title }}</td>
                          </tr>
                        </tbody>
                      </v-table>
                      <v-img class="my-7" src="https://game.capcom.com/residentevil/pc/img/about/history/bar_title.png" alt="br" />
                    </div>
                  </div>
                </v-dialog>
    </v-container>

    <Game-countdown />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHistoryStore, } from '@/stores/historyStore';
import type { HistoryEntry } from '@/stores/historyStore';
import { mapState } from 'pinia';
import GameCountdown from '@/components/GameCountdown.vue';

export default defineComponent({
    name:'HistoryView',
    data() {
      return {
        overlay: false,
        selected:null as HistoryEntry | null
      }
    },
    components: {GameCountdown},
    computed: {
        ...mapState(useHistoryStore, ['history'])
    },
    methods: {
      openOverlay(item: HistoryEntry) {
        this.selected = item
        this.overlay = true
        document.body.style.overflow = "hidden"
      },
      closeOverlay() {
        this.overlay = false
        this.selected = null
        document.body.style.overflow = ""
      }
    }
})

</script>

<style scoped>
.history-container {
  max-width: 1100px;
}

.history-grid {
  display: grid;
  gap: 140px; 
}
.timeline-line {
  position: absolute;
  width: 3px;
  height: 100%;
  background: rgba(255,255,255,0.4);
}
.history-row {
  display: grid;
  grid-template-columns: 120px 100px 1fr;
  align-items: center;
  position: relative;
}

.history-year {
  font-size: 36px;
  font-weight: 900;
  
}

.history-center {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.history-card:hover {
    background: #0b0b0b8f;
}

.timeline-dot {
  width: 22px;
  height: 22px;
  border: 3px solid white;
  border-radius: 50%;
  background: #0b0b0b;
  z-index: 2;
  }

.history-card {
    background: black;
  border: 2px solid rgba(255,255,255,0.4);
  padding: 20px 30px;
}

.history-card-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-img {
  height: 70px;
  object-fit: contain;
}


.history-title {
  color: white;
  font-size: 26px;
  font-weight: 800;
  text-align: center;
  
}

.history-card:hover {
  cursor: pointer;
}

.history-hero {
  display: block;
  margin: 0 auto;
}

.history-overlay {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
}

.overlay-bg {
  position: fixed;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: blur(12px) brightness(0.4);
  
}

.overlay-content {
  font-family: 'Oswald', sans-serif!important;
  position: relative;
  max-width: 66%;
  margin: 80px auto;
  padding: 40px;
  background: rgba(10, 10, 10, 0.75);
  backdrop-filter: blur(6px);
  color: white;
  border: 1px solid rgba(255,255,255,0.25);
}

.overlay-title {
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 10px;
}

.overlay-text {
  line-height: 1.8;
  color: #ddd;
} 

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
}
.entry_img {
  max-width: 250px !important;
}
</style>