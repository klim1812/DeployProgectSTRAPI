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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Shop() {
  const [age, setAge] = useState('');
  const filter_brand = useReactiveVar(make_brandfilter);
  const filter_power = useReactiveVar(make_powerfilter);
  const filter_compressor = useReactiveVar(make_compressorfilter);
  const id_subcategory = useReactiveVar(make_subcategory);
  const pagination = useReactiveVar(make_pagination);

  const {data, loading,error} = useQuery(PRODUCTS, {variables: {id:id_subcategory, ps:age ? age : 10,pg:pagination[0]}});

  if(loading){return  <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={true}><CircularProgress color="inherit" />
  </Backdrop>};
  if(error){return<h2>Error...</h2>};
 
  let data_products = data.products.data;
 let data_filter = filter_brand.length > 0 ? data_products.filter(el =>  filter_brand.includes(el.attributes.brand_name)) :data.products.data;

 data_filter = filter_power.length > 0 ? data_filter.filter(el =>  filter_power.includes(el.attributes.powerBtu )) :data_filter;

 data_filter = filter_compressor.length > 0 ? data_filter.filter(el =>  filter_compressor.includes(el.attributes.compressorType)) :data_filter;
 const handleChange = (event) => {
  setAge(event.target.value);
};

const paginationVisible = data_filter.length > 9;

    return (
      <>
      <Box>        <div style={{marginLeft:'auto'}}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 200, }}>
          <InputLabel id="demo-select-small-label" sx={{fontSize: '12px' }} >Товаров на странице</InputLabel>
  <Select
  labelId="demo-select-small-label"
  id="demo-select-small"
  value={age}
  onChange={handleChange}>
    
    <MenuItem value={10}>10</MenuItem>
    <MenuItem value={20}>20</MenuItem>
    <MenuItem value={30}>30</MenuItem>
  </Select>
</FormControl>
</div></Box>

      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
      
      {data_filter.map(item => <CardProduct   data ={item} key={item.attributes.slug}/>)}
              
      </Box>
      <Box>{paginationVisible ? <PaginationBlock /> : ''}</Box>
      </>
    );
}


export default Shop;