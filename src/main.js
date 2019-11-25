/* eslint-disable no-unused-vars */
import "babel-polyfill";
import Vue from "vue";

import smoothscroll from "smoothscroll-polyfill";
import "buefy/dist/buefy.css";

import Buefy from "buefy";
import router from "./router";
import App from "./App.vue";

import "in-view";

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

smoothscroll.polyfill();
Vue.use(Buefy);
Vue.config.productionTip = false;
new Vue({ router, render: h => h(App) }).$mount("#app");

// TODO: IE11 polyfill for bulma
// TODO: Consider https://webpack.js.org/guides/code-splitting/
// TODO: Reduce file size
