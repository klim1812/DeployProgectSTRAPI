import * as React from 'react';
import { Paper, Typography } from '@mui/material';
import {  HOST_STRAPI, SUBCATALOG_ROUTE,  } from '../utils';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../ApolloQuery/Categories';
import { useQuery } from '@apollo/client';
import { make_category } from '..';
import { styled } from '@mui/material/styles';
import { Box} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import DragHandleIcon from '@mui/icons-material/DragHandle';

 const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      display:'flex',
      color: theme.palette.text.secondary,
      minWidth:400,
      margin:3,
      justifyContent:'space-between',
      cursor:'pointer'

    }));

 function CardCategory() {
  const matches = useMediaQuery('(min-width:1200px)');
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

  return (
    
    <>
   

      {dataC.map(list =><Item key={list.id} onClick={
      () =>{make_category(list.id);
        setRoute(SUBCATALOG_ROUTE)}
    } >
    <Box  sx={{marginLeft:3}}>
      <Typography variant='h6' >{list.attributes.name} </Typography> 
    {matches ?<Typography variant='capture'>Открыть каталог</Typography>: ''}
    </Box>
    {!matches ? <DragHandleIcon sx={{marginRight:3}}/> :''}
    {matches ? <img alt={list.attributes.name} style={{width:'100px',height:'100px',marginLeft:'auto'}}
    src={HOST_STRAPI + list.attributes.image.data.map(el => el.attributes.url)}
     /> : ''} </Item>)}
    
</>
  
  );
}
export default CardCategory ;