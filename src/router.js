import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";
import NotFoundComponent from "@/components/NotFoundComponent";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Clement Tsang",
      component: HomePage
    },
    {
      path: "*",
      component: NotFoundComponent
    }
  ],
  scrollBehavior(to) {
    if (to.hash && document.querySelector(to.hash)) {
      return window.scrollTo({
        top:
          document.querySelector(to.hash).offsetTop -
          document.querySelector(".navbar-brand").offsetHeight +
          1,
        behavior: "smooth"
      });
    } else if (to.fullPath === "/") {
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
