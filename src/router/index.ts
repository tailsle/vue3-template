import { createRouter, createWebHistory } from 'vue-router';
import nProgress from 'nprogress';
import routes from './routes';
const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	nProgress.start();
	next();
});

router.afterEach((to, from, next) => {
	nProgress.done();
});

export default router;
