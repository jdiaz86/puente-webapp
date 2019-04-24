import * as _ from '../types'

const mutations = {
  [_.SET_COURSE] (state, course) {
    state.saving = false
    state.course = course
  },
  [_.SET_COURSES] (state, courses) {
    /* for (let course of courses) {
      course.courseStatusName = course.courseStatus.name
      course.courseStatusId = course.courseStatus.id
    } */
    state.courses = courses
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
    state.changingPassword = false
    state.error = null
    state.errors = []
  }
}

export default mutations
