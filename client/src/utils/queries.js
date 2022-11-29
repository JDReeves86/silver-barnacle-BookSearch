import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    getMe {
      _id
      username
      email
      password
      savedBooks {
        authers
        bookId
        description
        title
      }
    }
  }
`;
