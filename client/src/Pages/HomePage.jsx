
import React from 'react';
import Banner from '../ComponentsPage/Banner';
import CardLanding from '../Cards/CardLanding';
import CardCategory from '../Cards/CardCategory';
import ChangeCurrency from '../ComponentsPage/ChangeCurrency';
import { Seo } from '../Seo/Seo';

function HomePage() {
  
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
    <CardCategory/>
    <CardLanding/>
    
    </>
    );
}


export default HomePage;