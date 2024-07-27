import { gql } from "@apollo/client";

export const CART_RODUCTS= gql

`
query($arr:[ID]!){
    products(filters:{
      id:{in:$arr}
    }){
      
      data{
        id
        
        attributes{
          name
          brand_name
          model
          price
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