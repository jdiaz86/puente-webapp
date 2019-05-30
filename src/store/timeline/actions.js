import * as _ from '../types'
import { get, post, put } from '../../api/api'

const timelines = 'timelines'

const actions = {
  [_.FETCH_TIMELINE] ({ commit }, id) {
    get(timelines, id)
      .then(function (response) {
        commit(_.SET_TIMELINE, response.data)
      })
      .catch(function (error) {
        commit(_.TIMELINES_ERROR, error)
      })
  },
  [_.FETCH_TIMELINES] ({ commit }) {
    get(timelines)
      .then(function (response) {
        commit(_.SET_TIMELINES, response.data)
      })
      .catch(function (error) {
        commit(_.TIMELINES_ERROR, error)
      })
  },
  [_.SAVE_TIMELINE] ({ commit }, { item }) {
    if (item.id) {
      put(`${timelines}/${item.id}`, item)
        .then(function (response) {
          commit(_.SAVE_TIMELINE_SUCCESS)
        })
        .catch(function (error) {
          commit(_.SAVE_TIMELINE_ERROR, error.response.data)
        })
    } else {
      post(`${timelines}/new`, item)
        .then(function (response) {
          commit(_.SAVE_TIMELINE_SUCCESS)
        })
        .catch(function (error) {
          commit(_.SAVE_TIMELINE_ERROR, error.response.data)
        })
    }
  }
}

export default actions
