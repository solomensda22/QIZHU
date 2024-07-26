import Vue from 'vue'
// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from "./store"
import "@/assets/scss/index.scss"
import '@/assets/tailwindcss.css'

import App from './App.vue'

Vue.use(ElementUI);
Vue.prototype.$EventBus = new Vue();
Vue.config.productionTip = false



new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
