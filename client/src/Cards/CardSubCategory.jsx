
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {  Paper } from '@mui/material';
import { SUBCATEGORIES } from '../ApolloQuery/Subcategories';
import { useQuery } from '@apollo/client';
import { useReactiveVar } from '@apollo/client';
import { make_category } from '..';
import { CATALOG_ROUTE, HOST_STRAPI } from '../utils';
import { make_subcategory } from '..';
import { Link } from 'react-router-dom';

export default function CardSubcategories() {
    const num_category = useReactiveVar(make_category);
    const {data, loading,error} = useQuery(SUBCATEGORIES,{variables:{id:num_category[0]}});

    if(loading){
        return<h2>...loading</h2>
      }
      if(error){
        return<h2>Error...</h2>
      };
      
let subcatalog = data.subcategories;

  return (
   
      <Paper sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
    {subcatalog.data.map(list => 
        <Link to={CATALOG_ROUTE} style={{textDecorationLine:'none'}} key={list.id+'k'}><Card sx={{
           minWidth: 345,maxWidth: 345,minHeight:400,maxHeight:400, margin:1 }}  onClick={()=>{make_subcategory(list.id)
            
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
          <Typography gutterBottom variant="h6" align='center' component="div">
            {list.attributes.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Link>)}
    </Paper>
    // </Box>
  );
}