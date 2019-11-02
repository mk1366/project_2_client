'use strict'

const store = require('../store')
const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('.modal-backdrop').hide()
  $('form').trigger('reset')

}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('signed up successfully!')

}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
  // $('#sign-up-model').trigger('reset')
}


const onSignInSuccess = function (responseData) {
  successMessage('signed in successfully!')

  store.user = responseData.user
  $('#create_appointment_label').show()
  $('#update_Appointment').show()
  $('#Appointments-history').show()
   $('#delete_appointment_label').show()
  $('#change_password_label').show()
   $('.sign-out').show()

}


//   store.user = responseData.user
//   console.log('store is', store)
//   $('#sign-in-modal').trigger('reset')


const onSignInFailure = function () {
  failureMessage('Sign in failed')
  // $('#sign-in').trigger('reset')
}

const onchangepasswordSuccess = function () {
  successMessage('Password updated!')
  $('#message').show()
  $('#change_password-modal').trigger('reset')
}

const onchangepasswordFailure = function () {
  failureMessage('Changepassword failed')
  $('#message').show()
  $('#change_password').trigger('reset')
}
const onSignOutSuccess = function () {
  console.log('sign out')
  successMessage('Signed out successfully!')

  $('#sign-out').hide()
  $('#change_password').hide()
  $('#sign-up').show()
  $('#sign-in-modal').show()
  $('#display_appointments').html('')
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed')
  $('#sign-out').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onchangepasswordSuccess,
  onchangepasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
