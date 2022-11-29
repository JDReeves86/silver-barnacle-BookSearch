const { gql } = require('apollo-server-express');

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
    type Query {
        getSingleUser(_id: String, username: String): User
    }
    type Mutation {
        saveBook(_id: String, bookId: String): User
        createNewUser(username: String, email: String, password: String): User
        login(username: String, email:String, password:String!): User
        # deleteBook()
    }
`

module.exports = typeDefs;