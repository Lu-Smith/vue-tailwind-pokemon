import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import PokemonGraphsView from '../views/PokemonGraphsView.vue';
import PokemonTablesView from '../views/PokemonTablesView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pokemon-graphs',
      name: 'pokemon-graphs',
      component: PokemonGraphsView
    },
    {
      path: '/pokemon-tables',
      name: 'pokemon-tables',
      component: PokemonTablesView
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
  ],
});

export default router;