<template>
  <v-app :theme="currentTheme">
     <video
     v-if="isHome && homeVideoSrc"
      autoplay
      muted
      loop
      playsinline
      class="background-video"
    >
      <source :src="homeVideoSrc" type="video/mp4">
    </video>
    <div
  v-else
  class="background-image"
  :style="{ backgroundImage: `url(${backgroundImage})` }">
</div>

    <div class="video-overlay"></div>
    <AgeVerification />

    <NavBar @toggle-audio="toggleMute" :muted="muted"/>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <TopButton />
    <PageFooter />
  </v-app>
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue';
import PageFooter from './components/PageFooter.vue';
import AgeVerification from './components/AgeVerification.vue';
import { mapState } from 'pinia';
import { useThemeStore } from './stores/themeStore';
import TopButton from './components/TopButton.vue';

const BACKGROUND_MAP = [
  {
    match: (path:string) => path.startsWith('/lineup'),
    image: 'https://game.capcom.com/residentevil/pc/img/lineup/bg-lineup.jpg'
  },
  {
    match:(path:string) => path.startsWith('/characters'),
    image: 'https://raw.githubusercontent.com/awwdwwp/re_assets/refs/heads/main/characters_bg.webp'
  }
]

export default {
  name: "App",
  components: {
    NavBar,
    PageFooter,
    AgeVerification,
    TopButton
  },
  data() {
    return { backgroundImage: 'https://game.capcom.com/residentevil/pc/img/lineup/bg-lineup.jpg' ,
      audio: null as HTMLAudioElement | null,
      muted: true
    }
  },
  computed: {
    isHome() {
      return this.$route.path ==='/'
    },
    ...mapState(useThemeStore, ['currentTheme']),
    homeVideoSrc(): string | null {
      if (!this.isHome) return null
      const base = import.meta.env.BASE_URL
      return this.currentTheme === 'requiem' ? base+'/trailer_pc1.mp4' : base+'/trailer_pc.mp4'
    }
  },
  methods: {
    toggleMute() {
      if (!this.audio) return

      this.muted = !this.muted
      if (this.muted) {
        this.audio.pause()
        this.audio.currentTime = 0
      } else {
        this.audio?.play().catch(()=> {})
      }
    }
  },
  watch: {
    $route(to) {
      const found = BACKGROUND_MAP.find(b=>b.match(to.path))
      this.backgroundImage = found ? found.image :
      'https://game.capcom.com/residentevil/pc/img/about/history/bg_history.jpg'
    },
    currentTheme() {
      const video = document.querySelector('.background-video') as HTMLVideoElement
      if (video) {
        video.load()
        video.play().catch(()=>{})
      }
    }

  },
    mounted() {
      this.audio = new Audio(import.meta.env.BASE_URL + '/one.mp3')
      this.audio.loop = true
      this.audio.volume = 0.3;

    }
}
</script>

<style>
html, body {
   overflow-x: hidden;
  max-width: 100vw;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
@media (max-width: 600px) {
  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  .section-title {
    font-size: 1.6rem;
    text-align: center;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>