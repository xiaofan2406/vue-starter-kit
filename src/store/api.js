// TODO use firebase
/* eslint-disable global-require */
import axios from 'axios';
// import { v4 } from 'node-uuid';
import wunderlist from 'config/wunderlist';


let todos = [
  { id: '778d5b69-86dd-4418-b1f9-85f0a05d4083', text: 'Jest snapshot testing', completed: false },
  { id: 'ab076612-d248-4575-a3ba-c574570ddd9b', text: 'next.js server rendering', completed: false },
  { id: 'ab6350c2-84a5-4da4-9c74-53fe0fb87ccc', text: 'React Fiber', completed: false },
  { id: 'a5b883b9-3ec4-40ab-84b2-8987024bf235', text: 'Redux store, reducer, action and selectors', completed: true },
  { id: '004cab68-9d98-4f01-8dd6-63e21559964a', text: 'Mobx store, action and computed', completed: true }
];


// fake server request delay
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function getDefaultList() {
  const token = localStorage.getItem('token');
  const list = (await axios.get(`${wunderlist.apiUrl}/lists`, {
    headers: {
      'X-Client-ID': wunderlist.clientId,
      'X-Access-Token': token
    }
  })).data[0];

  return list.id;
}

export async function getTodos(listId) {
  const token = localStorage.getItem('token');
  const todoss = (await axios.get(`${wunderlist.apiUrl}/tasks`, {
    params: {
      list_id: listId
    },
    headers: {
      'X-Client-ID': wunderlist.clientId,
      'X-Access-Token': token
    }
  })).data;

  return todoss;
}


export async function addTodo(text, listId) {
  const token = localStorage.getItem('token');

  const res = await axios.post(`${wunderlist.apiUrl}/tasks`, {
    list_id: listId,
    title: text
  }, {
    headers: {
      'X-Client-ID': wunderlist.clientId,
      'X-Access-Token': token
    }
  });

  return {
    id: res.data.id,
    text: res.data.title,
    completed: res.data.completed
  };
}


export const toggleTodo = id => new Promise((resolve) => {
  delay(1000).then(() => {
    const matched = todos.filter(todo => todo.id === id)[0];
    matched.completed = !matched.completed;
    resolve(true);
  });
});


export const removeTodo = id => new Promise((resolve) => {
  delay(1000).then(() => {
    todos = todos.filter(todo => todo.id !== id);
    resolve(true);
  });
});
