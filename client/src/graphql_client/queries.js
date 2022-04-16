import { gql } from "@apollo/client"

const getAllSchools = gql`
query getAllSchoolQuery{
    schools{
        id
        name
        address
        teachers{
            id
            name
            age
            gender
            school{
                id
                address
            }
        }
    }
}
`
const getOneSchool = gql`
query getOneSchoolQuery($id:ID!){
    school(id:$id){
        id
        name
        address
        students{
            id
            name
            age
            image
            gender
            teachers{
                id
                name
                age
                gender
                school{
                    id
                    address
                }
            }
            schools{
                id
                address
            }
        }
    }
}
`
const getAllStudents = gql`
 query getAllStudentQuery{
     students{
         id
         name
         age
         image
         gender
         school{
            id
            name
            address
            teachers{
                id
                name
            }
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
const getOneStudent = gql`
query getOneStudentQuery($id:ID!){
    student(id:$id){
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
const getAllTeachers = gql`
query getAllTeacherQuery{
    teachers{
        id
        name
        gender
        age
        students{
            id
            name
            age
            gender
            image
        }
    }
}
`
const getOneTeacher = gql`
query getOneTeacherQuery($id:ID!){
    teacher(id:$id){
        id
        name
        gender
        age
        students{
            id
            name
            age
            gender
            image
        }
    }
}
`

export {
    getAllStudents,
    getOneStudent,
    getAllSchools,
    getOneSchool,
    getAllTeachers,
    getOneTeacher,
}