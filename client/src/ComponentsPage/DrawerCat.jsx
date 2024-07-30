import React from "react";
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import { useQuery } from '@apollo/client';
import { CATEGORIES } from '../ApolloQuery/Categories';
import ItemAccordion from "./ItemAccordion";
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { HOME_PAGE } from "../utils";


function DrawerCat(){
  const navigate = useNavigate();
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
      <Toolbar>  <Box onClick={()=>navigate(HOME_PAGE)} sx={{marginLeft:'auto',marginRight:'auto'}}>
          
          <Typography
            variant="h5"
       
            sx={{
         
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#90EE90',
              textDecoration: 'none',
              marginRight:'50px'
            }}
          >
            CLIMATE
          </Typography>
          
          </Box> </Toolbar>
      <Divider />
      <>
        {categories_data.map((text) => (
          <ItemAccordion key={text.id} text={text}/>
        ))}
      
      </>
      <Divider />
    </div>)
    };
    export default DrawerCat;