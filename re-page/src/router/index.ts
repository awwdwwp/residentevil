import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import LineupView from '@/pages/LineupView.vue'
import GamesLineup from '@/components/GamesLineup.vue'
import MoviesLineup from '@/components/MoviesLineup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component: HomeView
    },
    {
      path:'/lineup',
      component: LineupView,
      children: [
        {path:'', redirect: '/lineup/games'},
        { path: 'games', component: GamesLineup },
        { path: 'movies', component: MoviesLineup }
      ]
    }
  ]
})

export default router
