const mongoose=require('mongoose')
const Schema=mongoose.Schema

const StudentSchema=new Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    },
    image:{
        type:String
    },
    schoolId:{
        type:String
    },
    teacherId:{
        type:String
    }
})
module.exports=mongoose.model('students',StudentSchema)