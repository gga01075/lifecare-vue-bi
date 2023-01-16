import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'SalesAnalysis',
		component: () => import('@/views/SalesAnalysis.vue'),
	},
	{
		path: '/CustomerTypesAnalysis',
		name: 'CustomerTypesAnalysis',
		component: () => import('@/views/CustomerTypesAnalysis.vue'),
	},
	{
		path: '/ProdSalesAnalysis',
		name: 'ProdSalesAnalysis',
		component: () => import('@/views/ProdSalesAnalysis.vue'),
	},
	{
		path: '/CustomerManagement',
		name: 'CustomerManagement',
		component: () => import('@/views/CustomerManagement.vue'),
	},
	{
		path: '/EventTypesAnalysis',
		name: 'EventTypesAnalysis',
		component: () => import('@/views/EventTypesAnalysis.vue'),
	},
	{
		path: '/ComponentPage',
		name: 'ComponentPage',
		component: () => import('@/views/ComponentPage.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
