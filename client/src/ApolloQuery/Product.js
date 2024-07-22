
import { gql } from "@apollo/client";

export const PRODUCT= gql

`
query($id:ID!){
  product(id:$id){
    data{
      attributes{
        name
        brand
        model
        slug
        compressorType
        powerBtu
        inputPower
        heatPower
        coolPower
        workUp
        noise
        sizeIn
        sizeOut
        phases
        fan_diameter
        price
        description      
        fin_pitch
        freon
         Seo{
      metaTitle
      metaDescription
      preventIndexing
      keywords
      alt
    }
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