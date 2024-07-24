import * as React from 'react';
import { useQuery } from '@apollo/client';
import { PROMOTIONS } from '../ApolloQuery/Promotions';
import { HOST_STRAPI } from '../utils';
import Carousel from 'react-material-ui-carousel'
import { Paper, CardMedia } from '@mui/material'
import Box from '@mui/material/Box';

export default function CardLanding() {

    const {data, loading,error} = useQuery(PROMOTIONS);

    if(loading){
      return<h2>...loading</h2>
  }
  if(error){
      return<h2>Error...</h2>
  }

let prom = data.promotions.data

  return (
    <>
   
  <Box>
      <Paper> 
      
      <Carousel 
      
       >
            {
                prom.map( (item, i) =>    <Paper sx={{ marginLeft:'auto', marginRight:'auto'}} key={item.id}>
               
                <CardMedia
            component="img"
          
            image={HOST_STRAPI+ item.attributes.image.data.map(row => row.attributes.url)}
            alt="Paella dish"
          />
            </Paper> )
            }
        </Carousel>
      

      </Paper> 
    </Box>
    </>
  );
}

