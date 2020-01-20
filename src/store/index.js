import Vue from 'vue'
import Vuex from 'vuex'
import global from './module/global'
import login from './module/login'
import player from './module/player'
import getters from '@/store/getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    player,
    global,
    login
  },
  getters
})

export default store

// export default new Vuex.Store({
//   state: {
//     loading: false
//   },
//   mutations: {
//     set_loading: (state, loading) => {
//       state.loading = loading
//     }
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
