import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import settings from './modules/settings'
import app from './modules/app'
import getters from './getters'
Vue.use(Vuex)

// 暴露并创建   
export default new Vuex.Store({
  // modules: 存放模块
  modules: {
    tab,
    settings,
    app
  },
  getters
})