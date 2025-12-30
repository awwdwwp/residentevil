<template>
    <v-sheet
    height="80vh"
    class="d-flex align-center justify-center"
    style="position: relative; overflow: hidden;"
    >
    
<div class="overlay"></div>
<div class="banner-content text-center white--text">
    <img
  class="re-logo"
  src="https://game.capcom.com/residentevil/pc/img/top/mainimage-logo-en.png"
  alt="Resident Evil Portal"
/>

<p class="subtitle">Your fan hub for games, movies, news, and more</p>

<button class="re-button" @click="$router.push('/news')">
  Latest News
</button>
</div>
</v-sheet>
</template>
<script lang="ts">
export default {
    name:"VideoHeroBanner",
}
</script>

<style scoped>
.video-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  transform: translate(-50%, -50%);
  object-fit: cover;
}
.v-sheet {
background-color: transparent;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0); 
  z-index: 1;
}

.banner-content {
  position: relative;
  z-index: 2;
}
.re-logo {
  width: 600px;
  max-width: 90%;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 16px;
  color: #ffffffcc;
  margin-bottom: 20px;
}


.re-button {
  -webkit-text-size-adjust: 100%;
  visibility: visible;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
  outline: none;


  justify-content: center;
  align-items: center;

  width: 220px;
  height: 50px;
  background: #930912;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.05rem;
  transition: background 0.3s;
  position: relative;

  cursor: pointer;
}


.re-button:hover {
  background: #b50d19;
}


.re-button::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255, 255, 255, 0.25);
  pointer-events: none;
}
</style>