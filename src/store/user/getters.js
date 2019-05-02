const getters = {
  isAdmin: (state) => {
    const roles = state.item.roles
    return roles.filter(role => role.code === 'ADM').length !== 0
  },
  isTeacher: (state) => {
    const roles = state.item.roles
    return roles.filter(role => role.code === 'DCT').length !== 0
  },
  isDonor: (state) => {
    const roles = state.item.roles
    return roles.filter(role => role.code === 'DNT').length !== 0
  },
  userDonorsOptions: (state) => {
    let userDonors = state.items
    let options = []

    if (userDonors) {
      userDonors = userDonors.filter(userDonor => userDonor.roles.filter(role => role.code === 'DNT').length !== 0)
      for (let userDonor of userDonors) {
        options.push({ label: userDonor.username + ' - ' + userDonor.lastName + ', ' + userDonor.firstName, value: userDonor })
      }
    }

    return options
  },
  userTeachersOptions: (state) => {
    console.log(state.items)
    let userTeachers = state.items
    let options = []

    if (userTeachers) {
      userTeachers = userTeachers.filter(userTeacher => userTeacher.roles.filter(role => role.code === 'DCT').length !== 0)
      for (let userTeacher of userTeachers) {
        options.push({ label: userTeacher.username + ' - ' + userTeacher.lastName + ', ' + userTeacher.firstName, value: userTeacher })
      }
    }

    return options
  }
}

export default getters
