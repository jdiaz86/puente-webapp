import * as _ from '../types'
import { get } from '../../api/api'

const roles = 'roles'

const actions = {
  [_.FETCH_ROLES] ({ commit }) {
    get(roles)
      .then(function (response) {
        commit(_.SET_ROLES, response.data)
      })
      .catch(function (error) {
        commit(_.ROLES_ERROR, error)
      })
  }
}

export default actions
