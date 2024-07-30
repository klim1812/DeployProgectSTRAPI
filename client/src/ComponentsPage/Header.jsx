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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from "react-use-cart";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useMediaQuery from '@mui/material/useMediaQuery';




function Header() {

  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {totalItems} = useCart();
  const matches = useMediaQuery('(min-width:850px)');

  const styleMenu = { minWidth: 100,color: 'white', cursor:'pointer' };

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
        <Toolbar disableGutters sx={{display:'flex',justifyContent:'space-evenly'}}>
        

        <Box sx={{ flexGrow:'30px', display: { xs: 'flex', md: 'none' } }}>
          
            <IconButton
            sx={{maxWidth:'30px'}}
              size="small"
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
              
              <Typography sx={{margin:1}}  onClick={()=>{handleCloseNavMenu();setRoute(CATALOG_ROUTE)}}>
                  Каталог
                </Typography>
              
                <Typography  sx={{margin:1}} onClick={()=>{handleCloseNavMenu();setRoute(ABOUT_ROUTE)}}>
                  О нас
                  </Typography>
                        
                <Typography  sx={{margin:1}} onClick={()=>{handleCloseNavMenu();setRoute(CONTACT_ROUTE)}}>
                  Контакты
                  </Typography>
                                        
                <Typography  sx={{margin:1}} onClick={()=>{handleCloseNavMenu();setRoute(CART_ROUTE)}}>
                 Корзина
                 </Typography>
                
                 </Box>

            </Menu>
          </Box>
          
      <Box>{!matches ? <Typography sx={{color: '#7FFF00',marginLeft:15}} onClick={
                   ()=>setRoute(HOME_PAGE)}>climatesite.shop</Typography> : <Box sx={{display:'flex',alignItems:'center'}}>
        <AdbIcon sx={{color: '#7FFF00'}}/><Typography variant="h6"  sx={{ minWidth: 100,color: '#7FFF00',marginRight:10 }} onClick={
                   ()=>setRoute(HOME_PAGE)}>CLIMATE</Typography></Box>}</Box>
         
          <Box sx={{ display: {xs: 'none',  md: 'flex' }}}>

                <Typography variant="h6" fontFamily='"Segoe UI"'  sx={styleMenu} onClick={
                   ()=>setRoute(CATALOG_ROUTE)}>Каталог</Typography>
                                               
                <Typography variant="h6" fontFamily='"Segoe UI"'  sx={styleMenu} onClick={
                   ()=>setRoute(ABOUT_ROUTE)}>О нас</Typography>
                             
                <Typography variant="h6" fontFamily='"Segoe UI"'  sx={styleMenu} onClick={
                  ()=>setRoute(CONTACT_ROUTE)}>Контакты</Typography>
                                                                                                                                   
          </Box> 

           
       
<Box sx={{display:'flex',justifyContent:'space-evenly', flexDirection:'row',justifyItems:'stretch',alignItems:'center',marginLeft:'auto'}}>

<IconButton  onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>

      <Box  onClick={()=>setRoute(CART_ROUTE)} sx={{display:'flex'}}>
            <ShoppingCartIcon color='warning'/><Typography variant="caption">{totalItems}</Typography>
            </Box> 
    
          <Box >
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    );
}


export default Header;