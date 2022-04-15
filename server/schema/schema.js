const {gql}=require('apollo-server-express')

const typeDefs=gql`
type School{
    id:ID
    name:String
    address:String
    teachers:[Teacher]
    students:[Student]
}
type Teacher{
    id:ID
    name:String
    age:Int
    gender:String
    school:School
    students:[Student]
}
type Student{
    id:ID
    age:Int
    name:String
    gender:String
    image:String
    school:School
    teacher:Teacher
}
type Query{
    schools:[School]
    teachers:[Teacher]
    students:[Student]
    school(id:ID!):School
    teacher(id:ID!):Teacher
    student(id:ID!):Student
}
type Mutation{
    createSchool(name:String,address:String):School
    createTeacher(name:String,age:Int,gender:String,schoolId:String):Teacher
    createStudent(name:String,age:Int,gender:String,image:String,schoolId:String,teacherId:String,):Student,
    deleteStudent(id:ID!):{Boolean,Student}

}
`

module.exports=typeDefs
