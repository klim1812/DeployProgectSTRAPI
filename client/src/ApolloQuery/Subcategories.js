
import { gql } from "@apollo/client";

export const SUBCATEGORIES= gql

`
query($id:ID!){
    subcategories(filters:{
      categories:{
        id:{
          eq:$id
        }
      }
    }){
      data{
        id
        attributes{
          name
          alt
          image{
            data{
              id
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