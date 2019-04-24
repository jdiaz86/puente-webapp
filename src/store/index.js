import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist'
import localforage from 'localforage'

import loginModule from './login'
import userModule from './user'
import homeModule from './home'
import courseModule from './course'
import outcomeCategoryModule from './outcomeCategory'
import outcomeModule from './outcome'
import incomeModule from './income'
import courseEnrollmentModule from './courseEnrollment'
import coursePlanningModule from './coursePlanning'

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
      courseModule,
      outcomeCategoryModule,
      outcomeModule,
      incomeModule,
      courseEnrollmentModule,
      coursePlanningModule
    },
    plugins: [vuexLocal.plugin]
  })

  return Store
}
