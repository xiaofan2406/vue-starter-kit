import Vue from 'vue';

import 'styles/reset.css';

import App from './App';
import router from './router';
import createStore from './store';


const initialState = JSON.parse(localStorage.getItem('store'));

const store = createStore(initialState);


const app = new Vue({
  router,
  store,
  ...App
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('matched', to);
    next();
  }
  next();
});


export { app, router, store };
