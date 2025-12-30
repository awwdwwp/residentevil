<template>
    <v-container class="my-10">
        <div class="d-flex justify-space-between align-center mb-4">
            <h2 class="section-title">Latest News</h2>
            <v-btn class="btn" @click="$router.push('/news')">
                More
            </v-btn>
        </div>
        <v-row>
            <v-col
            v-for="item in news"
            :key="item.id"
            cols="12"
            md="4">
            <v-card class="news-card" elevation="6">
                <v-img :src="item.image" height="200" cover/>
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-text>
                    <p class="news-text">
                        {{ item.text }}
                    </p>
                    <small class="date">{{ item.date }}</small>
                </v-card-text>
                <v-card-actions>
                    <v-btn variant="text" color="red" @click="$router.push('/news')">
                        More
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    export default {
        name:"NewsSection",
        data() {
            return {
                news: [
        {
          id: 1,
          title: "Resident Evil 4 Remake Wins Big",
          text: "The remake continues to dominate awards and fan hearts.",
          date: "Jan 2025",
          image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg"
        },
        {
          id: 2,
          title: "Village DLC Expands The Story",
          text: "New horrors unfold with the latest DLC content.",
          date: "Dec 2024",
          image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/header.jpg"
        },
        {
          id: 3,
          title: "Resident Evil Requiem Is Coming Soon",
          text: "Capcom brings new RE experience.",
          date: "Nov 2024",
          image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3764200/ce5437442768e38eb575f205ab9397d0264017b0/header.jpg?t=1765935688"
        }
      ]
            }
        }
    }
</script>

<style scoped>
.section-title {
  color: white;
  font-weight: bold;
}

.news-card {
  background: #111;
  color: white;
}

.news-text {
  color: #ddd;
}

.date {
  color: gray;
}
h2 {
    font-family: 'Oswald', sans-serif; 
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 0.05em;
    font-weight: 400;
}
.btn {
 margin: 0;
  padding: 0;
  border: 1px solid red;
  border-radius: 0px;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
  outline: none;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 50px;
  background: #24010546;
  color: #ff0000;
  font-size: 14px;
  letter-spacing: 0.05rem;
  transition: background 0.3s;
  position: relative;

  cursor: pointer;
}

.btn:hover {
    background: #70000894;
}
</style>