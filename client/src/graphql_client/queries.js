import {gql} from "@apollo/client"

const getAllSchools=gql`
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
const getOneSchool=gql`
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
const getAllStudents=gql`
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
//const getOneSchool=gql`
// query getOneSchoolQuery($id:ID!){
//     school(id:$id){
//         id
//         name
//         address
//         students{
//             id
//             name
//             age
//             image
//             gender
//             teacher{
//                 id
//                 name
//                 age
//                 gender
//                 school{
//                     id
//                     address
//                 }
//             }
//             school{
//                 id
//                 address
//             }
//         }
//     }
// }
// `

export {
    getAllStudents,
    getAllSchools,
    getOneSchool
}