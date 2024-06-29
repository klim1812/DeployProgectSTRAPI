// import { ImageList } from '@mui/material';
import React from 'react';
import Banner from '../ComponentsPage/Banner';
import Header from '../ComponentsPage/Header';
import CardLanding from '../Cards/CardLanding';
import CardCategory from '../Cards/CardCategory';
import { Box } from '@mui/material';

function Home_page() {
  
    return (
      <>
      <Box sx={{position:'sticky', top:'0px', zIndex:10,minHeight:'100%'}}>
      <Header/>
      </Box>
    <Banner/>
    <CardCategory/>
    <CardLanding/>
    </>
    );
}


export default Home_page;