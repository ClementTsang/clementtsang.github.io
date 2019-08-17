/* eslint-disable no-unused-vars */
import 'buefy/dist/buefy.css';
import smoothscroll from 'smoothscroll-polyfill';

import Vue from 'vue';
import Buefy from 'buefy';
import router from './router';
import App from './App.vue';

smoothscroll.polyfill();
Vue.use(Buefy);
Vue.config.productionTip = false;
new Vue({ router, render: h => h(App) }).$mount('#app');
