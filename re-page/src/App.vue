<template>
  <v-app>
     <video
     v-if="isHome"
      autoplay
      muted
      loop
      playsinline
      class="background-video"
    >
      <source src="/trailer_pc.mp4" type="video/mp4">
    </video>
    <div
  v-else
  class="background-image"
  :style="{ backgroundImage: `url(${backgroundImage})` }">
</div>

    <div class="video-overlay"></div>
    <AgeVerification />

    <NavBar />
    <router-view />
    <PageFooter />
  </v-app>
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue';
import PageFooter from './components/PageFooter.vue';
import AgeVerification from './components/AgeVerification.vue';

export default {
  name: "App",
  components: {
    NavBar,
    PageFooter,
    AgeVerification
  },
  data() {
    return { backgroundImage: 'https://game.capcom.com/residentevil/pc/img/lineup/bg-lineup.jpg'}
  },
  computed: {
    isHome() {
      return this.$route.path ==='/'
    }
  },
  
  watch: {
    $route(to) {

      if(to.path.startsWith('/lineup')) {
        this.backgroundImage = 'https://game.capcom.com/residentevil/pc/img/lineup/bg-lineup.jpg'
      } else {
        this.backgroundImage = 'https://game.capcom.com/residentevil/pc/img/about/history/bg_history.jpg'
      }
    }
  }
}
</script>

<style>
html, body {
  font-family: メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.video-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: -1;
}

html, body, #app {
  background: transparent !important;
}
.v-application {
background-color: transparent !important;
}
.background-image {
  position: fixed;
  inset: 0;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  z-index: -2;
}
</style>