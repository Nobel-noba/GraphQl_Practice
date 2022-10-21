 const {gql}=require("apollo-server")

 const typeDefs=gql`

 type User{
    name:String
    id:ID
    age:Int
 }


 type Query {
    Users:[User!]
    user(name:String!):User!
 }

input createUserInput {
    name:String
    age:Int
}

 type Mutation {
    createUser(user:createUserInput!):[User!]
 }
 `

 module.exports = typeDefs