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
            <div class="d-none d-md-flex align-center">
                <v-btn variant="text" class="nav-btn" to="/">Home</v-btn>
                <v-btn variant="text" class="nav-btn" to="/news">News</v-btn>
                <v-btn variant="text" class="nav-btn" to="/history">History</v-btn>
                <v-btn variant="text" class="nav-btn" to="/lineup">Lineup</v-btn>
                <v-btn variant="text" class="nav-btn" to="/characters">Characters</v-btn>
            </div>
            <div class="d-flex align-center">
                <ThemeSwitcher class="mr-2"/>
                <v-btn icon class="d-md-none"
                @click="drawer = !drawer"><v-icon>mdi-menu</v-icon></v-btn>

                 <v-btn icon @click="$emit('toggle-audio')">
                <v-icon>
                    {{ muted ? 'mdi-volume-off' : 'mdi-volume-high' }}
                </v-icon>
                </v-btn>
            </div>
           
        
        </v-container>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        temporary location="end" width="260" app color="background"
        class="d-md-none">
            <v-list>
                <v-list-item to="/" @click="drawer = false">
                    <v-list-item-title class="white--text">Home</v-list-item-title>
                </v-list-item>
                <v-list-item to="/news" @click="drawer = false">
                    <v-list-item-title class="white--text">News</v-list-item-title>
                </v-list-item>
                <v-list-item to="/history" @click="drawer = false">
                    <v-list-item-title class="white--text">History</v-list-item-title>
                </v-list-item>
                <v-list-item to="/lineup/games" @click="drawer = false">
                    <v-list-item-title class="white--text">Lineup</v-list-item-title>
                </v-list-item>
                <v-list-item to="/characters" @click="drawer = false">
                    <v-list-item-title class="white--text">Characters</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
</template>

<script lang="ts">
import ThemeSwitcher from './ThemeSwitcher.vue';

export default {
    name:"NavBar",
    components: {ThemeSwitcher},
    props: {
        muted: {
            type:Boolean,
            required: true
        }
    },
        emits: {
            'toggle-audio': () => true
        },
    data() {
            return {
                drawer: false
            }
        },
        watch: {
            $route() {
                this.drawer = false
            }
        }
}
</script>

<style scoped>

.nav-btn {
  border-radius: 0px;
  color: white;
  font-weight: lighter;
  font-family: "Oswald", sans-serif;
  letter-spacing: 1.7px;
  margin-left: 8px;
}

.nav-btn:hover {
  color: rgb(var(--v-theme-accent));
}


</style>