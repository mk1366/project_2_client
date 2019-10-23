
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('../store.js')

const onGetAppointments = function (event) {
  event.preventDefault()
  api.getAppointments()
    .then(ui.onGetAppointmentsSuccess)
    .catch(ui.failure)
}
const onCreateAppointments = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.createAppointments(data)
    .then(console.log)
    .then(ui.getCreateSuccess)
    .then(() => onGetAppointments(event))
    .catch(ui.failure)
}
const onGetAppointment = (event) => {
  event.preventDefault()
  console.log()
  api.getAppointment()
    .then(ui.getAppointmentsSuccess)
    .catch(ui.failure)
}

const onUpdateAppointments = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  store.id = $(event.target).data('id')
  console.log(data)
  api.updateAppointment(data)
    .then(ui.getUpdateSuccess)
    .then(() => onGetAppointments(event))
    .catch(ui.failure)
}

const onDeleteAppointments = (event) => {
  event.preventDefault()
  // console.log($('#remove').val())
  // const id = $('#remove').data('id')
  const id = $('#remove').val()
  api.deleteAppointment(id)
    .then(ui.getDeleteSuccess)
    .then(() => onGetAppointments(event))
    .catch(ui.failure)
}

const onClearAppointments = (event) => {
  event.preventDefault()
  ui.clearAppointments()
}

module.exports = {
  onGetAppointments,
  onGetAppointment,
  onDeleteAppointments,
  onUpdateAppointments,
  onCreateAppointments,
  onClearAppointments
}
