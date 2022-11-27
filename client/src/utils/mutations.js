import { gql } from "@apollo/client";

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: String!, $userId: ID) {
    saveBook(book: $bookId, _id: $userId) {
      _id
      bookId
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!, $email: String!) {
    createUser(username: $username, password: $password, email: $email) {
      username
      password
      email
    }
  }
`;
