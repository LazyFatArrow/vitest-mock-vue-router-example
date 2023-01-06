import { createRouter, createWebHistory } from 'vue-router'

export const RouteNames = {
  HOME: 'home',
  GREETING: 'greeting',
}

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: () => import('../views/Home/Home.vue'),
  },
  {
    path: '/greeting',
    name: RouteNames.GREETING,
    component: () => import('../views/Greeting/Greeting.vue'),
  },
]

export default createRouter({
  routes,
  history: createWebHistory(),
})
