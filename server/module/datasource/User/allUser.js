const User = require("../../models/user");

async function allUsers(param) {
  const user = await User.find({ ...param });
  return user;
}

module.exports.allUsers = allUsers;
