
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/material';
import { SUBCATEGORIES } from '../ApolloQuery/Subcategories';
import { useQuery } from '@apollo/client';
import { useReactiveVar } from '@apollo/client';
import { make_category } from '..';
import { CATALOG_ROUTE, HOST_STRAPI } from '../utils';
import { make_subcategory } from '..';
import { NavLink } from 'react-router-dom';

export default function CardSubcategories() {
    const num_category = useReactiveVar(make_category);
    // const num_subcategory = useReactiveVar(make_subcategory);
    const {data, loading,error} = useQuery(SUBCATEGORIES,{variables:{id:num_category[0]}});
    console.log(num_category)
    if(loading){
        return<h2>...loading</h2>
      }
      if(error){
        return<h2>Error...</h2>
      };
      
let subcatalog = data.subcategories;
  return (
    <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
    {subcatalog.data.map(list => 
        <NavLink to={CATALOG_ROUTE} style={{textDecorationLine:'none'}}><Card sx={{ maxWidth: 345, margin:1 }} key={list.attributes.name} onClick={()=>{make_subcategory(list.id)
    }}>
        <CardContent>Открыть каталог</CardContent>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={HOST_STRAPI + list.attributes.image.data.map(item => item.attributes.url)}
          alt={list.attributes.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {list.attributes.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></NavLink>)}
    </Box>
  );
}