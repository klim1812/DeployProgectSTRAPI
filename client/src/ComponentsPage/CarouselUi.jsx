import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, CardMedia } from '@mui/material'
import { HOST_STRAPI } from '../utils';

export default function CarouselUi(data){
//  console.log(data.data.Seo.alt)

    return (
        <Carousel navButtonsAlwaysVisible >
            {
                data.data.image.data.map( (item, i) =>    <Paper sx={{maxWidth: 500 ,marginLeft:'auto', marginRight:'auto'}} key={item.attributes.url}>
               
                <CardMedia
            component="img"
            width="12"
            height="500"
            image={HOST_STRAPI + item.attributes.url}
            // alt={data.data.Seo.alt ? data.data.Seo.alt : ''}
          />
            </Paper> )
            }
        </Carousel>
    )
}

