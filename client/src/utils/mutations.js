import { gql } from "@apollo/client";

export const SAVE_BOOK = gql`
  mutation SaveBook($bookData: BookData!) {
    saveBook(bookData: $bookData) {
        _id
        username
        email
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
          authors
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
        authors
        bookId
        description
        title
      }
    }
  }
`;
