const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    allUser: [User]
    getUser: User
    getAllDoctors: [User]
    getAppointment: [Appointment]
  }
`;
