import React from 'react';
import CardSubcategories from '../Cards/CardSubCategory';
import Banner from '../ComponentsPage/Banner';
import CardCategory from '../Cards/CardCategory';
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
      
      <Banner/>
      <CardCategory/>
    <CardSubcategories/>
  
 
      </>
    );
}


export default Cart;