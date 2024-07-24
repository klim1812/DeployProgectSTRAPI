import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ABOUT_ROUTE, CART_ROUTE, CATALOG_ROUTE, CONTACT_ROUTE, HOME_PAGE,AUTH_ROUTE } from '../utils';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useTheme} from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {ColorModeContext} from './Layout';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { useCart } from "react-use-cart";
import MoreVertIcon from '@mui/icons-material/MoreVert';



function Header() {

  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {totalItems} = useCart();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  function setRoute(e){
    navigate(e)
};
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

    return (
   
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:'flex', flexFlow: 'row wrap'}}>
        <AdbIcon sx={{color: '#7FFF00'}} />

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"             
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              
            >
              <Box sx={{
                display: 'flex', flexDirection: 'column'
              }}>
              
              <Button variant="text" sx={{margin:2}} onClick={()=>{handleCloseNavMenu();setRoute(CATALOG_ROUTE)}}>
                  Каталог
                </Button>
              
                <Button variant="text" sx={{margin:2}} onClick={()=>{handleCloseNavMenu();setRoute(ABOUT_ROUTE)}}>
                  О нас
                  </Button>
                        
                <Button variant="text" sx={{margin:2}} onClick={()=>{handleCloseNavMenu();setRoute(CONTACT_ROUTE)}}>
                  Контакты
                  </Button>
                                        
                <Button variant="text" sx={{margin:2}} onClick={()=>{handleCloseNavMenu();setRoute(CART_ROUTE)}}>
                 Корзина
                 </Button>
                
                 </Box>

            </Menu>
          </Box>
          
      
         
          <Box sx={{ justifyContent: 'space-around', alignItems:'center',display: { xs: 'none', md: 'flex' }}}>

            <Box sx={{display: 'flex',justifyContent: 'space-around',margin:'0 10px'}}>
            
                <Typography variant="h6"  sx={{ minWidth: 100,color: '#7FFF00',marginRight:10 }} onClick={
                   ()=>setRoute(HOME_PAGE)}>CLIMATE</Typography>
          
                <Typography variant="h6"  sx={{ minWidth: 100,color: 'white' }} onClick={
                   ()=>setRoute(CATALOG_ROUTE)}>Каталог</Typography>
                                               
                <Typography variant="h6" sx={{ minWidth: 100,color: 'white' }} onClick={
                   ()=>setRoute(ABOUT_ROUTE)}>О нас</Typography>
                             
                <Typography variant="h6"  sx={{ minWidth: 100 ,color: 'white' }} onClick={
                  ()=>setRoute(CONTACT_ROUTE)}>Контакты</Typography>
                                  
                </Box>
                                              
                                                
          </Box> 

           
      <IconButton sx={{ marginRight:'30px',marginLeft:'auto'}} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>

      <Box  onClick={()=>setRoute(CART_ROUTE)} >
            <ProductionQuantityLimitsIcon color='warning'/><Typography variant="caption">{totalItems}</Typography>
            </Box> 
    
          <Box sx={{ flexGrow: 0,marginLeft:'20px' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MoreVertIcon/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            <MenuItem onClick={()=>{handleCloseNavMenu();setRoute(AUTH_ROUTE)}}>
                  <Typography textAlign="center">Авторизация</Typography>
                </MenuItem>
                <MenuItem onClick={()=>{handleCloseUserMenu();localStorage.clear()}}>
                  <Typography textAlign="center">Выйти из профиля</Typography>
                </MenuItem>
            </Menu>
          </Box>
 
        </Toolbar>
      </Container>
    </AppBar>

    );
}


export default Header;