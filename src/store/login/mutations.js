import { LocalStorage } from 'quasar'
import * as _ from '../types'

const mutations = {
  [_.AUTHENTICATION_INIT] (state) {
    state.access_token = null
    state.authenticated = false
    state.error = null
  },
  [_.AUTHENTICATION_SUCCESS] (state, authenticationDetails) {
    state.access_token = authenticationDetails.access_token
    LocalStorage.set('token', authenticationDetails.access_token)
    state.authenticated = true
  },
  [_.AUTHENTICATION_ERROR] (state, error) {
    state.access_token = null
    LocalStorage.remove('token')
    state.error = error
    state.authenticated = false
  },
  [_.LOGOUT_USER_ERROR] (state, errors) {
    state.errors = errors
  },
  [_.LOGOUT_USER_SUCCESS] (state) {
    state.authenticated = false
  }
}

export default mutations
