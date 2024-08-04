import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import { CART_ROUTE, HOME_PAGE } from '../utils';
import DrawerCat from '../ComponentsPage/DrawerCat';
import Shop from './Shop';
import { Container } from '@mui/material';
import FilterBox from '../ComponentsPage/FIlterBox';
import Typography from '@mui/material/Typography';
import { useCart } from 'react-use-cart';
import { ABOUT_ROUTE,CONTACT_ROUTE } from '../utils';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const drawerWidth = 300;
const ITEM_HEIGHT = 48;

function Catalog() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const open = Boolean(anchorEl);
  const {totalItems} = useCart();
 
 
 
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
         <Box style={{margin:'0 10px',display:'flex'}}>
          
          <Typography variant='h6' sx={{cursor:'pointer',margin:'15px'}} onClick={()=>navigate(HOME_PAGE)}>Главная</Typography>
          <Typography variant='h6'  sx={{cursor:'pointer',margin:'15px'}} onClick={()=>navigate(ABOUT_ROUTE)}>О нас</Typography>
          <Typography variant='h6' sx={{cursor:'pointer',margin:'15px'}} onClick={()=>navigate(CONTACT_ROUTE)}>Контакты</Typography>
       
          </Box>

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
                      
            <Button variant="text" sx={{margin:2}} onClick={()=>navigate(ABOUT_ROUTE)}>
                  О нас
            </Button>

           <Button variant="text" sx={{margin:2}} onClick={()=>navigate(CONTACT_ROUTE)}>
                 Контакты
            </Button>
                </Menu>

                </Box>
              <Box sx={{display:'flex',cursor:'pointer'}} onClick={()=>navigate(CART_ROUTE)}>
            <ShoppingCartIcon color='warning' /><Typography variant="caption">{totalItems}</Typography>
            </Box>

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
         
          <FilterBox/>
        </Drawer>
    
      </Box>
      <Box
        component="main"
       
        sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        
    <Box >
      <Shop/>
    </Box>
      </Box>
    </Box>
    
    </Container>
    </>
    );
}


export default Catalog;