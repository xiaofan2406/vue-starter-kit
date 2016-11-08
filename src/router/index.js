import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'components/Home';
import About from 'components/About';
import Todo from 'components/Todo';


Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/todo', component: Todo },
  { path: '/todo/:filter', component: Todo }
];

const router = new VueRouter({
  mode: 'history',
  routes
});


export default router;
