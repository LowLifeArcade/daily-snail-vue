import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Game from '../views/Game.vue';
import SnailSubmission from '../views/SnailSubmission.vue'
import Jobs from '../views/Jobs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
  {
    path: '/submission',
    name: 'SnailSubmission',
    component: SnailSubmission,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
