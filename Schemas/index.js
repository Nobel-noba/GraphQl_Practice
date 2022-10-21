
const graphql = require("graphql");
const {GraphQLObjectType,GraphQLInt,GraphQLString,GraphQLList,GraphQLSchema}= graphql;
const userType = require("./TypeDefs")
var data=require("./../data.json")

// this is wher queries are created

const rootQuery=new GraphQLObjectType({
    name:"RootQuertType",
    fields:{
        getAllUsers:{
            type:new GraphQLList(userType),
            // args:{id:{type:GraphQLInt}},
            resolve(parent,args){
                return data
            }
        }
    }
});

const rootMutation=new GraphQLObjectType({
    name:"mutation",
    fields:{
        createUser:{
            type:userType,
            args:{
                name:{
                    type:GraphQLString,
                },
                age:{
                    type:GraphQLInt
                },
                id:{
                    type:GraphQLInt
                }

            },
            resolve(parent,args){
                data.push({
                    name:args.name,
                    age:args.age,
                    id:args.id
                })
                console.log(data)
                return args
            }
        }
    }
});

const schema=new GraphQLSchema({query:rootQuery,mutation:rootMutation})

module.exports = schema;