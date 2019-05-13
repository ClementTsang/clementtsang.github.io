import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage.vue";

Vue.use(Router);

let router = new Router({
	mode: 'history',
	routes: [
		{
			path: "/",
			name: "Clement Tsang",
			component: HomePage,
		},
	],
	scrollBehavior: function (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		if (to.hash) {
			// TODO: We require a check to make sure that we are at the correct position!  We might be able to fix this and our issue with anchor links in one stone...
			return window.scrollTo({ top: (document.querySelector(to.hash).offsetTop - 6 * parseFloat(getComputedStyle(document.querySelector(to.hash)).fontSize)), behavior: 'smooth' });
		}
		return window.scrollTo({ top: 0, behavior: 'smooth' });
	},
});

router.beforeEach((to, from, next) => {
	document.title = to.name;
	next();
});

export default router;