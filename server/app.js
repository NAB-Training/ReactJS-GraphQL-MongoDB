const express =require('express')
const mongoose=require('mongoose')
const {ApolloServer}=require('apollo-server-express')
const typeDefs=require('./schema/schema')
const resolvers=require('./resolver/resolver')
const methods=require('./data/database')

const server= new ApolloServer({
    typeDefs,
    resolvers,
    context:()=>({methods})
})
//Connect to MongoDB

const connect=async()=>{
    try {
        await mongoose.connect(
            'mongodb+srv://HaMongKhang:Yeulaitudau240320012001@studentmanagement.7n46e.mongodb.net/StudentManagement?retryWrites=true&w=majority'
        )
        console.log("Connected successfully")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connect()
const app = express();

server.start().then(res => {
    server.applyMiddleware({ app });
    app.listen({ port: 8000 }, () =>
        console.log('Now browse to http://localhost:8000' + server.graphqlPath)
    )
   })