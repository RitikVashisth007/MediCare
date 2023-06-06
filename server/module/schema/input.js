const { gql } = require("apollo-server-express");

module.exports = gql`
  input loginInput {
    email: String!
    password: String!
  }
  input registerInput {
    email: String!
    password: String!
    full_name: String!
    role: String!
    specialization: String
  }
  input createAppointmentInput {
    full_name: String
    dob: String
    gender: String
    address: String
    preExistingConditions: String
    surgeries: String
    allergies: String
    medications: String
    symptomsDescription: String
    symptomsDuration: String
    symptomsSeverity: String
    concern: String
    doctor: ID
  }
  input writePrescriptionInput {
    appointmentId: ID
    prescription: String
  }
`;
