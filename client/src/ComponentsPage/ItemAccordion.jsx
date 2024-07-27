import React from 'react';
import Icon from '@mui/material/Icon';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import MenuSubcategory from './MenuSubcategory';
import { SUBCATEGORIES } from '../ApolloQuery/Subcategories';
import { useQuery } from '@apollo/client';

function ItemAccordion({text}) {
  const {data, loading,error} = useQuery(SUBCATEGORIES,{variables:{id:text.id}});

  if(loading){
      return<h2>...loading</h2>
    }
    if(error){
      return<h2>Error...</h2>
    };
    
// let subcatalog = text.subcategories;
 console.log(data.subcategories.data)
   return (
      <>
            <Accordion key={text.id} >
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <Icon color='warning' sx={{margin:1}}>{text.attributes.icon}</Icon>
            <Typography variant="h6" color='primary' gutterBottom>{text.attributes.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
              {data.subcategories.data.map(list =>  <MenuSubcategory key={list.attributes.name} dataS={list} />)}
        </AccordionDetails>
            </Accordion>
            </>
    );
}


export default ItemAccordion;