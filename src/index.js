import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import App from './app/App';
import store from './store';
import router from './router';
import './index.css';


sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
