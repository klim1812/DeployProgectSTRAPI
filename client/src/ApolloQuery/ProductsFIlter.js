import { gql } from "@apollo/client";

export const PRODUCTSFILTER= gql

`
query($id:ID!){
    products(filters:{
      subcategory:{
        id:{eq:$id}
      }
    }){
      data{
        id
        attributes{
          brand_name
          powerBtu
          compressorType
      
        }
      }
    }
  }
 `;