import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: () => import('@/views/Home.vue'),
	},
];

export default routes;
