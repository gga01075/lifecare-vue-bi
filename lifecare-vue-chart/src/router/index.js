import { createWebHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Chart-home',
		component: () => import('@/views/Chart-home.vue'),
	},
	{
		path: '/chart-about',
		name: 'Chart-about',
		component: () => import('@/views/Chart-about.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
