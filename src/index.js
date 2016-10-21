import Vue from 'vue';

import './index.css';
import App from './app/App';
import router from './router';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
