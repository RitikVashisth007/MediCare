const Queries = require("./queries");
const User = require("./user");
const Input = require("./input");
const Mutations = require("./mutations");
const loginAuth = require("./loginAuth");
const Appointment = require("./appointment");

const typeDefs = [Queries, User, Input, Mutations, loginAuth, Appointment];

module.exports = typeDefs;
