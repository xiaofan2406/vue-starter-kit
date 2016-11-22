import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'components/Home';
import About from 'components/About';
import TodoRoute from './TodoRoute';


Vue.use(VueRouter);

export const routes = [
  { path: '/', to: '/', component: Home, exact: true, text: 'Home' },
  { path: '/about', to: '/about', component: About, exact: false, text: 'About' },
  { path: '/todo/:filter?', to: '/todo', component: TodoRoute, exact: false, text: 'Todo', meta: { requiresAuth: true } }
];

const router = new VueRouter({
  mode: 'history',
  routes
});


export default router;
