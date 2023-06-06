const Appointment = require("../../models/appointments");

async function updateAppointment(id, paylaod) {
  const data = await Appointment.findByIdAndUpdate(id, { ...paylaod });
  return data;
}

module.exports.updateAppointment = updateAppointment;
