const { gql } = require("apollo-server-express");

module.exports = gql`
  type Appointment {
    _id: ID
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
    doctor: User
    created_by: User
    isChecked: Boolean
    prescription: String
  }
`;
