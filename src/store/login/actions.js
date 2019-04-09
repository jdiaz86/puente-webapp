import * as _ from '../types'
import { authenticate, logout } from '../../api/api'

const actions = {
  [_.AUTHENTICATE] ({ commit }, { username, password }) {
    commit(_.AUTHENTICATION_INIT)
    authenticate(username, password)
      .then(function (response) {
        commit(_.AUTHENTICATION_SUCCESS, response.data)
      })
      .catch(function (error) {
        commit(_.AUTHENTICATION_ERROR, error)
      })
  },
  [_.LOGOUT_USER] ({ commit }) {
    logout()
      .then(function (response) {
        commit(_.LOGOUT_USER_SUCCESS)
      })
      .catch(function (error) {
        commit(_.LOGOUT_USER_ERROR, error.response.data)
      })
  }
}

export default actions
