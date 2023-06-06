const datasources = require("../../datasource");

async function createAppointment(input, userId) {
  const newData = await datasources.createAppointment(input, userId);
  return newData;
}

module.exports.createAppointment = createAppointment;
