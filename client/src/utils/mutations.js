import { gql } from "@apollo/client";

export const SAVE_BOOK = gql`
  mutation SaveBook($bookId: String, $userId: String) {
  saveBook(bookId: $bookId, userId: $userId) {
    _id
    username
    email
    savedBooks {
      authers
      bookId
      description
      title
    }
  }
}
`;

export const LOGIN = gql`
  mutation Login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      token
      user {
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
  }
`;

export const CREATE_USER = gql`
  mutation Login($username: String, $email: String, $password: String) {
    createNewUser(username: $username, email: $email, password: $password) {
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
