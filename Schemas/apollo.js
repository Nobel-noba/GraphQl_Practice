 const {gql}=require("apollo-server")

 const typeDefs=gql`

 type User{
    name:String
    id:ID
    age:Int
 }


 type Query {
    Users:[User!]
 }
 `

 module.exports = typeDefs