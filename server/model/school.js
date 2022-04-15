const mongoose =require('mongoose')
const Schema=mongoose.Schema

const SchoolSchema=new Schema({
    name:{
        type:String
    },
    address:{
        type:String
    }
})
module.exports=mongooes.model('schools',SchoolSchema)