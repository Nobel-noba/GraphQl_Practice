
const {ApolloServer}=require("apollo-server")

const typeDefs =require('./Schemas/apollo')
const resolvers =require("./Schemas/resolver")
const server=new ApolloServer({typeDefs,resolvers})

const port = 2022

server.listen(port).then(({url})=>{
    console.log(`server running on port port ${port}`)
})