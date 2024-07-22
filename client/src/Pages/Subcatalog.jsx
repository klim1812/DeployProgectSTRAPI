import React from 'react';
import CardSubcategories from '../Cards/CardSubCategory';
import Header from '../ComponentsPage/Header';
import Banner from '../ComponentsPage/Banner';
import CardCategory from '../Cards/CardCategory';
import { Box } from '@mui/material';
import Footer from '../ComponentsPage/Footer';
import { Seo } from '../Seo/Seo';

function Cart() {
  
  
    return (
      <>
           <Seo
        title="Подкатегории"
        description="Кондиционеры,промышленный холод, тепловые насосы"
        type="webapp"
        name="CLIMATE"
      />
       <Box sx={{position:'sticky', top:'0px', zIndex:10}}>
      {/* <Header/> */}
      </Box>
      <Banner/>
      <CardCategory/>
    <CardSubcategories/>
    <Footer/>
 
      </>
    );
}


export default Cart;