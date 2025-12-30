<template>
    <v-app-bar flat color="black">
        <v-container class="d-flex align-center justify-space-between">
            <div class="d-flex align-center">
                 <img
          src="https://game.capcom.com/residentevil/pc/img/common/logo/logo_w_en.png"
          alt="RE Portal"
          height="25"
        />
            </div>
            <div class="d-flex align-center">
                <v-btn variant="text" class="nav-btn" to="/">Home</v-btn>
                <v-btn variant="text" class="nav-btn" to="/news">News</v-btn>
                <v-btn variant="text" class="nav-btn" to="/history">History</v-btn>
                <v-btn variant="text" class="nav-btn" to="/lineup">Lineup</v-btn>
                <v-btn variant="text" class="nav-btn" to="/characters">Characters</v-btn>
            </div>
        </v-container>
    </v-app-bar>
</template>

<script lang="ts">
export default {
    name:"NavBar",
}
</script>

<style scoped>
.nav-btn {
  color: white;
  font-weight: lighter;
  font-family: "Oswald", sans-serif;
  letter-spacing: .1.7px;
  margin-left: 8px;
}

.nav-btn:hover {
  color: #ff1b1b;
}


</style>