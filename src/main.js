// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

// import vuesax
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css'; //vuesax styles
Vue.use(Vuesax)

// import modules to use as components
import Task from './components/Task';
// Define components here
Vue.component('v-task', Task)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
