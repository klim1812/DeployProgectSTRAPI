
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
        seo
        fin_pitch
        freon
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