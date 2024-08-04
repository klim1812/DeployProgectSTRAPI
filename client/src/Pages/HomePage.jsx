
import React from 'react';
import Banner from '../ComponentsPage/Banner';
import { Box} from '@mui/material';
import CardLanding from '../Cards/CardLanding';
import CardCategory from '../Cards/CardCategory';
import ChangeCurrency from '../ComponentsPage/ChangeCurrency';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Seo } from '../Seo/Seo';

function HomePage() {
  const matches = useMediaQuery('(min-width:1200px)');
    return (
      <>
           <Seo
        title="Домашняя страница"
        description="Кондиционеры,промышленный холод, тепловые насосы, комплекты энергонезависимости"
        type="webapp"
        name="CLIMATE"
        key={"Домашняя страница"}
      />
      
    <ChangeCurrency/>
    <Banner/>
    <Box sx={matches ? {display:'flex',justifyContent: 'space-evenly'} : ''}><CardCategory/></Box>
    <CardLanding/>
    
    </>
    );
}


export default HomePage;