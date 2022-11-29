const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    authers: String
    description: String
    bookId: String
    title: String
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
    saveBook(userId: String, bookId: String): User
    createNewUser(username: String, email: String, password: String): User
    login(username: String, email: String, password: String!): Auth
    # deleteBook()
  }
`;

module.exports = typeDefs;
