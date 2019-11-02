'use strict'
const config = require('../config')
const store = require('../store')


const getAppointments = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/appointments',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createAppointments = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/appointments',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}



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

// const selectAppointment = function (id) {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + `/appointments/${id}`,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//
//   })
// }

const deleteAppointment = function (id) {
  return $.ajax({
    url: config.apiUrl + `/appointments/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const clearAppointments = function (data) {
//   return $.ajax({
//     url: config.apiUrl + `/appointments/${data.appointments}`,
//     method: 'CLEAR',
//     headers: {
//       authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  getAppointments,
  // selectAppointment,
  createAppointments,
  updateAppointment,
  deleteAppointment
  // /clearAppointments
}
