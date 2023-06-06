const { gql } = require("apollo-server-express");

module.exports = gql`
  type Mutation {
    register(input: registerInput): LoginAuth
    login(input: loginInput): LoginAuth
    createAppointment(input: createAppointmentInput): Appointment
    writePrescription(input: writePrescriptionInput): Appointment
  }
`;
