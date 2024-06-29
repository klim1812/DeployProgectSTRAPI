import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, CardMedia } from '@mui/material'
import { HOST_STRAPI } from '../utils';

export default function CarouselUi(image){
 

    return (
        <Carousel navButtonsAlwaysVisible >
            {
                image.image.map( (item, i) =>    <Paper sx={{maxWidth: 500 ,marginLeft:'auto', marginRight:'auto'}} key={item.attributes.url}>
                {/* <h2>{props.item.title}</h2> */}
                {/* <img src={props.item.img} style={{alignItems:'center'}}/> */}
    
                <CardMedia
            component="img"
            width="12"
            height="500"
            image={HOST_STRAPI + item.attributes.url}
            alt="Paella dish"
          />
            </Paper> )
            }
        </Carousel>
    )
}

