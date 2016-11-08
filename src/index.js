import Vue from 'vue';

import './reset.css';
import App from './App';
import router from './router';
import store from './store';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
