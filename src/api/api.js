import Vue from 'vue'
import { LocalStorage } from 'quasar'
import * as _ from '../util/util'

const api = 'api/'

function getConfigToken () {
  return {
    headers: { 'Authorization': `bearer ${getAccessToken()}` }
  }
}

function getAccessToken () {
  let token = LocalStorage.get.item('token')
  if (!token) {
    LocalStorage.remove('token')
  } else {
    checkAccessToken(token)
  }
  return token
}

export async function checkAccessToken (token = LocalStorage.get.item('token')) {
  if (token) {
    return Vue.prototype.$axios.get(`oauth/check_token?token=${token}`).then(function (response) {
      return token
    }).catch(function () {
      _.errorNotify('Tu sesión ha expirado, por favor inicia sesión nuevamente.')
      LocalStorage.remove('token')
      return 'Error-token-expire'
    })
  }
  return 'Error-no-token-found'
}

export function authenticate (username, password) {
  const auth = {
    username: process.env.OAUTH_CLIENT,
    password: process.env.OAUTH_CLIENT_KEY
  }
  const authConfig = {
    withCredentials: true,
    auth
  }
  return Vue.prototype.$axios.post(`oauth/token?grant_type=password&username=${username}&password=${password}`, {}, authConfig)
}

export function logout () {
  return post('users/logout')
}

export function get (endpoint, param = '', reqs = '') {
  return Vue.prototype.$axios.get(`${api}${endpoint}/${param}${reqs}`, getConfigToken())
}

export function post (endpoint, body) {
  return Vue.prototype.$axios.post(`${api}${endpoint}/`, body, getConfigToken())
}

export function put (endpoint, body) {
  return Vue.prototype.$axios.put(`${api}${endpoint}/`, body, getConfigToken())
}

export function del (endpoint) {
  return Vue.prototype.$axios.delete(`${api}${endpoint}/`, getConfigToken())
}

export function getRequestParam (object) {
  let requestParam = '?'
  for (let name in object) {
    requestParam += name + '=' + object[name] + '&'
  }
  if (requestParam.slice(-1) === '&') {
    requestParam = requestParam.slice(0, -1)
  }
  return requestParam
}

/* function openInNewTab (url) {
  var win = window.open(url, '_blank')
  win.focus()
} */

/* export function open (endpoint) {
  openInNewTab(`${api}${endpoint}/?access_token=${getAccessToken()}`)
} */
