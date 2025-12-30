import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import LineupView from '@/pages/LineupView.vue'
import GamesLineup from '@/components/GamesLineup.vue'
import MoviesLineup from '@/components/MoviesLineup.vue'
import CharactersView from '@/pages/CharactersView.vue'
import CharactersList from '@/components/CharactersList.vue'
import CharactersPresentation from '@/components/CharactersPresentation.vue'
import HistoryView from '@/pages/HistoryView.vue'

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
      name:'lineup',
      component: LineupView,
      children: [
        {path:'', redirect: '/lineup/games'},
        { path: 'games', component: GamesLineup },
        { path: 'movies', component: MoviesLineup }
      ]
    },
    {
      path:'/characters',
      name:'characters',
      component:CharactersView,
      children: [
        {path:'', redirect: '/characters/list'},
        {path:'list', component: CharactersList},
        {path:'presentation', component: CharactersPresentation}
      ]
    },
    {
      path:'/history',
      name:'history',
      component: HistoryView
    }
  ]
})

export default router
