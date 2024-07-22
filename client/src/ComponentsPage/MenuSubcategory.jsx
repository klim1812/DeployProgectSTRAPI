import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { make_subcategory } from '..';
import { make_brandfilter } from '..';
import { make_powerfilter } from '..';
import { make_compressorfilter } from '..';

function MenuSubcategory({dataS}) {

  const handleChange = () =>{
    make_brandfilter([]);
    make_powerfilter([]);
    make_compressorfilter([]);
  };

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    
        <nav aria-label="secondary mailbox folders">
          <List>
        
            <ListItem key={dataS.id} disablePadding onClick={handleChange}>
              <ListItemButton component="a" href="#simple-list" onClick={() =>{
                make_subcategory(dataS.id)}}>
             
               <ListItemText>{dataS.attributes.name}</ListItemText>
              </ListItemButton>
              
            </ListItem>
            <Divider/>
          </List>
        </nav>
      </Box>
    );
}


export default MenuSubcategory;