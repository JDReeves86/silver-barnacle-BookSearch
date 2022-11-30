const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input BookData {
    authors: [String]
    description: String
    bookId: String
    title: String
    image: String
  }
  type Book {
    authors: [String]
    description: String
    bookId: String
    title: String
    image: String
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {
    getMe: User
  }
  type Mutation {
    saveBook(bookData: BookData!): User
    createNewUser(username: String, email: String, password: String): User
    login(username: String, email: String, password: String!): Auth
    deleteBook(bookData: String!): User
  }
`;

module.exports = typeDefs;
