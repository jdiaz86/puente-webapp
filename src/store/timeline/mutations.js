import * as _ from '../types'

const mutations = {
  [_.SET_TIMELINE] (state, item) {
    state.saving = false
    state.item = item
  },
  [_.SET_TIMELINES] (state, items) {
    const leftSide = 'left'
    const rightSide = 'right'
    for (let i = 0; i < items.length; i++) {
      if (items[i - 1] && items[i - 1].side === leftSide) {
        items[i].side = rightSide
      } else {
        items[i].side = leftSide
      }
    }
    state.items = items
  },
  [_.TIMELINES_ERROR] (state, error) {
    state.error = error
  },
  [_.SAVE_TIMELINE_ERROR] (state, errors) {
    state.errors = errors
    state.saving = true
  },
  [_.SAVE_TIMELINE_SUCCESS] (state) {
    state.saving = true
  },
  [_.SAVE_TIMELINE_FINISH] (state) {
    state.saving = false
    state.error = null
    state.errors = []
  }
}

export default mutations
