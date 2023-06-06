const {
  createAppointment,
} = require("../../services/Appointment/createAppointment");
const checkAuth = require("../../../utils/checkAuth");

module.exports = {
  Mutation: {
    async createAppointment(_, args, context, __) {
      const { input } = args;
      const { userId } = checkAuth(context);
      const response = await createAppointment(input, userId);
      return response;
    },
  },
};
