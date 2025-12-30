<template>
<v-container fluid class="mt-6">
    <v-carousel
    hide-delimiter-background
    height="300"
    cycle
    >
    <v-carousel-item
    v-for="(item, i) in carouselItems"
    :key="i"><v-sheet
    class="d-flex align-center justify-center"
    style="border-radius: 0px;"
    height="100%"
    tile
    :style="{backgroundImage:`url(${item.image})`, backgroundSize:'cover', backgroundPosition: 'center'}"
    ><div class="carousel-overlay text-center white--text pa-4">
        <h3 class="text-h5 mb-3 font-weight-bold">{{ item.title }}</h3>
            <v-btn small color="primary" style="border-radius: 0;" @click="$router.push('/news')">
              Read More
            </v-btn>
    </div>
    </v-sheet>
    </v-carousel-item>
    </v-carousel>
    </v-container>
</template>

<script lang="ts">
export default {
    name:"NewsCarousel",
    data() {
        return {
            carouselItems: [
              {
                image: 'https://game.capcom.com/residentevil/pc/img/ambassador-campaign/card2025/12/bg.jpg', 
                title: 'Get The Ambassador Card',
              },
              {
                image: 'https://game.capcom.com/residentevil/pc/img/top/bnr/bnr_requiem_en.jpg',
                title: 'Resident Evil Requiem',
              },
              {
                image: 'https://game.capcom.com/residentevil/pc/img/top/bnr/bnr_anniv30th_en.jpg',
                title: '30th Anniversary',
              },
              {
                image: 'https://game.capcom.com/residentevil/pc/img/top/bnr/bnr_nsw2_en.jpg',
                title: 'Game Collection',
              },
            ]
        }
    }
}
</script>


<style scoped>
.carousel-overlay {
  background: rgba(0, 0, 0, 0.603);
  border-radius: 0px;
}
.v-carousel {
  width: 100vw; 
  max-width: 100%; 
}
</style>