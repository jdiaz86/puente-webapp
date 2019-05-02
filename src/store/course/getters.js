const getters = {
  coursesOptions: (state) => {
    let courses = state.items
    let options = []

    if (courses) {
      for (let course of courses) {
        options.push({ label: course.name + ' - ' + course.code, value: course })
      }
    }

    return options
  }
}

export default getters
