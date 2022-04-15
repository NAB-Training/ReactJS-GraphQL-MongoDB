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
export {
    createSchoolMutation,
    createTeacherMutation
}