import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import './index.css';
import App from './app/App';
import store from './store';
import router from './router';

// keep vue-router and vuex store in sync
sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
