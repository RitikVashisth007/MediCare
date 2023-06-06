const Appointment = require("../../models/appointments");

async function createAppointment(data, userId) {
  const newData = new Appointment({
    ...data,
    created_by: userId,
  });
  const appointment = await newData.save();
  return appointment;
}

module.exports.createAppointment = createAppointment;
