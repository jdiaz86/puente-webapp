import * as _ from '../types'
import { get, put, post } from '../../api/api'

const incomes = 'incomes'

const actions = {
  [_.FETCH_INCOME] ({ commit }, id) {
    get(incomes, id)
      .then(function (response) {
        commit(_.SET_INCOME, response.data)
      })
      .catch(function (error) {
        commit(_.INCOMES_ERROR, error)
      })
  },
  [_.FETCH_INCOMES] ({ commit }) {
    get(incomes)
      .then(function (response) {
        commit(_.SET_INCOMES, response.data)
      })
      .catch(function (error) {
        commit(_.INCOMES_ERROR, error)
      })
  },
  [_.FETCH_INCOMES_BY_ID] ({ commit }, id) {
    get(`${incomes}/list`, id)
      .then(function (response) {
        commit(_.SET_INCOMES, response.data)
      })
      .catch(function (error) {
        commit(_.INCOMES_ERROR, error)
      })
  },
  [_.SAVE_INCOME] ({ commit }, { item }) {
    if (item.id) {
      put(`${incomes}/${item.id}`, item)
        .then(function (response) {
          commit(_.SAVE_INCOME_SUCCESS)
        })
        .catch(function (error) {
          commit(_.SAVE_INCOME_ERROR, error.response.data)
        })
    } else {
      post(`${incomes}/new`, item)
        .then(function (response) {
          commit(_.SAVE_INCOME_SUCCESS)
        })
        .catch(function (error) {
          commit(_.SAVE_INCOME_ERROR, error.response.data)
        })
    }
  }
}

export default actions
