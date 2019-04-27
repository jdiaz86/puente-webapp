import * as _ from '../types'

const mutations = {
  [_.SET_COURSE_ENROLLMENT] (state, item) {
    state.saving = false
    state.item = item
  },
  [_.SET_COURSE_ENROLLMENTS] (state, items) {
    for (let item of items) {
      item.username = item.user.username
      item.courseName = item.course.name
    }
    state.items = items
  },
  [_.COURSE_ENROLLMENTS_ERROR] (state, error) {
    state.error = error
  },
  [_.SAVE_COURSE_ENROLLMENT_ERROR] (state, errors) {
    state.errors = errors
    state.saving = true
  },
  [_.SAVE_COURSE_ENROLLMENT_SUCCESS] (state) {
    state.saving = true
  },
  [_.SAVE_COURSE_ENROLLMENT_FINISH] (state) {
    state.saving = false
    state.error = null
    state.errors = []
  }
}

export default mutations
