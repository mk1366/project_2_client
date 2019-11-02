'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('../store.js')


const onCreateAppointments = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  console.log(store)
  api.createAppointments(formData)
    .then(ui.getCreateSuccess)
    .catch(ui.getCreateFailure)
}

// const formData = getFormFields(event.target)
// console.log(formData)
// api.createAppointments(formData)
//   .then(console.log)
//   .then(ui.getCreateSuccess)
//   .then(() => onGetAppointments(event))
//   .catch(ui.getCreateFailure)

const onGetAppointments = function (event) {
  event.preventDefault()
  api.getAppointments()
    .then(ui.onGetAppointmentsSuccess)
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
    .catch(ui.getUpdateFailure)
}


const onDeleteAppointments = (event) => {
  event.preventDefault()
  // console.log($('#remove').val())
  const id = $('#remove').val()
  console.log(id)
  // const id = $('#remove').val()
  api.deleteAppointment(id)
    .then(ui.getDeleteSuccess)
    .then(() => onGetAppointments(event))
    .catch(ui.getDeleteFailure)
}


// const form = event.target
  // const formData = getFormFields(form)




// const onSelectAppointments = (event) =>
//   event.preventDefault()
// const id = $('#slect').val()
// api.selectAppointment(id)
//   .then(ui.selectAppointment)
//   .then(() => onSelectAppointments(event))
//   .catch(ui.failure)

const onClearAppointments = (event) => {
     event.preventDefault()
     ui.clearAppointments()
}

// const addHandlers = () => {
//   $('#getAppointmentsButton').on('click', onGetAppointments)
//   $('#getAppointmentButton').on('click', onGetAppointment)
//   $('#getcreateAppointmentButton').on('click', onGetAppointments)
//   // $('#clearAppointmentsButton').on('click', onClearAppointments)
//   $('#deleteAppointmentsButton').on('click', onGetAppointments)
//   $('#updateAppointmentsButton').on('click', onGetAppointments)
//    // $('#selectAppointmentsButton').on('click', onGetAppointments)
//   $('.content').on('click', '.delete-appointments', onDeleteAppointment)
// }


module.exports = {
  onCreateAppointments,
  onGetAppointments,
  onUpdateAppointments,
  onDeleteAppointments

}
