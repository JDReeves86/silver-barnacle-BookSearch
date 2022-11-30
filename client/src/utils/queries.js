import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query getMe {
    getMe {
      username
      savedBooks {
        authors
        bookId
        description
        title
        image
      }
    }
  }
`;
