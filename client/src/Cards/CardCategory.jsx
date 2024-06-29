import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Typography } from '@mui/material';
import { HOST_STRAPI, SUBCATALOG_ROUTE,  } from '../utils';
import { useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { CATEGORIES } from '../ApolloQuery/Categories';
import { useQuery } from '@apollo/client';
import { make_category } from '..';

 function CardCategory() {
  const theme = useTheme();
  const {data, loading,error} = useQuery(CATEGORIES);
  if(loading){
      return<h2>...loading</h2>
  }
  if(error){
      return<h2>Error...</h2>
  }

  let dataC = data.categories.data
  console.log(dataC.map(item => item.attributes.image.data.map(img => img.attributes.url)));
  return (
    <>
    <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
    
    
    {dataC.map(list =><NavLink to={SUBCATALOG_ROUTE} style={{textDecorationLine:'none'}}><Card sx={{ display: 'flex',  justifyContent:'space-between',width:'480px', margin: 1}}
    onClick={() => {
      console.log(list.id)
      make_category(list.id)}}
    >
    <Box sx={{ display: 'flex' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
        {list.attributes.name}
        </Typography>
        <Typography variant="caption" color="text.secondary" component="div">
          Открыть каталог
          {list.attributes.alt}
        </Typography>
      </CardContent>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 151 }}
      image={HOST_STRAPI + list.attributes.image.data.map(item => item.attributes.url)}
      alt={list.attributes.alt}
    />
  </Card></NavLink>)}

  </Box>
  </>
  );
}
export default CardCategory ;