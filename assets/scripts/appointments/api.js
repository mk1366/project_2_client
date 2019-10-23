'use strict' // if these don't work, make sure that you are in the right file.
const config = require('../config')
const store = require('../store')

// declared a varible 'newgetAppointments' with a functin expression
// that performs asynchronous HTTP request using Api url and post it to our page.
// user token to the new game functionality.
const getAppointments = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/appointments',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAppointment = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/appointments/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

  })
}

const createAppointments = function (AppointmentData) {
  return $.ajax({
    url: config.apiUrl + '/appointments',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: AppointmentData
  })
}

// function that takes threee arguments, an array with
// index(to hold the place of each element) and the

const updateAppointment = function (data) {
  return $.ajax({
    url: config.apiUrl + `/appointments/${data.appointment.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteAppointment = function (id) {
  return $.ajax({
    url: config.apiUrl + `/appointments/${id}`,
    method: 'DELETE',
    headers: {
      authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getAppointments,
  getAppointment,
  createAppointments,
  updateAppointment,
  deleteAppointment
}
