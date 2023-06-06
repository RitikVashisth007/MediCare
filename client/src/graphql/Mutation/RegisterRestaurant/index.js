import gql from "graphql-tag";

export const REGISTER_RESTAUANT = gql`
  mutation ($input: newRestaurantInput!) {
    registerRestaurant(input: $input) {
      name
      address
    }
  }
`;
