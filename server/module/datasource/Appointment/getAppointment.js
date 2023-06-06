const Appointment = require("../../models/appointments");

async function getAppointment({ userId }) {
  const data = await Appointment.find({
    $or: [{ created_by: userId }, { doctor: userId }],
  });

  return data;
}

module.exports.getAppointment = getAppointment;
