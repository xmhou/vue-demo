import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {// 存放状态    
    count: 1
  },
  mutations: {// 更改state中状态的逻辑    
    increment (state) {
      state.count++
    },
    minus(state) {
      state.count--;
    }
  },
  actions: {// 提交mutation    
    increment (context) {
      context.commit('increment')
    },
    minus(context) {
      context.commit('minus')
    }
  },
  getters: {// state的计算属性
    
    message(state) {
      return "当前count的值为" + state.count
    }
  },
  modules: {
  }
})
