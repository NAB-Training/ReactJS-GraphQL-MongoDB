import {gql} from "@apollo/client"

const createSchoolMutation=gql`
mutation createSchool(
    $name:String
    $address:String
){
    createSchool(name:$name,address:$address){
        id
        name
        address
    }
}
`
const deleteStudentMutation=gql`
mutation deleteStudent(
    $id:String
){
    deleteStudent(id:$id){
        id
        name
        age
        image
        gender
        school{
           id
           name
           address
        }
        teacher{
            id
            name
            age
            gender
        }
    }
}
`

const createTeacherMutation=gql`
mutation createTeacher(
    $name:String
    $age:Int
    $gender:String
    $schoolId:String
){
    createTeacher(name:$name,age:$age,gender:$gender,schoolId:$schoolId){
        id 
        name
        gender
        age
        school{
            id
            name
            address
        }
    }
}
`
const createStudentMutation=gql`
mutation createStudent(
    $name:String
    $age:Int
    $gender:String
    $schoolId:String
    $teacherId:String
    $image:String
){
    createStudent(name:$name,age:$age,gender:$gender,schoolId:$schoolId,teacherId:$teacherId,image:$image){
        id
        name
        age
        image
        gender
        school{
           id
           name
           address
        }
        teacher{
            id
            name
            age
            gender
        }
    }
}
`
export {
    createSchoolMutation,
    createTeacherMutation,
    createStudentMutation,
    deleteStudentMutation,
}