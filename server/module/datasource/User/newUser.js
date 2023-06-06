const User = require("../../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

async function newUser({
  email,
  password,
  full_name,
  avatar = "",
  role,
  specialization,
}) {
  const newUser = new User({
    full_name,
    email: email.toLowerCase(),
    password: await bcrypt.hash(password, 10),
    avatar,
    role,
    specialization,
  });
  const user = await newUser.save();
  return user;
}

module.exports.newUser = newUser;
