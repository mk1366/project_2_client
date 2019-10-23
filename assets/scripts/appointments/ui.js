'user strict'
const store = require('../store')
// const showAppointments = require('../templates/app.js)

const successMessage = function (newText) {
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

const onUpdateAppointments = function (data) {
  successMessage('success')
  $('#update_Appointment').text('')
  console.log('success')
}

const onDeleteAppointments = function (data) {
  successMessage('success')
  $('#delete-Appointment').text('')
  console.log('delete')
}

const onGetAppointmentsSuccess = function (data) {
  $('.Appointments-history').html('')

  data.appointments.forEach(appointment => {
    const appointmentsHTML = (`
   <p>name:${appointment.name}</p>
   <p>trainer:${appointment.trainer}</p>
   <p>gym:${appointment.gym}</p>
   <p>location:${appointment.location}</p>
   <p>date:${appointment.starts_on}</p>
   <p>id:${appointment.id}</p>
   <br>
   `)
    $('.Appointments-history').append(appointmentsHTML)
  })
}

module.exports = {
  failureMessage,
  successMessage,
  onCreateAppointments,
  onGetAppointmentsSuccess,
  onUpdateAppointments,
  onDeleteAppointments

}
