import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useQuery } from '@apollo/client';
import { CATEGORIES } from '../ApolloQuery/Categories';
import { Link } from 'react-router-dom';
import { CART_ROUTE, HOME_PAGE } from '../utils';
import DrawerCat from '../ComponentsPage/DrawerCat';
import Shop from './Shop';
import { Container } from '@mui/material';
import FilterBox from '../ComponentsPage/FIlterBox';
import Typography from '@mui/material/Typography';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Footer from '../ComponentsPage/Footer';
import { useCart } from 'react-use-cart';
import { ABOUT_ROUTE,CONTACT_ROUTE } from '../utils';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';

const drawerWidth = 300;
const ITEM_HEIGHT = 48;

function Catalog() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const open = Boolean(anchorEl);
  const {totalItems} = useCart();
  const {data: data_category, loading:load,error: data_error} = useQuery(CATEGORIES);
  
  if(load){
    return   <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
    <CircularProgress color="secondary" />
    <CircularProgress color="success" />
    <CircularProgress color="inherit" />
  </Stack>
  }
  if(data_error){
    return<h2>Error...</h2>
  };
 
  let categories_data = data_category.categories.data
 
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
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  let data_card = categories_data.map(el => el.attributes.subcategories)
 

    return (
      <>
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
        <Toolbar sx={{display:'flex', flexFlow: 'row wrap'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
            
          </IconButton>
         <div style={{margin:'0 10px'}}>
          <Link to={HOME_PAGE} style={{textDecorationLine:'none' }}>
          <Typography
            variant="h5"
       
            sx={{
         
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#90EE90',
              textDecoration: 'none',
              marginRight:'50px'
            }}
          >
            CLIMATE
          </Typography>
          </Link>
          </div>

         
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center',marginLeft:'auto' }}>
            <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}>
         <MoreVertIcon />
         </IconButton>
         <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
           
            <Link to={ABOUT_ROUTE} style={{textDecorationLine:'none'}}>
            <Button variant="text" sx={{margin:2}}>
                  О нас
                  </Button>
                </Link>
                <Link to={CONTACT_ROUTE} style={{textDecorationLine:'none'}}>
                <Button variant="text" sx={{margin:2}}>
                 Контакты
                  </Button>
                </Link>
                </Menu>
                </Box>

<Link to={CART_ROUTE} style={{textDecorationLine:'none', marginLeft:'20px' }}>
            <Typography  noWrap component="div" sx={{ marginRight:'20px',color: 'white'}}>
              <Box sx={{display:'flex'}}>
            <ProductionQuantityLimitsIcon color='warning'/><Typography variant="caption">{totalItems}</Typography>
            </Box>
            </Typography>
          </Link>
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
      <Shop/>
    </Box>
      </Box>
    </Box>
    
    </Container>
    <Footer/>
    </>
    );
}


export default Catalog;