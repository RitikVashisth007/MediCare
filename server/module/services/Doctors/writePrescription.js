const datasources = require("../../datasource");

async function writePrescription(input) {
  const { appointmentId, prescription } = input;

  const newData = await datasources.updateAppointment(appointmentId, {
    prescription,
    isChecked: true,
  });
  return newData;
}

module.exports.writePrescription = writePrescription;
