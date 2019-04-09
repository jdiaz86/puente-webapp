import * as _ from '../types'

const actions = {
  [_.CHANGE_LANGUAGE] ({ commit }, { lang }) {
    commit(_.SET_LANGUAGE, lang)
  }
}

export default actions
