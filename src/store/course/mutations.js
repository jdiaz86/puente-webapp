import * as _ from '../types'

const mutations = {
  [_.SET_COURSE] (state, item) {
    state.saving = false
    state.item = item
  },
  [_.SET_COURSES] (state, items) {
    /* for (let course of courses) {
      course.courseStatusName = course.courseStatus.name
      course.courseStatusId = course.courseStatus.id
    } */
    state.items = items
  },
  [_.COURSES_ERROR] (state, error) {
    state.error = error
  },
  [_.SAVE_COURSE_ERROR] (state, errors) {
    state.errors = errors
    state.saving = true
  },
  [_.SAVE_COURSE_SUCCESS] (state) {
    state.saving = true
  },
  [_.SAVE_COURSE_FINISH] (state) {
    state.saving = false
    state.error = null
    state.errors = []
  }
}

export default mutations
