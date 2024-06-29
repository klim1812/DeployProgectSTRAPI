
import { gql } from "@apollo/client";

export const PROMOTIONS= gql

`
query{
    promotions{
      data{
        id
        attributes{
            name
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