import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Paper, Typography } from '@mui/material';
import { HOST_STRAPI, SUBCATALOG_ROUTE,  } from '../utils';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../ApolloQuery/Categories';
import { useQuery } from '@apollo/client';
import { make_category } from '..';
import useMediaQuery from '@mui/material/useMediaQuery'; 
import { styled } from '@mui/material/styles';

 const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      minWidth:400,
      margin:1
      
    }));

 function CardCategory() {
  const matches = useMediaQuery('(max-width:1000px)');
  const {data, loading,error} = useQuery(CATEGORIES);
  if(loading){
      return<h2>...loading</h2>
  }
  if(error){
      return<h2>Error...</h2>
  }

  let dataC = data.categories.data
  
  return (
    <>
    <Paper sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
      
    
    {dataC.map(list =><Link to={SUBCATALOG_ROUTE} style={{textDecorationLine:'none'}} key={list.id+ 'cc'}>{matches ? <Link key={list.id+ 'cc'} to={SUBCATALOG_ROUTE} style={{
      textDecorationLine:'none'}}><Item  onClick={() => {
       
        make_category(list.id)}}>{list.attributes.name}</Item></Link> :<Card sx={{ 
        display: 'flex',  justifyContent:'space-between',maxWidth:'40vw',maxHeight:'80px', margin: 1}}
    onClick={() => {
      
      make_category(list.id)}}
      
    >
      

    <Box sx={{ display: 'flex' }}>
    
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
        {list.attributes.name}
        </Typography>
        <Typography variant="caption" color="text.secondary" component="div">
          Открыть каталог
        </Typography>
      </CardContent>
    </Box>
    <CardMedia
   
      component="img"
      sx={{ width: 151 }}
      image={HOST_STRAPI + list.attributes.image.data.map(item => item.attributes.url)}
      alt={list.attributes.alt ? list.attributes.alt : ''}
    />
  </Card>}</Link>)}
  </Paper>
  </>
  );
}
export default CardCategory ;