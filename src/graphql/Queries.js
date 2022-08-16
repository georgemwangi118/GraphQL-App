import { gql } from "@apollo/client/core";

export const LOAD_PRODUCT = gql`
  query {
    categories {
      name
      products {
        name
        inStock
        brand
        description
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;
