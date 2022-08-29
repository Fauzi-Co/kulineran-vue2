import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Setting Bootstrap Vue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

// Toast Notif
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


