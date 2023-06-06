const { gql } = require("apollo-server-express");

module.exports = gql`
  scalar Date

  type User {
    _id: ID
    email: String
    role: String
    specialization: String
    avatar: String
    password: String
    updated_at: Date
    created_at: Date
    full_name: String
  }
`;
