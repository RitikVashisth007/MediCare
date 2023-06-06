import gql from "graphql-tag";

export const REGISTER = gql`
  mutation ($input: registerInput) {
    register(input: $input) {
      user {
        _id
        full_name
        email
        avatar
        password
        updated_at
        created_at
      }
      token
    }
  }
`;
