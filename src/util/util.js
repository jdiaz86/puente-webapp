import { Notify, Loading } from 'quasar'

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

/* export function changeLanguage (lang) {
  i18n.locale = lang
  i18n.fallbackLocale = lang
} */

export function changeLanguage (lang) {
}
