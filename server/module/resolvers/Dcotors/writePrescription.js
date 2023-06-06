const { writePrescription } = require("../../services");

module.exports = {
  Mutation: {
    async writePrescription(_, args, context, __) {
      const { input } = args;
      const response = await writePrescription(input);
      return response;
    },
  },
};
