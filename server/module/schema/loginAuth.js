const { gql } = require("apollo-server-express");

module.exports = gql`
  type LoginAuth {
    new_user: Boolean
    token: String
    user: User
  }
`;
