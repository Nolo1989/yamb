import { createRouter, createWebHistory } from '@ionic/vue-router';
import Dashboard from '../pages/Dashboard';
import Small from '../pages/SmallGame';
import Medium from '../pages/MediumGame';
import Large from '../pages/LargeGame';

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/small-game',
    component: Small
  },
  {
    path: '/medium-game',
    component: Medium
  },
  {
    path: '/large-game',
    component: Large
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
