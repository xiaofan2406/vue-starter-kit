import Vue from 'vue';

import 'styles/reset.css';

import App from './App';
import router from './router';
import store from './store';

const app = new Vue({
  router,
  store,
  ...App
});


export { app, router, store };
