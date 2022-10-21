
const graphql = require("graphql");
const {GraphQLObjectType,GraphQLInt,GraphQLString}= graphql;

//  this is type declaration 
const userType = new GraphQLObjectType ({
    name:"User",
    fields: ()=>({
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        age:{type:GraphQLInt}
    })
})

module.exports= userType;