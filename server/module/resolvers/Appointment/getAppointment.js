const services = require("../../services");
const checkAuth = require("../../../utils/checkAuth");

module.exports = {
  Query: {
    getAppointment: async (_, args, context) => {
      const { userId } = checkAuth(context);
      const appointment = await services.getAppointment({ userId });
      return appointment;
    },
  },
};
