import {gql} from "@apollo/client"

// const getAllSchools=gql`
// query getAllSchoolQuery{
//     schools{
//         id
//         name
//         address
//         teacher
//         student
//     }
// }
// `
// const getOneSchool=gql`
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
}