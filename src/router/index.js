import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/CharactersView.vue')
    },
    {
      path: '/episodes',
      name: 'episodes',
      component: () => import('../views/EpisodesView.vue')
    },
    {
      path: '/locations',
      name: 'locations',
      component: () => import('../views/LocationsView.vue')
    },
    {
      path: '/characters/:id',
      name: 'single-character',
      component: () => import('../views/SingleCharacterView.vue')
    },
    {
      path: '/episodes/:id',
      name: 'single-episode',
      component: () => import('../views/SingleEpisodeView.vue')
    },
    {
      path: '/locations/:id',
      name: 'single-location',
      component: () => import('../views/SingleLocationView.vue')
    }
  ]
})

export default router
