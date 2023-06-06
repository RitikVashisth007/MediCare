const { merge } = require("lodash");

const allUsers = require("./User/allUser");
const getUser = require("./User/getUser");
const loginUser = require("./User/loginUser");
const registerUser = require("./User/registerUser");
const getAllDoctors = require("./Dcotors/getAllDoctors");
const createAppointment = require("./Appointment/createAppointment");
const getAppointment = require("./Appointment/getAppointment");
const writePrescription = require("./Dcotors/writePrescription");

const resolvers = merge(
  allUsers,
  loginUser,
  registerUser,
  getUser,
  getAllDoctors,
  createAppointment,
  getAppointment,
  writePrescription
);

module.exports = resolvers;
