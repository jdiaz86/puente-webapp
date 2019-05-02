import { Dialog, Notify, Loading, LocalStorage, date } from 'quasar'
import countries from './countries'

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

export function getStorage (key) {
  return LocalStorage.get.item(key)
}

export function setStorage (key, value) {
  LocalStorage.set(key, value)
}

export function removeStorage (key) {
  LocalStorage.remove(key)
}

export function formatDate (value, format = 'DD-MMM-YYYY') {
  return date.formatDate(value, format)
}

export function gradeOptions () {
  return [
    { value: '1', label: '1ro' },
    { value: '2', label: '2do' },
    { value: '3', label: '3ro' },
    { value: '4', label: '4to' },
    { value: '5', label: '5to' },
    { value: '6', label: '6to' }
  ]
}

export function payMethodOptions () {
  return [
    { value: 'TRANSFERENCIA', label: 'Transferencia Bancaria' },
    { value: 'TARJETA_CREDITO', label: 'Tarjeta de Crédito' },
    { value: 'TARJETA_DEBITO', label: 'Tarjeta de Débito' }
  ]
}

export function categoryTypeOptions () {
  return [
    { value: 'CAPITAL', label: 'Capital' },
    { value: 'OPERATIVO', label: 'Operativo' }
  ]
}

export function countryOptions () {
  return countries.map(country => ({ label: country.country, value: country.country }))
}

export function stateOptions (countryState = 'Guatemala') {
  return countries.filter(country => country.country === countryState)[0].states.map(state => ({ label: state, value: state }))
}
