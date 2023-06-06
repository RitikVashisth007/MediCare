const datasources = require("../../datasource");

async function getAppointment({ userId }) {
  const appointment = await datasources.getAppointment({ userId });
  return appointment;
}

module.exports.getAppointment = getAppointment;
