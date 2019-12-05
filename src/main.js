/* eslint-disable no-unused-vars */
import "babel-polyfill";
import Vue from "vue";

import "buefy/dist/buefy.css";
import Buefy from "buefy";
import router from "./router";
import App from "./App.vue";

import { ObserveVisibility } from "vue-observe-visibility";
Vue.directive("observe-visibility", ObserveVisibility);

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFile,
  faPhone,
  faEnvelope,
  faChevronRight,
  faLink,
  faCalendarAlt,
  faMapMarkerAlt,
  faDownload,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faFile,
  faPhone,
  faEnvelope,
  faChevronRight,
  faLink,
  faCalendarAlt,
  faMapMarkerAlt,
  faDownload,
  faExternalLinkAlt
);
library.add(faGithub, faLinkedin);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Buefy);
Vue.config.productionTip = false;
new Vue({ router, render: h => h(App) }).$mount("#app");

// Polyfills (TODO: load only when needed)
import smoothscroll from "smoothscroll-polyfill";
import IntersectionObserver from "intersection-observer";
smoothscroll.polyfill();
Vue.use(IntersectionObserver);

// TODO: IE11 polyfill for bulma
// TODO: Consider https://webpack.js.org/guides/code-splitting/
// TODO: Reduce file size, perhaps shrink images
