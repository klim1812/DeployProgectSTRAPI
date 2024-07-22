
import { gql} from "@apollo/client";

export const AUTH_MUTATION= gql

`
mutation($email:String!,$parol:String!){
    login(input:{
      identifier:$email
      password:$parol
    
    })
    {
      jwt
      user{
        id
        confirmed
        username
      }
    }}
`;