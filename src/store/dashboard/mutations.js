import * as _ from '../types'

const mutations = {
  [_.SET_USER_STATS] (state, item) {
    state.userStats = item
  },
  [_.DASHBOARD_ERROR] (state, error) {
    state.error = error
  }
}

export default mutations
