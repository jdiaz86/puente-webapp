import * as _ from '../types'

const mutations = {
  [_.SET_INCOME] (state, item) {
    state.saving = false
    state.item = item
  },
  [_.SET_INCOMES] (state, items) {
    for (let item of items) {
      item.donorName = item.user.username
    }
    state.items = items
  },
  [_.INCOMES_ERROR] (state, error) {
    state.error = error
  },
  [_.SAVE_INCOME_ERROR] (state, errors) {
    state.errors = errors
    state.saving = true
  },
  [_.SAVE_INCOME_SUCCESS] (state) {
    state.saving = true
  },
  [_.SAVE_INCOME_FINISH] (state) {
    state.saving = false
    state.error = null
    state.errors = []
  }
}

export default mutations
