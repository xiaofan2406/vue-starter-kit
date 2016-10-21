import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './app/Home';
import About from './app/About';


Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = new VueRouter({
  mode: 'history',
  routes
});


export default router;
