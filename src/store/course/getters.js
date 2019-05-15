import * as _ from '../../util/util'

const getters = {
  coursesOptions: (state) => {
    let courses = state.items
    let options = []
    let grade = ''

    if (courses) {
      for (let course of courses) {
        grade = _.gradeOptions().find(el => el.value === course.grade) ? _.gradeOptions().find(el => el.value === course.grade).label : null
        options.push({ label: course.name + ' - ' + grade, value: course, grade })
      }
    }

    options.sort((a, b) => a.grade.localeCompare(b.grade))
    return options
  }
}

export default getters
