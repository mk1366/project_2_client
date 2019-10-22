'user strict'
const store = require('../store')
// const showAppointments = require('../templates/app.js)

const successMessage = function (newText)  {
  $('#message').text(newText)
  $('message').removeClass('failure')
  $('#message').addClass('sucess')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onCreateAppointments = function (data) {
  successMessage('success')
  $('#create_Appointment').text('')
  console.log('Hello')
}

const onGetAppointmentsSuccess = function (data) {
  successMessage('success')
  console.log('data.appointments')
}

// const onGetAppointments = function (data) {
//   $('#show-Appointment').text('')
//   if (data.appointments.length === 0) {
//     $('#view-all-appointments-message').text('No appointment. Add appointment!')
//     $('#view-all-appointments-message').addClass('failure')
//     $('#view-all-stocks-message').append('<p></p>')
//     setTimeout(function () {
//       $('#view-all-appointments-message').text('')
//     }, 5000)
//   } else {
//     data.appointments.forEach(appointment => {
//       $('#view-all-appointments-message').removeCass('failure')
//       $('#view-all-appointments-message').append('<p>name:' + appointment.name + '</p>')
//       $('#view-all-appointments-message').append('<p>ID: ' + appointment.id + '</p>')
//       $('#view-all-appointments-message').append('<p>trainer: ' + appointment.trainer + '</p>')
//       $('#view-all-appointments-message').append('<p>location: ' + appointment.location + '</p>')
//       $('#view-all-appointments-message').append('<p>gym: ' + appointment.gym + '</p>')
//       $('#view-all-appointments-message').append('<p>starts_on: ' + appointment.starts_on + '</p>')
//    })
// }
// }

// const onDeleteAppointments = function(data)

// $('.CreateAlert').text('Successful')
//
//  $('.CreateUpdate').text('Created')
//
//   $('.CreateUpdate').text('Updated')
//
// $('.CreateUpdate').text('Deleted')
//
//  $('.CreateUpdate').text('Cleared')

module.exports = {
  failureMessage,
  successMessage,
  onCreateAppointments,
  onGetAppointmentsSuccess
  // onGetAppointments
}
