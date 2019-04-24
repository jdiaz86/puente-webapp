import * as _ from '../types'
import { get, put, post } from '../../api/api'

const courses = 'courses'

const actions = {
  [_.FETCH_COURSE] ({ commit }, id) {
    get(courses, id)
      .then(function (response) {
        commit(_.SET_COURSE, response.data)
      })
      .catch(function (error) {
        commit(_.COURSES_ERROR, error)
      })
  },
  [_.FETCH_COURSES] ({ commit }) {
    get(courses)
      .then(function (response) {
        commit(_.SET_COURSES, response.data)
      })
      .catch(function (error) {
        commit(_.COURSES_ERROR, error)
      })
  },
  [_.SAVE_COURSE] ({ commit }, { item }) {
    if (item.id) {
      put(`${courses}/${item.id}`, item)
        .then(function (response) {
          commit(_.SAVE_COURSE_SUCCESS)
        })
        .catch(function (error) {
          commit(_.SAVE_COURSE_ERROR, error.response.data)
        })
    } else {
      post(`${courses}/new`, item)
        .then(function (response) {
          commit(_.SAVE_COURSE_SUCCESS)
        })
        .catch(function (error) {
          commit(_.SAVE_COURSE_ERROR, error.response.data)
        })
    }
  }
}

export default actions
