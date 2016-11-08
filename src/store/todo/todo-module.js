import Vue from 'vue';
import getters from './todo-getters';
import actions from './todo-actions';

const mutations = {
  addTodo: 'todo/addTodo',
  toggleTodo: 'todo/toggleTodo',
  setSearch: 'todo/setSearch',
  setFilter: 'todo/setFilter'
};


export default {
  state: {
    todos: {},
    filter: '',
    search: ''
  },
  mutations: {
    [mutations.addTodo](state, payload) {
      Vue.set(state.todos, payload.id, payload);
    },
    [mutations.toggleTodo](state, payload) {
      state.todos[payload].completed = !state.todos[payload].completed;
    },
    [mutations.setSearch](state, payload) {
      state.search = payload;
    },
    [mutations.setFilter](state, payload) {
      state.filter = payload;
    }
  },
  getters: {
    [getters.ALL_TODOS]: state => Object.keys(state.todos).map(id => state.todos[id]),
    [getters.VISIBLE_TODOS]: (state) => {
      let filtered = [];
      switch (state.filter) {
        case '':
          filtered = Object.keys(state.todos).map(id => state.todos[id]);
          break;
        case 'active':
          filtered = Object.keys(state.todos).filter(id => state.todos[id].completed === false)
            .map(id => state.todos[id]);
          break;
        case 'completed':
          filtered = Object.keys(state.todos).filter(id => state.todos[id].completed === true)
            .map(id => state.todos[id]);
          break;
        default:
          filtered = Object.keys(state.todos).map(id => state.todos[id]);
          break;
      }
      const reg = new RegExp(state.search);
      return filtered.filter(todo => reg.test(todo.name));
    },
    [getters.FILTER]: state => state.filter
  },
  actions: {
    [actions.ADD_TODO]({ commit }, todo) {
      commit(mutations.addTodo, todo);
    },
    [actions.TOGGLE_TODO]({ commit }, id) {
      commit(mutations.toggleTodo, id);
    },
    [actions.SET_SEARCH]({ commit }, search) {
      commit(mutations.setSearch, search);
    },
    [actions.SET_FILTER]({ commit }, filter) {
      commit(mutations.setFilter, filter);
    }
  }
};
