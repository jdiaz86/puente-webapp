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
    { value: 1, label: '1ro Primaria' },
    { value: 2, label: '2do Primaria' },
    { value: 3, label: '3ro Primaria' },
    { value: 4, label: '4to Primaria' },
    { value: 5, label: '5to Primaria' },
    { value: 6, label: '6to Primaria' },
    { value: 7, label: '1ro Basico' },
    { value: 8, label: '2do Básico' },
    { value: 9, label: '3ro Básico' }
  ]
}

export function courseOptions () {
  return [
    { value: 'Matemática', label: 'Matemática' },
    { value: 'Lenguaje', label: 'Lenguaje' },
    { value: 'Ciencias Naturales', label: 'Ciencias Naturales' },
    { value: 'Física', label: 'Física' },
    { value: 'Estudios Sociales', label: 'Estudios Sociales' },
    { value: 'Emprendimiento', label: 'Emprendimiento' }
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

export function yearOptions () {
  return [
    { value: 2017, label: '2017' },
    { value: 2018, label: '2018' },
    { value: 2019, label: '2019' },
    { value: 2020, label: '2020' },
    { value: 2021, label: '2021' },
    { value: 2022, label: '2022' }
  ]
}

export function countryOptions () {
  return countries.map(country => ({ label: country.country, value: country.country }))
}

export function stateOptions (countryState = 'Guatemala') {
  return countries.filter(country => country.country === countryState)[0].states.map(state => ({ label: state, value: state }))
}

export function currency (number, currency = 'Q') {
  if (!number) {
    return currency + ' ' + '0.0'
  }
  return currency + ' ' + Number(number).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}

export function generateDateAxisGraph (startDate, endDate) {
  let _break = false
  let i = 0
  let finishDate
  endDate = formatDate(new Date(endDate.getFullYear(), endDate.getMonth() + i, 1), 'MMM-YY')
  let dateArray = []
  while (!_break) {
    finishDate = formatDate(new Date(startDate.getFullYear(), startDate.getMonth() + i, 1), 'MMM-YY')
    dateArray.push(finishDate)
    if (finishDate === endDate) {
      _break = true
    }
    i++
  }

  return dateArray
}

export function defaultChartOptions (type, yAxisTitle, tooltip, xAxisCategories, series, title = '', subtitle = '') {
  return {
    chart: { type },
    title: { text: title },
    subtitle: { text: subtitle },
    xAxis: { categories: xAxisCategories },
    yAxis: { title: { text: yAxisTitle } },
    tooltip,
    series
  }
}

export function getEntityById (array, id) {
  return array.filter(obj => obj.id === id)[0]
}

export function removeUndefined (array) {
  return array.filter(obj => obj !== undefined)
}
