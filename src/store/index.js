import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 暴露并创建   
export default new Vuex.Store({
  // state: 存放变量
  state: {
    count: 1,
    isCollapse: true
  },
  // mutation: 存放方法
  mutations: {
    increment (state) {
      state.count++
    },
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    
  }
  // actions: 存放异步方法
  // getters: 存放计算属性
  
  // modules: 存放模块

})