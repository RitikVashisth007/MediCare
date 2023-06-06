import gql from "graphql-tag";

export const GET_ALL_DOCS = gql`
  query {
    getAllDoctors {
      full_name
      specialization
      email
      role
      _id
    }
  }
`;
