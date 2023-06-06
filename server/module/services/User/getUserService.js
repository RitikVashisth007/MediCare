const datasources = require("../../datasource");

async function getUser({ userId }) {
  const user = await datasources.getUser({ _id: userId });
  return user;
}

module.exports.getUser = getUser;
