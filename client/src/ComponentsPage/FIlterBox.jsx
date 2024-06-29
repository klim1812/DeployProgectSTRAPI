import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useReactiveVar } from '@apollo/client';
import {PRODUCTSFILTER} from '../ApolloQuery/ProductsFIlter';
import { useQuery } from '@apollo/client';
import { make_subcategory } from '..';
import { make_brandfilter } from '..';
import { make_powerfilter } from '..';
import { make_compressorfilter } from '..';

function FilterBox() {
    
  // const arr_brands = useReactiveVar(make_brandfilter);
  const id_subcategories = useReactiveVar(make_subcategory);
  const {data, loading,error} = useQuery(PRODUCTSFILTER,{variables:{id:id_subcategories}});
  if(loading){return<h2>...loading</h2>}
  if(error){return<h2>Error...</h2>};
  const data_shop = data.products.data;


  let brands = data_shop.map(el => el.attributes.brand);
  let power = data_shop.map(el => el.attributes.powerBtu );
  let compressor = data_shop.map(el => el.attributes.compressorType );
  let repeat_brands = (brands.filter((text,index) => brands.indexOf(text) === index)).sort((a,b) => a-b);
  let repeat_power = (power.filter((text,index) => power.indexOf(text) === index)).sort((a,b) => a-b);
  let repeat_compressor = (compressor.filter((text,index) => compressor.indexOf(text) === index)).sort((a,b) => a-b);
  const Clear = () =>{
    sessionStorage.clear()
  };

    return (
      <div style={{marginLeft: 20}}>
        <div>
        <div>Производитель</div>
        <div>{repeat_brands.map((item,index) =><div style={{display:'flex'}} key={index+'b'}><label><input type='checkbox'   style={{transform: 'Scale(1.5)'}} onChange={(e)=>{
            console.log(make_brandfilter())
            make_brandfilter(e.target.checked ? [...make_brandfilter (),item]: make_brandfilter ().filter(elem=>elem !== item) )}} defaultChecked ={make_brandfilter().includes(item)} />
        </label><span style={{marginLeft:10}}>{item}</span></div>)}</div>
        
        </div>
        <div>
        <div>Мощность, BTU/H</div>
        <div>{repeat_power.map((item,index) =><div style={{display:'flex'}} key={index+'p'}><label><input type='checkbox'   style={{transform: 'Scale(1.5)' }} onChange={(e)=>{
            console.log(make_powerfilter())
            make_powerfilter(e.target.checked ? [...make_powerfilter (),item]: make_powerfilter ().filter(elem=>elem !== item) )}} defaultChecked ={make_powerfilter().includes(item)} /></label><span style={{marginLeft:10}}>{item}</span></div>)}</div>
        </div>
        <div>
        <div>Тип компрессора</div>
        <div>{repeat_compressor.map((item,index) =><div style={{display:'flex'}} key={index+'p'}><label><input type='checkbox'   style={{transform: 'Scale(1.5)' }} onChange={(e)=>{
            console.log(make_compressorfilter())
            make_compressorfilter(e.target.checked ? [...make_compressorfilter (),item]: make_compressorfilter ().filter(elem=>elem !== item) )}} defaultChecked ={make_compressorfilter().includes(item)}/></label><span style={{marginLeft:10}}>{item}</span></div>)}</div>
        </div>

        </div>
      
    );
}


export default FilterBox;