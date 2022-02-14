import { createStore } from 'vuex'
import contactModule from '@/store/modules/contact.module.js'

// Create a new store instance.
const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  modules: {
    contactModule,
  },
})

export default store
