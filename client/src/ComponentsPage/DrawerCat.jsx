import React from "react";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BathtubIcon from '@mui/icons-material/Bathtub';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useQuery } from '@apollo/client';
import { CATEGORIES } from '../ApolloQuery/Categories';
import ItemAccordion from "./ItemAccordion";

function DrawerCat(){

    const {data, loading,error} = useQuery(CATEGORIES);
    if(loading){
        return<h2>...loading</h2>
      }
      if(error){
        return<h2>Error...</h2>
      };

    let categories_data = data.categories.data
   
    return(
    <div>
      <Toolbar />
      <Divider />
      <>
        {categories_data.map((text) => (
          <ItemAccordion key={text.id} data={text}/>
        ))}
      
      </>
      <Divider />
    </div>)
    };
    export default DrawerCat;