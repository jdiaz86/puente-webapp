import * as _ from '../types'
// import { formatDate } from '../../util/util'

const mutations = {
  [_.SET_USER_STATS] (state, item) {
    state.userStats = item
  },
  [_.DASHBOARD_ERROR] (state, error) {
    state.error = error
  },
  [_.GET_DOWNLOAD_STATS] (state, data) {
    const contentType = 'application/octet-stream'
    let fileName = 'graphReport' + '.pdf'
    // let responseType = { responseType: 'arraybuffer' }
    let a = document.createElement('a')
    let file = new Blob([data], { type: contentType })

    if (navigator.msSaveBlob) {
      // greater than IE 9
      navigator.msSaveBlob(file, fileName)
    } else {
      const fileURL = URL.createObjectURL(file, { oneTimeOnly: false })
      a.download = fileName
      a.href = fileURL
      a.style.display = 'none'
      document.body.appendChild(a)
      a.click()
      a.parentNode.removeChild(a)
    }
    state.graphReport = true
  }
}

export default mutations
