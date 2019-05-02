import * as _ from '../types'

const mutations = {
  [_.CHANGE_USER_STATUS_SUCCESS] (state) {
    state.error = null
    state.errors = []
    state.changingStatus = true
  },
  [_.CHANGE_USER_STATUS_ERROR] (state, error) {
    state.error = error
    state.changingStatus = true
  },
  [_.CHANGE_USER_STATUS_FINISH] (state) {
    state.changingStatus = false
    state.error = null
    state.errors = []
  },
  [_.SET_LOGGED_IN_USER] (state, item) {
    state.saving = false
    state.loginUser = item
  },
  [_.SET_USER] (state, item) {
    state.saving = false
    state.item = item
  },
  [_.SET_USERS] (state, items) {
    /* for (let user of users) {
      user.userStatusName = user.userStatus.name
      user.userStatusId = user.userStatus.id
    } */
    state.items = items
  },
  [_.USER_ERROR] (state, error) {
    state.error = error
  },
  [_.USERS_ERROR] (state, error) {
    state.error = error
  },
  [_.SAVE_USER_ERROR] (state, errors) {
    state.errors = errors
    state.saving = true
  },
  [_.SAVE_USER_SUCCESS] (state) {
    state.saving = true
  },
  [_.SAVE_USER_PASSWORD_ERROR] (state, errors) {
    state.errors = errors
    state.changingPassword = true
  },
  [_.SAVE_USER_PASSWORD_SUCCESS] (state) {
    state.changingPassword = true
  },
  [_.SAVE_USER_FINISH] (state) {
    state.saving = false
    state.changingPassword = false
    state.error = null
    state.errors = []
  }
}

export default mutations
