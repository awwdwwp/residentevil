<template>
    <v-fab-transition>
        <v-btn
        v-show="visible"
        class="to-top"
        @click="scrollToTop">
        </v-btn>
    </v-fab-transition>
</template>

<script lang="ts">
    export default {
        name:'TopButton',
        data() {
            return {
                visible: false
            }
        },
        methods: {
            onScroll() {
                this.visible = window.scrollY > 300
            },
            scrollToTop() {
                window.scrollTo({top:0,behavior:'smooth'})
            }
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll)
        },
        unmounted() {
            window.removeEventListener('scroll', this.onScroll)
        }
    }
</script>

<style scoped>
    .to-top {
        
  position: fixed;
  background: url('/icon-top.png');
  background-repeat: no-repeat;
  bottom: 32px;
  right: 32px;
  z-index: 1000;
}
</style>