const getters = {
  rolesOptions: (state) => {
    let roles = state.items
    let options = []

    if (roles) {
      for (let role of roles) {
        options.push({ label: role.name + ' - ' + role.code, value: role.id })
      }
    }

    return options
  },
  roleList: (state) => {
    return state.items
  }
}

export default getters
