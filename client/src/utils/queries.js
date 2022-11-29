import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query GetSingleUser($_id: String!, $username: String) {
    getSingleUser(_id: $_id, username: $username) {
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

