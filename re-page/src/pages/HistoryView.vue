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
                
                class="history-year">
                    {{ item.year }}
                </div>

                <div class="history-center">
                     <div class="timeline-line"></div>
                    <div class="timeline-dot"></div>
                </div>

                <div class="history-card">
                    <div class="history-card-content">
                        <img class="entry_img" :src="item.img1" alt="game"/>
                        <h2 class="history-title">
                            {{ item.title }}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHistoryStore } from '@/stores/historyStore';
import { mapState } from 'pinia';

export default defineComponent({
    name:'HistoryView',
    computed: {
        ...mapState(useHistoryStore, ['history'])
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
  color: white;
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
.history-hero {
  display: block;
  margin: 0 auto;
}

</style>