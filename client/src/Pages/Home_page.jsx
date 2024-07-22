// import { ImageList } from '@mui/material';
import React from 'react';
import Banner from '../ComponentsPage/Banner';
import Header from '../ComponentsPage/Header';
import CardLanding from '../Cards/CardLanding';
import CardCategory from '../Cards/CardCategory';
import { Box } from '@mui/material';
import Footer from '../ComponentsPage/Footer';
import ChangeCurrency from '../ComponentsPage/ChangeCurrency';
import { Seo } from '../Seo/Seo';

function Home_page() {
  
    return (
      <>
           <Seo
        title="Домашняя страница"
        description="Кондиционеры,промышленный холод, тепловые насосы, комплекты энергонезависимости"
        type="webapp"
        name="CLIMATE"
        key={"Домашняя страница"}
      />
       <Box sx={{position:'sticky', top:'0px', zIndex:10,minHeight:'100%'}}> 
      {/* <Header/> */}
       </Box> 
      
    <ChangeCurrency/>
    <Banner/>
    <CardCategory/>
    <CardLanding/>
    <Footer/>
    </>
    );
}


export default Home_page;