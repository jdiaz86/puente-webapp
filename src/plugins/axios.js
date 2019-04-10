import axios from 'axios'

export default ({ Vue }) => {
  let baseURL = null
  if (process.env.NODE_ENV === 'development') {
    baseURL = `${process.env.BACKEND_PROTOCOL_DEV}://${process.env.BACKEND_HOSTNAME_DEV}:${process.env.BACKEND_PORT_DEV}/`
  } else if (process.env.NODE_ENV === 'production') {
    baseURL = `${process.env.BACKEND_PROTOCOL_PROD}://${process.env.BACKEND_HOSTNAME_PROD}/`
  }

  Vue.prototype.$axios = axios.create({
    baseURL
  })
}
