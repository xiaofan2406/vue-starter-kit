import Vue from 'vue';
import Vuex from 'vuex';

import todoModule from './todo/todo-module';

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    todo: todoModule
  },
  strict: process.env.NODE_ENV === 'development'
});
