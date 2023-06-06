const services = require("../../services");
const checkAuth = require("../../../utils/checkAuth");
const axios = require("axios");

module.exports = {
  Query: {
    getAllDoctors: async (_, args, context) => {
      const doctors = await services.getAllDoctors();
      return doctors;
    },
  },
};
