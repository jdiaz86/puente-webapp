const getters = {
  isAdmin: (state) => {
    const roles = state.loginUser.roles
    if (roles) {
      return roles.filter(role => role.code === 'ADM').length !== 0
    }
  },
  isTeacher: (state) => {
    const roles = state.loginUser.roles
    if (roles) {
      return roles.filter(role => role.code === 'DOC').length !== 0
    }
  },
  isDonor: (state) => {
    const roles = state.loginUser.roles
    if (roles) {
      return roles.filter(role => role.code === 'DON').length !== 0
    }
  },
  userId: (state) => {
    return state.loginUser.id
  },
  userDonorsOptions: (state) => {
    let userDonors = state.items
    let options = []

    if (userDonors) {
      userDonors = userDonors.filter(userDonor => userDonor.roles.filter(role => role.code === 'DON').length !== 0)
      for (let userDonor of userDonors) {
        options.push({ label: userDonor.username + ' - ' + userDonor.lastName + ', ' + userDonor.firstName, value: userDonor })
      }
    }

    return options
  },
  userTeachersOptions: (state) => {
    let userTeachers = state.items
    let options = []

    if (userTeachers) {
      userTeachers = userTeachers.filter(userTeacher => userTeacher.roles.filter(role => role.code === 'DOC').length !== 0)
      for (let userTeacher of userTeachers) {
        options.push({ label: userTeacher.username + ' - ' + userTeacher.lastName + ', ' + userTeacher.firstName, value: userTeacher })
      }
    }

    return options
  }
}

export default getters
