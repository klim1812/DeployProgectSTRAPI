import { gql } from "@apollo/client";

export const PRODUCTSFILTER= gql

`
query($id:ID!){
    products(filters:{
      subcategories:{
        id:{eq:$id}
      }
    }){
      data{
        id
        attributes{
          brand
          powerBtu
          compressorType
      
        }
      }
    }
  }
 `;