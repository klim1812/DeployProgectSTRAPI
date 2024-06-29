
import { gql } from "@apollo/client";

export const PRODUCTS= gql

`
query($id:ID!,$ps:Int!, $pg:Int!){
    products(filters:{
      subcategories:{
        id:{eq:$id}
      }
    }
     pagination:{
      pageSize: $ps
      page:$pg 
    } 
    
    ){
      data{
        id
        attributes{
          name
          brand
          model
          price
          powerBtu
          compressorType
          description
          image{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
 `;