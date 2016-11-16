import VueVue from 'vue-vue';
import Vue from 'vue';

import TodoStore from './todo-store';
import UserStore from './user-store';


Vue.use(VueVue);

const todoStore = new TodoStore();
const userStore = new UserStore();


const store = VueVue.createStore({
  todoStore,
  userStore
});


export default store;
