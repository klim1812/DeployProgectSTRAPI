import React from 'react';
import Icon from '@mui/material/Icon';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import MenuSubcategory from './MenuSubcategory';
import { make_sucategory } from '..';

function ItemAccordion({data}) {
  let eee = data

  
    return (
      <>
            <Accordion key={data.id + 5} >
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <Icon>{data.attributes.icon}</Icon>
            <Typography variant="h6" gutterBottom>{data.attributes.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
              {data.attributes.subcategories.data.map(list =>  <MenuSubcategory key={list.attributes.name} dataS={list} />)}
        </AccordionDetails>
            </Accordion>
            </>
    );
}


export default ItemAccordion;