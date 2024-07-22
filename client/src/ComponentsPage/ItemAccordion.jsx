import React from 'react';
import Icon from '@mui/material/Icon';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import MenuSubcategory from './MenuSubcategory';


function ItemAccordion({data}) {
 
   return (
      <>
            <Accordion key={data.id + 5} >
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <Icon color='warning' sx={{margin:1}}>{data.attributes.icon}</Icon>
            <Typography variant="h6" color='primary' gutterBottom>{data.attributes.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
              {data.attributes.subcategories.data.map(list =>  <MenuSubcategory key={list.attributes.name} dataS={list} />)}
        </AccordionDetails>
            </Accordion>
            </>
    );
}


export default ItemAccordion;