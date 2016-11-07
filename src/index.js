import Vue from 'vue';

import './reset.css';
import App from './App';
import router from './router';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
