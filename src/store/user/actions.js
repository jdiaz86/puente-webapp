import * as _ from '../types'
import { get, put } from '../../api/api'

const users = 'users'

const actions = {
  [_.FETCH_USER] ({ commit }, id) {
    get(users, id)
      .then(function (response) {
        commit(_.SET_USER, response.data)
      })
      .catch(function (error) {
        commit(_.USERS_ERROR, error)
      })
  },
  [_.FETCH_USERS] ({ commit }) {
    get(users)
      .then(function (response) {
        commit(_.SET_USERS, response.data)
      })
      .catch(function (error) {
        commit(_.USERS_ERROR, error)
      })
  },
  [_.FETCH_LOGGED_IN_USER] ({ commit }) {
    get(users, 'me')
      .then(function (response) {
        commit(_.SET_LOGGED_IN_USER, response.data)
      })
      .catch(function (error) {
        commit(_.HOME_ERROR, error)
      })
  },
  [_.SAVE_USER] ({ commit }, { user }) {
    put(`${users}/me`, user)
      .then(function (response) {
        commit(_.SAVE_USER_SUCCESS)
      })
      .catch(function (error) {
        commit(_.SAVE_USER_ERROR, error.response.data)
      })
  },
  [_.SAVE_USER_PASSWORD] ({ commit }, password) {
    put(`${users}/changepassword`, { password })
      .then(function (response) {
        commit(_.SAVE_USER_PASSWORD_SUCCESS)
      })
      .catch(function (error) {
        commit(_.SAVE_USER_PASSWORD_ERROR, error.response.data)
      })
  }
}

export default actions
