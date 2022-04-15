const mongoose=require('mongoose')
const Schema=mongoose.Schema

const TeacherSchema=new Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    schoolId:{
        type:String
    },
    gender:{
        type:String
    }
})

module.exports=mongoose.model('teachers',TeacherSchema)