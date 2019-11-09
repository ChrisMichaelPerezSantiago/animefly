import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import {plugin} from 'vue-function-api';
import hooks from '@u3u/vue-hooks';
import BootstrapVue from 'bootstrap-vue';
require('./assets/css/style.css')
require('./db/models/index');


Vue.config.productionTip = false;

Vue.use(hooks);
Vue.use(plugin);
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
