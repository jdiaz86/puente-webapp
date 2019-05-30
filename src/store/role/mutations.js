import * as _ from '../types'

const mutations = {
  [_.SET_ROLES] (state, items) {
    state.items = items
  },
  [_.ROLE_ERROR] (state, error) {
    state.error = error
  },
  [_.ROLES_ERROR] (state, error) {
    state.error = error
  }
}

export default mutations
