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
module.exports=mongoose.model('schools',SchoolSchema)