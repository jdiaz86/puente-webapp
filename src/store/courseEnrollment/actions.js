import * as _ from '../types'
import { get, put, post } from '../../api/api'

const courseEnrollments = 'courseEnrollments'

const actions = {
  [_.FETCH_COURSE_ENROLLMENT] ({ commit }, id) {
    get(courseEnrollments, id)
      .then(function (response) {
        commit(_.SET_COURSE_ENROLLMENT, response.data)
      })
      .catch(function (error) {
        commit(_.COURSE_ENROLLMENTS_ERROR, error)
      })
  },
  [_.FETCH_COURSE_ENROLLMENTS] ({ commit }) {
    get(courseEnrollments)
      .then(function (response) {
        commit(_.SET_COURSE_ENROLLMENTS, response.data)
      })
      .catch(function (error) {
        commit(_.COURSE_ENROLLMENTS_ERROR, error)
      })
  },
  [_.SAVE_COURSE_ENROLLMENT] ({ commit }, { item }) {
    if (item.id) {
      put(`${courseEnrollments}/${item.id}`, item)
        .then(function (response) {
          commit(_.SAVE_COURSE_ENROLLMENT_SUCCESS)
        })
        .catch(function (error) {
          commit(_.SAVE_COURSE_ENROLLMENT_ERROR, error.response.data)
        })
    } else {
      post(`${courseEnrollments}/new`, item)
        .then(function (response) {
          commit(_.SAVE_COURSE_ENROLLMENT_SUCCESS)
        })
        .catch(function (error) {
          commit(_.SAVE_COURSE_ENROLLMENT_ERROR, error.response.data)
        })
    }
  }
}

export default actions
