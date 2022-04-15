import {gql} from "@apollo/client"

const createSchool=gql`
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