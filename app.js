const express = require('express');
const app = express();
const port=2015;
const graphql=require('graphql')
const {graphqlHTTP} = require('express-graphql');
var data=require("./data.json")
const {GraphQLSchema,GraphQLInt,GraphQLString,GraphQLObjectType,GraphQLList}=graphql;

//  this is type declaration 
const userType = new GraphQLObjectType ({
    name:"User",
    fields: ()=>({
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        age:{type:GraphQLInt}
    })
})


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

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(port ,()=>{
    console.log("server running")
});