import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Chart-default',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Chart-default.vue'),
      },
      {
        path: '/chart-home',
        name: 'Chart-home',
        component: () => import('@/views/Chart-home.vue'),
      },
      {
        path: '/chart-about',
        name: 'Chart-about',
        component: () => import('@/views/Chart-about.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router




