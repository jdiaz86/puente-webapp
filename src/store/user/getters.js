const getters = {
  isAdmin: (state) => {
    const roles = state.user.roles
    return roles.filter(role => role.code === 'ADM').length !== 0
  },
  isTeacher: (state) => {
    const roles = state.user.roles
    return roles.filter(role => role.code === 'DCN').length !== 0
  },
  isDonor: (state) => {
    const roles = state.user.roles
    return roles.filter(role => role.code === 'DNT').length !== 0
  }
}

export default getters
