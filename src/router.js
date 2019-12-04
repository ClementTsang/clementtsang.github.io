import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Clement Tsang",
      component: HomePage,
      props: {
        navbarClickState: Boolean
      }
    }
  ],
  scrollBehavior(to) {
    if (to.hash && document.querySelector(to.hash)) {
      return window.scrollTo({
        top:
          document.getElementById(to.hash.substring(1)).offsetTop -
          document.getElementsByClassName("navbar-brand")[0].offsetHeight +
          (to.hash === "#home" ? 0 : 1),
        behavior: "smooth"
      });
    }
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

router.afterEach((to, from) => {
  router.replace({ path: "/" }).catch(err => {});
});
export default router;
