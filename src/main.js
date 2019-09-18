/* eslint-disable no-unused-vars */
import 'babel-polyfill'
import Vue from 'vue';

import smoothscroll from 'smoothscroll-polyfill';
import 'buefy/dist/buefy.css';

import Buefy from 'buefy';
import router from './router';
import App from './App.vue';

smoothscroll.polyfill();
Vue.use(Buefy);
Vue.config.productionTip = false;
new Vue({ router, render: h => h(App) }).$mount('#app');
