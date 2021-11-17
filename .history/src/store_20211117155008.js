import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: ""
  },
  mutations: {
    saveNum(state, num) {
      state.num = num
    }
  },
  actions: {

  }
})
