import gql from "graphql-tag";

export const ADD_MENU_ITEM = gql`
  mutation ($input: menuItemInput) {
    addItem(input: $input) {
      name
      address
      menu_items {
        item_name
      }
    }
  }
`;
