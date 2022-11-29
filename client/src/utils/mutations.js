import { gql } from "@apollo/client";

export const SAVE_BOOK = gql`
  mutation saveBook($bookdata: bookInput) {
    saveBook(bookdata: $bookdata) {
      userId
      savedBooks {
        _id
        bookId
        author
        title
        description
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($password: String!, $email: String) {
    login(password: $password, email: $email) {
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
