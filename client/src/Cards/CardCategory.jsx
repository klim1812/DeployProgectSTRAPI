import * as React from 'react';
import {  Paper, Typography } from '@mui/material';
import {  SUBCATALOG_ROUTE,  } from '../utils';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../ApolloQuery/Categories';
import { useQuery } from '@apollo/client';
import { make_category } from '..';
import { styled } from '@mui/material/styles';
import Icon from '@mui/material/Icon';


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
    {<div><Paper>{dataC.map(list =><Item key={list.id+'category'} sx={{display:'flex',alignItems:'center',justifyContent:'space-around'}} onClick={
      () =>{make_category(list.id);
        setRoute(SUBCATALOG_ROUTE)}
    }><Icon  sx={{color: '#7FFF00'}}>{list.attributes.icon}</Icon>
    <Typography>{list.attributes.name}</Typography><Icon sx={{color: '#7FFF00'}}>{list.attributes.icon}</Icon></Item>)}</Paper></div>}

  </>
  );
}
export default CardCategory ;