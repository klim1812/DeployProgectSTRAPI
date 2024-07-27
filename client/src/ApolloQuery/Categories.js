
import { gql } from "@apollo/client";

export const CATEGORIES= gql

`
query{
  categories{
    data{
      id
      attributes{
        name
        icon
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