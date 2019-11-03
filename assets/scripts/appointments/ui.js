'user strict'
const store = require('../store')
const showAppointments = require('../templates/appointments-listing.handlebars')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('.modal-backdrop').remove()
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

// Appointments

const getCreateSuccess = function (data) {
  successMessage('Created')
  $('#create_Appointment').text('')
  $('#create_Appointment').modal('hide')

}


const getCreateFailure = function (data) {
  failureMessage('Not Created')
  $('#create_Appointment').text('')
  $('#create_Appointment').modal('hide')

}

const getUpdateSuccess = function (data) {
  successMessage('success')
  $('#update_Appointment_form').text('')

}
const getUpdateFailure = function (data) {
  failureMessage('Not Updated')
  $('#create_Appointment').text('')
  $('#create_Appointment').modal('hide')

}

const getDeleteSuccess = function (data) {
  successMessage('success')
  $('#delete-Appointment').text('')

}
const getDeleteFailure = function (data) {
  failureMessage('Not Deleted')
  $('#create_Appointment').text('')
  // $('#create_Appointment').modal('hide')

}

const getSelectAppointments = function (data) {
  successMessage('success')
  $('#get-Appointment').text('')
  console.log('slect')
}

// const onClearAppointments = () => {
//   $('#clear_Appointment').empty()
//   setTimeout(function () {
//   $('.CreateUpdate').text('Cleared')
// }



const onGetAppointmentsSuccess = (data) => {
  console.log('get data is ', data)
  const showAppointmentsHTML = showAppointments( { appointments: data.appointments})
  $('#display_appointments').html(showAppointmentsHTML)
}



module.exports = {
  failureMessage,
  successMessage,
  getCreateSuccess,
  getCreateFailure,
  onGetAppointmentsSuccess,
  getUpdateSuccess,
  getUpdateFailure,
  getDeleteSuccess,
  getDeleteFailure,
  getSelectAppointments





}
