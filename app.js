const express = require('express');
const app = express();
const port=2015;
const {graphqlHTTP} = require('express-graphql');
const schema=require("./Schemas")

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