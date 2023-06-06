const services = require("../../services");
const checkAuth = require("../../../utils/checkAuth");
const axios = require("axios");

module.exports = {
  Query: {
    allUser: async (_, args, context) => {
      const users = await services.getAllUser();
      return users;
    },
  },
};
