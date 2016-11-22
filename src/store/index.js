import VueVue from 'vue-vue';
import Vue from 'vue';

import TodoStore from './todo-store';
import UserStore from './user-store';


Vue.use(VueVue);


export default (initialState = null) => {
  const store = VueVue.createStore({
    todoStore: new TodoStore(),
    userStore: new UserStore()
  }, initialState);

  TodoStore.withAuth(store.userStore);

  return store;
};

export const saveStore = (store) => {
  localStorage.setItem('store', JSON.stringify(store.$data));
};
