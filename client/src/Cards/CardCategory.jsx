import * as React from 'react';
import {  Grid, Paper, Typography } from '@mui/material';
import {  HOST_STRAPI, SUBCATALOG_ROUTE,  } from '../utils';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../ApolloQuery/Categories';
import { useQuery } from '@apollo/client';
import { make_category } from '..';
import { styled } from '@mui/material/styles';
import Icon from '@mui/material/Icon';
import {  Box, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

 const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      minWidth:300,
      margin:2
      
    }));

 function CardCategory() {
  const matches = useMediaQuery('(min-width:850px)');
  const navigate = useNavigate();
  const {data, loading,error} = useQuery(CATEGORIES);
  if(loading){
      return<h2>...loading</h2>
  }
  if(error){
      return<h2>Error...</h2>
  }
function setRoute(e){
     navigate(e)
};
  const dataC = data.categories.data

  console.log(dataC)
  return (
    <Box sx={{ flexGrow: 1 }}>
     {!matches ? <Box>{dataC.map(elem =><Item key={elem.id} onClick={
      () =>{make_category(elem.id);
        setRoute(SUBCATALOG_ROUTE)}
    }><Typography variant='h6'>{elem.attributes.name}</Typography></Item>)}</Box> : <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {dataC.map(list =><Grid item xs={2} sm={4} md={4}><Item key={list.id} onClick={
      () =>{make_category(list.id);
        setRoute(SUBCATALOG_ROUTE)}
    } sx={{display:'flex'}}>
    <Box sx={{margin:3}}><Typography variant='h6'>{list.attributes.name}</Typography>
    <Typography variant='capture'>Открыть каталог</Typography></Box>
    <img  style={{width:'100px',height:'100px',marginLeft:'auto'}}
    src={HOST_STRAPI + list.attributes.image.data.map(el => el.attributes.url)}
     /></Item></Grid>)}</Grid>} 

  </Box>
  );
}
export default CardCategory ;