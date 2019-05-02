import * as _ from '../types'

const mutations = {
  [_.SET_OUTCOME] (state, item) {
    state.saving = false
    state.item = item
  },
  [_.SET_OUTCOMES] (state, items) {
    for (let item of items) {
      item.outcomeCategoryName = item.outcomeCategory.name
    }
    state.items = items
  },
  [_.OUTCOMES_ERROR] (state, error) {
    state.error = error
  },
  [_.SAVE_OUTCOME_ERROR] (state, errors) {
    state.errors = errors
    state.saving = true
  },
  [_.SAVE_OUTCOME_SUCCESS] (state) {
    state.saving = true
  },
  [_.SAVE_OUTCOME_FINISH] (state) {
    state.saving = false
    state.error = null
    state.errors = []
  }
}

export default mutations
