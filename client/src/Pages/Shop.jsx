import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useReactiveVar } from '@apollo/client';
import { PRODUCTS } from '../ApolloQuery/Products';
import { make_subcategory } from '..';
import { make_brandfilter } from '..';
import { make_powerfilter } from '..';
import { make_compressorfilter } from '..';
import { make_pagination } from '..';
import CardProduct from '../Cards/CardProduct';
import Box from '@mui/material/Box';
import PaginationBlock from '../ComponentsPage/PaginationBlock';

function Shop({pages}) {
 
  const filter_brand = useReactiveVar(make_brandfilter);
  const filter_power = useReactiveVar(make_powerfilter);
  const filter_compressor = useReactiveVar(make_compressorfilter);
  const id_subcategory = useReactiveVar(make_subcategory);
  const pagination = useReactiveVar(make_pagination);

  const {data, loading,error} = useQuery(PRODUCTS, {variables: {id:id_subcategory, ps:pages ? pages : 10,pg:pagination[0]}});

  if(loading){return<h2>...loading</h2>};
  if(error){return<h2>Error...</h2>};
  console.log(pagination);
  

 
  let data_products = data.products.data;
 let data_filter = filter_brand.length > 0 ? data_products.filter(el =>  filter_brand.includes(el.attributes.brand)) :data.products.data;

 data_filter = filter_power.length > 0 ? data_filter.filter(el =>  filter_power.includes(el.attributes.powerBtu )) :data_filter;

 data_filter = filter_compressor.length > 0 ? data_filter.filter(el =>  filter_compressor.includes(el.attributes.compressorType)) :data_filter;



    return (
      <>
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
      
      {data_filter.map(item => <CardProduct   data ={item} key={item.attributes.model}/>)}
              
      </Box>
      <Box><PaginationBlock /></Box>
      </>
    );
}


export default Shop;