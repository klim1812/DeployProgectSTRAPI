
import { gql} from "@apollo/client";

export const REGISTR_MUTATION = gql

`
mutation($user:String!,$email:String!,$parol:String!
    ,$phone:String!,$address:String!){
      createUsersPermissionsUser(data:{
        username: $user
        email: $email
        password:$parol
        role:""
        phone:$phone
        address:$address
      }){
        data{
          attributes{
            username
            email
            address
            phone
            
          }
        }
      }
    }
`;