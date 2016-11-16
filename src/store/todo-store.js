import Vue from 'vue';
import { v4 } from 'node-uuid';

import * as api from './api';


class Todo {
  constructor(init = {}) {
    this.id = init.id || v4();
    this.text = init.text;
    this.completed = init.completed || false;
  }

  toggle() {
    this.completed = !this.completed;
  }
}


class TodoStore {
  constructor(init = {}) {
    this.byId = init.byId || {};
    this.filter = init.filter || '';
    this.search = init.search || '';
    this.listId = init.listId || null;
  }

  async fetchTodos() {
    this.listId = await api.getDefaultList();
    api.getTodos(this.listId)
    .then((todos) => {
      for (const todo of todos) {
        Vue.set(this.byId, todo.id, new Todo(todo));
      }
    });
  }

  addTodo(text) {
    api.addTodo(text, this.listId)
    .then(todo => Vue.set(this.byId, todo.id, new Todo(todo)));
  }

  removeTodo(id) {
    api.removeTodo(id)
    .then((res) => {
      if (res) {
        Vue.delete(this.byId, id);
      }
    });
  }

  toggleTodo(id) {
    api.toggleTodo(id)
    .then((res) => {
      if (res) {
        this.byId[id].toggle();
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
