import React from 'react';
import CardSubcategories from '../Cards/CardSubCategory';
import Header from '../ComponentsPage/Header';
import Banner from '../ComponentsPage/Banner';
import CardCategory from '../Cards/CardCategory';
import { Box } from '@mui/material';

function Cart() {
  
  
    return (
      <>
       <Box sx={{position:'sticky', top:'0px', zIndex:10}}>
      <Header/>
      </Box>
      <Banner/>
      <CardCategory/>
    <CardSubcategories/>
 
      </>
    );
}


export default Cart;