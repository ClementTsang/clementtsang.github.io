import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage.vue";
import Notes from "@/components/Notes.vue";
import Contacts from "@/components/Contacts.vue";

Vue.use(Router);

let router = new Router({
	mode: 'history',
	routes: [
		{
			path: "/",
			name: "Clement Tsang",
			component: HomePage,
		},
		{
			path: "/notes",
			name: "Clement Tsang - Notes",
			component: Notes,
		},
		{
			path: "/contact",
			name: "Clement Tsang - Contact Me",
			component: Contacts,
		},
	],
});

router.beforeEach((to, from, next) => {
	document.title = to.name;
	next();
});

export default router;