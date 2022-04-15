const Student=require('../model/student')
const Teacher=require('../model/teacher')
const School=require('../model/school')

const methods={
    getAllStudents:async(condition=null)=>condition==null?await Student.find():await Student.find(condition),
    getAllSchools:async(condition=null)=>condition==null?await School.find():await School.find(condition),
    createSchool:async args=>{
        const newSchool=new School(args)
        return await newSchool.save()
    },
    createTeacher:async args=>{
        const newTeacher=new Teacher(args)
        return await newTeacher.save()
    }
}

module.exports=methods
