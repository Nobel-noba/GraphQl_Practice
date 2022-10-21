const data=require("./../data.json")
const _=require("lodash")

const resolvers ={
    Query :{
        Users:()=>{
            return data
        },
        user:(parent,args)=>{
            const id=args.name;
            const user = _.find(data,{name:id})

            return user
        }
    },
    Mutation:{
        createUser:(parent,args)=>{
            const user=args.user;
            data.push(user)
            console.log(data)
            return data
            
        }
    }
}

module.exports = resolvers