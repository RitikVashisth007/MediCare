const datasources = require("../../datasource");

async function getAllDoctors() {
  const user = await datasources.allUsers({ role: "doctor" });
  return user;
}

module.exports.getAllDoctors = getAllDoctors;
