const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        username: String!
        email: String!
        password: String!
        gamesPlayed: Int
        wins: Int
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: User  
    }
    
    type Mutation {
        createUser(username: String!, email: String!, password: String!, gamesPlayed: Int, wins: Int ): Auth
        login(email: String!, password: String!): Auth
        updateGame(username: String!, gamesPlayed: Int, wins: Int): Auth 
    }
`
module.exports = typeDefs;