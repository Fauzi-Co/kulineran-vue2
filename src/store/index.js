import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false,
    user: {
      username: '',
      userId: '',
      role: '',
    },
  },
  getters: {
    getIsLogin(state) {
      return state.isLogin
    },
    getUsername(state) {
      return state.user.username
    },
    getUserID(state) {
      return state.user.userId
    },
    getRole(state) {
      return state.user.role
    },
  },
  mutations: {
    setIsLogin(state) {
      state.isLogin = true
    },
    setUsername(state, username) {
      state.user.username = username
    },
    setUserID(state, userID) {
      state.user.userId = userID
    },
    setRole(state, role) {
      state.user.role = role
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
