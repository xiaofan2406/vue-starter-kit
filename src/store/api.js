// TODO use firebase
/* eslint-disable global-require */
import axios from 'axios';
// import { v4 } from 'node-uuid';
import wunderlist from 'config/wunderlist';


export async function getDefaultList(token) {
  const list = (await axios.get(`${wunderlist.apiUrl}/lists`, {
    headers: {
      'X-Client-ID': wunderlist.clientId,
      'X-Access-Token': token
    }
  })).data[0];

  return list.id;
}

const mapResToStore = data => ({
  id: data.id,
  text: data.title,
  completed: data.completed,
  revision: data.revision
});


export async function getTodos(listId, token) {
  const active = (await axios.get(`${wunderlist.apiUrl}/tasks`, {
    params: {
      list_id: listId
    },
    headers: {
      'X-Client-ID': wunderlist.clientId,
      'X-Access-Token': token
    }
  })).data;
  const completed = (await axios.get(`${wunderlist.apiUrl}/tasks`, {
    params: {
      list_id: listId,
      completed: true
    },
    headers: {
      'X-Client-ID': wunderlist.clientId,
      'X-Access-Token': token
    }
  })).data;


  return [...active, ...completed].map(mapResToStore);
}


export async function addTodo(text, listId, token) {
  const res = await axios.post(`${wunderlist.apiUrl}/tasks`, {
    list_id: listId,
    title: text
  }, {
    headers: {
      'X-Client-ID': wunderlist.clientId,
      'X-Access-Token': token
    }
  });

  return mapResToStore(res.data);
}


export async function toggleTodo(id, revision, completed, token) {
  const res = await axios.patch(`${wunderlist.apiUrl}/tasks/${id}`, {
    revision,
    completed
  }, {
    headers: {
      'X-Client-ID': wunderlist.clientId,
      'X-Access-Token': token
    }
  });

  return mapResToStore(res.data);
}


export async function removeTodo(id, revision, token) {
  const res = await axios.delete(`${wunderlist.apiUrl}/tasks/${id}?revision=${revision}`, {
    headers: {
      'X-Client-ID': wunderlist.clientId,
      'X-Access-Token': token
    }
  });

  return res.status === 204;
}
