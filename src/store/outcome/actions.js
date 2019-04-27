import * as _ from '../types'
import { get, put, post } from '../../api/api'

const outcomes = 'outcomes'

const actions = {
  [_.FETCH_OUTCOME] ({ commit }, id) {
    get(outcomes, id)
      .then(function (response) {
        commit(_.SET_OUTCOME, response.data)
      })
      .catch(function (error) {
        commit(_.OUTCOMES_ERROR, error)
      })
  },
  [_.FETCH_OUTCOMES] ({ commit }) {
    get(outcomes)
      .then(function (response) {
        commit(_.SET_OUTCOMES, response.data)
      })
      .catch(function (error) {
        commit(_.OUTCOMES_ERROR, error)
      })
  },
  [_.SAVE_OUTCOME] ({ commit }, { item }) {
    if (item.id) {
      put(`${outcomes}/${item.id}`, item)
        .then(function (response) {
          commit(_.SAVE_OUTCOME_SUCCESS)
        })
        .catch(function (error) {
          commit(_.SAVE_OUTCOME_ERROR, error.response.data)
        })
    } else {
      post(`${outcomes}/new`, item)
        .then(function (response) {
          commit(_.SAVE_OUTCOME_SUCCESS)
        })
        .catch(function (error) {
          commit(_.SAVE_OUTCOME_ERROR, error.response.data)
        })
    }
  }
}

export default actions
