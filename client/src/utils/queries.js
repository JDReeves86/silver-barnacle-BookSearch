import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query getMe {
    getMe {
      _id
      username
      email
      password
      savedBooks {
        authors
        bookId
        description
        title
      }
    }
  }
`;
