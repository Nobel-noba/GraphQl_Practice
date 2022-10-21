const data=require("./../data.json")
const resolvers ={
    Query :{
        Users(){
            return data
        }
    }
}

module.exports = resolvers