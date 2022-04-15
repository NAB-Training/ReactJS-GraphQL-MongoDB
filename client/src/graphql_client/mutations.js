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

export {createSchoolMutation}