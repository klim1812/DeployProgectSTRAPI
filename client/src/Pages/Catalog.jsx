import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import SvgIcon from '@mui/material/SvgIcon';
import Toolbar from '@mui/material/Toolbar';
import { useQuery } from '@apollo/client';
import { SUBCATEGORIES } from '../ApolloQuery/Subcategories';
import { CATEGORIES } from '../ApolloQuery/Categories';
import { NavLink } from 'react-router-dom';
import { HOME_PAGE } from '../utils';
import DrawerCat from '../ComponentsPage/DrawerCat';
import Shop from './Shop';
import { Container } from '@mui/material';
import FilterBox from '../ComponentsPage/FIlterBox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

const drawerWidth = 300;

function Catalog() {
  const [age, setAge] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const {data: data_category, loading:load,error: data_error} = useQuery(CATEGORIES);
  

  if(load){
    return<h2>...loading</h2>
  }
  if(data_error){
    return<h2>Error...</h2>
  };
 
  let categories_data = data_category.categories.data
 
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  
  let data_card = categories_data.map(el => el.attributes.subcategories)
 
  
    return (
    <Container maxWidth="xl">
          <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, 
        }}
      >
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
            
          </IconButton> */}
          
          <NavLink to={HOME_PAGE} style={{textDecorationLine:'none', marginRight:'20px', }}>
            
          <Typography variant="h6" noWrap component="div" sx={{ marginRight:'20px',color: 'white'}}>
            HOME</Typography></NavLink>
            <div>
         
          <FormControl sx={{ m: 1, minWidth: 250}}>
          
          <InputLabel id="demo-select-small-label" >Товаров на странице</InputLabel>
  <Select
  labelId="demo-select-small-label"
  id="demo-select-small"
  value={age}
  onChange={handleChange}
  // label="Age"  
  >
    
    <MenuItem value={10}>10</MenuItem>
    <MenuItem value={20}>20</MenuItem>
    <MenuItem value={30}>30</MenuItem>
  </Select>
</FormControl>
</div>
        </Toolbar>


      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
        aria-label="mailbox folders"
      >
        
        <Drawer
          
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <DrawerCat/>
          <Toolbar />
          <Divider />
          <FilterBox/>
          
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <DrawerCat/>
          <Toolbar />
          <Divider />
          <FilterBox/>
        </Drawer>
    
      </Box>
      <Box
        component="main"
       
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
    <Box >
      <Shop pages={age}/>
    </Box>
      </Box>
    </Box>
    </Container>
    );
}


export default Catalog;