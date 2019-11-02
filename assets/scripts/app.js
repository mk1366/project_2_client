
'use strict'
// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const appointmentsevents = require('./appointments/events')

$(() => {
  // when the page starts, hide these
  // $('.signout').hide()


  $('#create_appointment_label').hide()
  $('#update_Appointment').hide()
  $('#Appointments-history').hide()
   $('#delete_appointment_label').hide()
  $('#change_password_label').hide()
   $('.sign-out').hide()



  $('#sign_up').on('submit', authEvents.onSignUp)
  $('#sign-in-modal').on('submit', authEvents.onSignIn)
  $('#change_password-modal').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create_Appointment').on('submit', appointmentsevents.onCreateAppointments)
  $('#update_Appointment_form').on('submit', appointmentsevents.onUpdateAppointments)
  $('#Appointments-history').on('click', appointmentsevents.onGetAppointments)
  // $('#get-Appointment').on('submit', appointmentsevents.onGetAppointment)
  $('#delete-Appointment').on('submit', appointmentsevents.onDeleteAppointments)
})
