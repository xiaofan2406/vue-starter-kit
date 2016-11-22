import Vue from 'vue';

import * as api from './api';


class Todo {
  constructor(init = {}) {
    this.id = init.id;
    this.text = init.text;
    this.completed = init.completed;
    this.revision = init.revision;
  }

  rebuild(data) {
    this.id = data.id;
    this.text = data.text;
    this.completed = data.completed;
    this.revision = data.revision;
  }
}


class TodoStore {
  constructor(init = {}) {
    this.byId = init.byId || {};
    this.filter = init.filter || '';
    this.search = init.search || '';
    this.listId = init.listId || null;
  }

  static withAuth(authStore) {
    this.auth = authStore;
  }

  async fetchTodos() {
    const token = TodoStore.auth.token;

    this.listId = await api.getDefaultList(token);
    api.getTodos(this.listId, token)
    .then((todos) => {
      for (const todo of todos) {
        Vue.set(this.byId, todo.id, new Todo(todo));
      }
    });
  }

  addTodo(text) {
    const token = TodoStore.auth.token;

    api.addTodo(text, this.listId, token)
    .then(todo => Vue.set(this.byId, todo.id, new Todo(todo)));
  }

  removeTodo(id) {
    const token = TodoStore.auth.token;
    const revision = this.byId[id].revision;

    api.removeTodo(id, revision, token)
    .then((res) => {
      if (res) {
        Vue.delete(this.byId, id);
      }
    });
  }

  toggleTodo(id) {
    const token = TodoStore.auth.token;
    const revision = this.byId[id].revision;
    const completed = !this.byId[id].completed;

    api.toggleTodo(id, revision, completed, token)
    .then((res) => {
      if (res) {
        this.byId[id].rebuild(res);
      }
    });
  }

  setSearch(search) {
    this.search = search;
  }

  setFilter(filter) {
    this.filter = filter;
  }

  get todos() {
    return Object.keys(this.byId).map(id => this.byId[id]);
  }

  get visibleTodos() {
    let filtered = [];
    switch (this.filter) {
      case '':
        filtered = Object.keys(this.byId).map(id => this.byId[id]);
        break;
      case 'active':
        filtered = Object.keys(this.byId).filter(id => this.byId[id].completed === false)
          .map(id => this.byId[id]);
        break;
      case 'completed':
        filtered = Object.keys(this.byId).filter(id => this.byId[id].completed === true)
          .map(id => this.byId[id]);
        break;
      default:
        filtered = Object.keys(this.byId).map(id => this.byId[id]);
        break;
    }
    const reg = new RegExp(this.search);
    return filtered.filter(todo => reg.test(todo.name));
  }
}


export default TodoStore;
