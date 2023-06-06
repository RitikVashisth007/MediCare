import gql from "graphql-tag";

export const WRITE_PRESCRIPTION = gql`
  mutation ($input: writePrescriptionInput) {
    writePrescription(input: $input) {
      _id
    }
  }
`;
