const services = require("../../services");
const checkAuth = require("../../../utils/checkAuth");
const axios = require("axios");

module.exports = {
  Query: {
    getUser: async (_, args, context) => {
      const userId = checkAuth(context);
      const user = await services.getUser(userId);
      return user;
    },
  },
};
