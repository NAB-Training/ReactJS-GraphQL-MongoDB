const Student=require('../model/student')
const Teacher=require('../model/teacher')
const School=require('../model/school')

const methods={
    getAllStudents:async(condition=null)=>
    condition==null?await Student.find():await Student.find(condition),
    createSchool:async args=>{
        const newSchool=new School(args)
        return await newSchool.save()
    }
}

module.exports=methods
