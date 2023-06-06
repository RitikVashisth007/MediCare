import gql from "graphql-tag";

export const GET_USER = gql`
  query {
    getUser {
      _id
      email
      full_name
      avatar
      role
    }
  }
`;
