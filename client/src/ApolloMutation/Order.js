
import { gql } from "@apollo/client";

export const CREATE_ORDER = gql

`
mutation($user:ID!,$email:String!,$order:String!){
    createOrder(data:{
      user:$user
      email:$email
      order_text:$order
    }){
      data{
        attributes{
          order_text
        }
      }
    }
  }
`;