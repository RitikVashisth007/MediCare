const { allUsers } = require("./User/allUser");
const { getUser } = require("./User/getUser");
const { newUser } = require("./User/newUser");
const { createAppointment } = require("./Appointment/createAppointment");
const { getAppointment } = require("./Appointment/getAppointment");
const { updateAppointment } = require("./Appointment/updateAppointment");

module.exports = {
  allUsers,
  getUser,
  newUser,
  createAppointment,
  getAppointment,
  updateAppointment,
};
