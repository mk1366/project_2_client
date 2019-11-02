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
  console.log('Hello')
}


const getCreateFailure = function (data) {
  failureMessage('Not Created')
  $('#create_Appointment').text('')
  $('#create_Appointment').modal('hide')

}

const getUpdateSuccess = function (data) {
  successMessage('success')
  $('#update_Appointment_form').text('')
  console.log('success')
}
const getUpdateFailure = function (data) {
  failureMessage('Not Updated')
  $('#create_Appointment').text('')
  $('#create_Appointment').modal('hide')

}

const getDeleteSuccess = function (data) {
  successMessage('success')
  $('#delete-Appointment').text('')
  console.log('delete')
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
//     $('#clear_Appointment').text('')
//   }, 3000)
//   $('.CreateUpdate').text('Cleared')
// }

// const onGetAppointmentsSuccess = function (data) {
//   $('#Appointments-history').html('')

//   data.appointments.forEach(appointment => {
//     const appointmentsHTML = (`
//    <p>name:${appointment.name}</p>
//    <p>trainer:${appointment.trainer}</p>
//    <p>gym:${appointment.gym}</p>
//    <p>location:${appointment.location}</p>
//    <p>date:${appointment.starts_on}</p>
//    <p>id:${appointment.id}</p>
//    <br>
//    `)
//     $('#Appointments-history').append(appointmentsHTML)
//   })
// }

const onGetAppointmentsSuccess = (data) => {
  console.log('get data is ', data)
  const showAppointmentsHTML = showAppointments( { appointments: data.appointments})
  $('#display_appointments').html(showAppointmentsHTML)
}

  // setTimeout(function () {
  //   $('.CreateAlert').text('')
  // }, 3000)
  // if (showAppointments.append === '') {
  //   $('.CreateAlert').text('Nothing to show')
  // } else {
  //   $('.CreateAlert').text('Successful')
  // }

// const clearAppointments = () => {
//   $('.Show-Appointment').empty()
// }
//
// const failure = (error) => {
//   console.error(error)
// }

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

  // onClearAppointments,
  // failure



}
