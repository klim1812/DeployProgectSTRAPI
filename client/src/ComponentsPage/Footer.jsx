import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import { CONTACT_ROUTE } from '../utils';


function Footer() {
  const [value, setValue] = React.useState(0);
  
    return (
         
      <BottomNavigation
        showLabels
        value={value}
        sx={{alignItems:'center'}}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Недавно просмотренные" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Избранные товары" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Показать на карте" icon={<Link to={CONTACT_ROUTE}><LocationOnIcon /></Link>} />
      </BottomNavigation>
    
    );
}


export default Footer;