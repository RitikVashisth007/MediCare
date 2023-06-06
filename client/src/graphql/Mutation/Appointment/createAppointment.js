import gql from "graphql-tag";

export const CREATE_APPOINTMENT = gql`
  mutation ($input: createAppointmentInput) {
    createAppointment(input: $input) {
      _id
      full_name
    }
  }
`;
