import gql from "graphql-tag";

export const GET_APPOINTMENTS = gql`
  query {
    getAppointment {
      _id
      full_name
      dob
      gender
      address
      preExistingConditions
      surgeries
      allergies
      medications
      symptomsDescription
      symptomsDuration
      prescription
      concern
      isChecked
      doctor {
        full_name
        _id
      }
      created_by {
        _id
        full_name
        email
      }
    }
  }
`;
