import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useQuery } from '@apollo/client';
import { PROMOTIONS } from '../ApolloQuery/Promotions';
import { HOST_STRAPI } from '../utils';

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
    <ImageList >
      <ImageListItem  cols={2}>
        
      </ImageListItem>
      {prom.map((item) => (
        <ImageListItem key={item.id + 3}>
          <img
            // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={HOST_STRAPI+ item.attributes.image.data.map(ttt => ttt.attributes.url)}
            alt={item.attributes.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.attributes.name}
            subtitle={item.attributes.description}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.attributes.description}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

