import * as _ from '../types'
import { get, getRequestParam } from '../../api/api'

const dashboard = 'dashboard'

const actions = {
  [_.FETCH_USER_STATS] ({ commit }, { dashboardReq }) {
    get(dashboard, 'userStats', getRequestParam(dashboardReq))
      .then(function (response) {
        commit(_.SET_USER_STATS, response.data)
      })
      .catch(function (error) {
        commit(_.DASHBOARD_ERROR, error)
      })
  }
}

export default actions
