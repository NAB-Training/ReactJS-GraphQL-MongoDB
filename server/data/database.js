const Student=require('../model/student')
const Teacher=require('../model/teacher')
const School=require('../model/school')

const methods={
    getAllStudents:async(condition=null)=>condition==null?await Student.find():await Student.find(condition),
    getAllSchools:async(condition=null)=>condition==null?await School.find():await School.find(condition),
    getAllTeachers:async(condition=null)=>condition==null?await Teacher.find():await Teacher.find(condition),
    getOneStudent:async id =>await Student.findById(id),
    getOneTeacher:async id=>await Teacher.findById(id),
    createSchool:async args=>{
        const newSchool=new School(args)
        return await newSchool.save()
    },
    createTeacher:async args=>{
        const newTeacher=new Teacher(args)
        return await newTeacher.save()
    },
    createStudent:async args=>{
        const newStudent=new Student(args)
        return await newStudent.save()
    }
}
module.exports=methods
