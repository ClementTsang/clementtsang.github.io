/* eslint-disable no-unused-vars */
import 'babel-polyfill'
import smoothscroll from 'smoothscroll-polyfill';
import 'buefy/dist/buefy.css';

import Vue from 'vue';
import Buefy from 'buefy';
import router from './router';
import App from './App.vue';

smoothscroll.polyfill();
Vue.use(Buefy);
Vue.config.productionTip = false;
new Vue({ router, render: h => h(App) }).$mount('#app');
