import * as _ from '../types'

const mutations = {
  [_.SET_OUTCOMECATEGORY] (state, item) {
    state.saving = false
    state.item = item
  },
  [_.SET_OUTCOMECATEGORYS] (state, items) {
    /* for (let item of items) {
      item.itemStatusName = item.itemStatus.name
      item.itemStatusId = item.itemStatus.id
    } */
    state.items = items
  },
  [_.OUTCOMECATEGORYS_ERROR] (state, error) {
    state.error = error
  },
  [_.SAVE_OUTCOMECATEGORY_ERROR] (state, errors) {
    state.errors = errors
    state.saving = true
  },
  [_.SAVE_OUTCOMECATEGORY_SUCCESS] (state) {
    state.saving = true
  },
  [_.SAVE_OUTCOMECATEGORY_FINISH] (state) {
    state.saving = false
    state.error = null
    state.errors = []
  }
}

export default mutations
