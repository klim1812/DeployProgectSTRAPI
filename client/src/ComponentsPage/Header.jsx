import React from 'react';
import { Link } from 'react-router-dom';
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

const settings = [<Link to={AUTH_ROUTE}><Button variant="text"  >Авторизация</Button></Link>,<Button variant="text" onClick={
  ()=>localStorage.clear()}>Выйти из профиля</Button>];

function Header() {
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
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

    return (
   
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:'flex', flexFlow: 'row wrap'}}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <MenuItem  >
          <Link to={HOME_PAGE} style={{textDecorationLine:'none'}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#90EE90',
              textDecoration: 'none',
            }}
          >
            CLIMATE
          </Typography>
          </Link>
          </MenuItem>
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
              // id="long-menu"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              
            >
              <Box sx={{
                display: 'flex', flexDirection: 'column'
              }}>
              <Link to={CATALOG_ROUTE} style={{textDecorationLine:'none'}}>
              <Button variant="text" sx={{margin:2}} onClick={handleCloseNavMenu}>
                  Каталог
                </Button>
                </Link>

                <Link to={ABOUT_ROUTE} style={{textDecorationLine:'none'}}>
                <Button variant="text" sx={{margin:2}} onClick={handleCloseNavMenu}>
                  О нас
                  </Button>
                </Link>

                <Link to={CONTACT_ROUTE} style={{textDecorationLine:'none'}}>
                <Button variant="text" sx={{margin:2}} onClick={handleCloseNavMenu}>
                  Контакты
                  </Button>
                </Link>
             
                 <Link to={CART_ROUTE}  style={{textDecorationLine:'none'}}>
                 <Button variant="text" sx={{margin:2}} onClick={handleCloseNavMenu}>
                 Корзина
                 </Button>
                 </Link>

                 </Box>

            </Menu>
          </Box>
          
          {/* <Link to={HOME_PAGE} style={{textDecorationLine:'none' ,margin:'auto'}}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#90EE90',
              textDecoration: 'none',
              
            }}
          >
            CLIMATE
          </Typography>
          </Link> */}
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Link to={CATALOG_ROUTE} style={{textDecorationLine:'none'}}>
          <Typography variant="h6"  sx={{ minWidth: 100,color: 'white' }}>Каталог</Typography>
               
                </Link>
            
            <Link to={ABOUT_ROUTE} style={{textDecorationLine:'none'}}>
            <Typography variant="h6" sx={{ minWidth: 100,color: 'white' }}>О нас</Typography>
              
                </Link>
                <Link to={CONTACT_ROUTE} style={{textDecorationLine:'none'}}>
                <Typography variant="h6"  sx={{ minWidth: 100 ,color: 'white'}}>Контакты</Typography>
             
                </Link>
        
                </Box>
         
            
            
                <Link to={CART_ROUTE}>
    
       
         <Box sx={{display:'flex'}}>
            <ProductionQuantityLimitsIcon color='warning'/><Typography variant="caption">{totalItems}</Typography>
            </Box>
            
        </Link>
           
            
          </Box> 
         
      <IconButton sx={{ ml: 1 ,marginRight:'30px'}} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    
          <Box sx={{ flexGrow: 0 }}>
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
              {settings.map((setting,i) => (
                <MenuItem key={i} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
 
        </Toolbar>
      </Container>
    </AppBar>

    );
}


export default Header;