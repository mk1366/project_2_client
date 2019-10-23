'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
'use strict'
// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const appointmentsevents = require('./appointments/events')

$(() => {
  // when the page starts, hide these
  // $('.signout').hide()

  $('#create_Appointment').hide()
  $('#update_Appointment').hide()
  $('#show-Appointment').hide()
  $('#delete-Appointment').hide()
  $('#change_password').hide()
  $('#sign-out').hide()
  $('#myHeader').hide()

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onchangepassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create_Appointment').on('submit', appointmentsevents.onCreateAppointments)
  $('#update_Appointment').on('submit', appointmentsevents.onUpdateAppointments)
  $('#show-Appointment').on('submit', appointmentsevents.onGetAppointments)
  $('#delete-Appointment').on('submit', appointmentsevents.onDeleteAppointments)
})
