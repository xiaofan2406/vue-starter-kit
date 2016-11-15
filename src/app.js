import Vue from 'vue';

import 'styles/reset.css';

import App from './App';
import router from './router';


const app = new Vue({
  router,
  ...App
});


export { app, router };
