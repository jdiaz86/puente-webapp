import * as _ from '../types'
import { get, post, put } from '../../api/api'

const outcomeCategorys = 'outcomeCategorys'

const actions = {
  [_.FETCH_OUTCOMECATEGORY] ({ commit }, id) {
    get(outcomeCategorys, id)
      .then(function (response) {
        commit(_.SET_OUTCOMECATEGORY, response.data)
      })
      .catch(function (error) {
        commit(_.OUTCOMECATEGORYS_ERROR, error)
      })
  },
  [_.FETCH_OUTCOMECATEGORYS] ({ commit }) {
    get(outcomeCategorys)
      .then(function (response) {
        commit(_.SET_OUTCOMECATEGORYS, response.data)
      })
      .catch(function (error) {
        commit(_.OUTCOMECATEGORYS_ERROR, error)
      })
  },
  [_.SAVE_OUTCOMECATEGORY] ({ commit }, { item }) {
    if (item.id) {
      put(`${outcomeCategorys}/${item.id}`, item)
        .then(function (response) {
          commit(_.SAVE_OUTCOMECATEGORY_SUCCESS)
        })
        .catch(function (error) {
          commit(_.SAVE_OUTCOMECATEGORY_ERROR, error.response.data)
        })
    } else {
      post(`${outcomeCategorys}/new`, item)
        .then(function (response) {
          commit(_.SAVE_OUTCOMECATEGORY_SUCCESS)
        })
        .catch(function (error) {
          commit(_.SAVE_OUTCOMECATEGORY_ERROR, error.response.data)
        })
    }
  }
}

export default actions
