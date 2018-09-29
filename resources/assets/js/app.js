import "core-js/fn/object/assign";
import Vue from 'vue';
import router from './router';
import store from './store/store';
import  App from './App.vue';
import axios from 'axios';
axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': window.csrf_token
};

var app = new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router,
  axios

  
});
