import { Dialog, Notify, Loading } from 'quasar'

export function successNotify (message, position = 'top') {
  Notify.create({
    message,
    position,
    type: 'positive'
  })
}

export function errorNotify (message, position = 'top') {
  Notify.create({
    message,
    position,
    type: 'negative'
  })
}

export function showLoading (message) {
  Loading.show({
    message
  })
}

export function hideLoading () {
  Loading.hide()
}

export function queryView () {
  return {
    mode: 'view'
  }
}

export function queryEdit () {
  return {
    mode: 'edit'
  }
}

export async function confirmDialog (title, message, ok, cancel) {
  const dialog = await Dialog.create({ title, message, ok, cancel }).then(() => { return 1 }).catch(() => { return 0 })
  return dialog
}
