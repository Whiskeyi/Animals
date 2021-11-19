import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: "",  // data.json数组号
    seconds: "8000", // 页面切换时间
    color: "",
    iconNum: ""
  },
  mutations: {
    saveNum(state, num) {
      state.num = num
    },
    saveColor(state, color) {
      state.color = color
    },
    saveColor(iconNum, iconNum) {
      state.iconNum = iconNum
    }
  },
  actions: {
  }
})
