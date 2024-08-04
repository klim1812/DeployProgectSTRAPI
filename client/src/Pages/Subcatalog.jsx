import React from 'react';
import CardSubcategories from '../Cards/CardSubCategory';
import Banner from '../ComponentsPage/Banner';
import CardCategory from '../Cards/CardCategory';
import { Seo } from '../Seo/Seo';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box} from '@mui/material';

function Cart() {

  const matches = useMediaQuery('(min-width:1200px)');
  
    return (
      <>
           <Seo
        title="Подкатегории"
        description="Кондиционеры,промышленный холод, тепловые насосы"
        type="webapp"
        name="CLIMATE"
      />
      
      <Banner/>
      <Box sx={matches ? {display:'flex',justifyContent: 'space-evenly'} : ''}><CardCategory/></Box>
    <CardSubcategories/>
  
 
      </>
    );
}


export default Cart;