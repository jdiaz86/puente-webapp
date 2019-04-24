import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist'
import localforage from 'localforage'

import loginModule from './login'
import userModule from './user'
import homeModule from './home'
import courseModule from './course'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: localforage,
  key: 'punte-webapp'
})

/* If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      loginModule,
      userModule,
      homeModule,
      courseModule
    },
    plugins: [vuexLocal.plugin]
  })

  return Store
}
