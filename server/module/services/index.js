const { getAllUser } = require("./User/allUserService");
const { getUser } = require("./User/getUserService");
const { loginUserService } = require("./User/loginUserService");
const { registerUserService } = require("./User/registerUserService");
const { getAllDoctors } = require("./Doctors/getAllDoctors");
const { getAppointment } = require("./Appointment/getAppointment");
const { createAppointment } = require("./Appointment/createAppointment");
const { writePrescription } = require("./Doctors/writePrescription");

module.exports = {
  getAllUser,
  getUser,
  loginUserService,
  registerUserService,
  getAllDoctors,
  createAppointment,
  getAppointment,
  writePrescription,
};
