import "core-js/fn/object/assign";
import Vue from 'vue';
import router from './router';
import store from './store/store';
import  App from './App.vue';


var app = new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router,

  
});
