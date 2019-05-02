const getters = {
  categoryOptions: (state) => {
    const categories = state.items

    let options = []

    if (categories) {
      for (let category of categories) {
        options.push({ label: category.name, value: category })
      }
    }

    return options
  }
}

export default getters
