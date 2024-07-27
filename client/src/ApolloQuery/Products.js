
import { gql } from "@apollo/client";

export const PRODUCTS= gql

`
query($id:ID!,$ps:Int!, $pg:Int!){
    products(filters:{
      subcategory:{
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
        brand_name
          model
          slug
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