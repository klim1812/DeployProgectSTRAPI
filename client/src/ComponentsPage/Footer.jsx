import React, {  useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import { CONTACT_ROUTE } from '../utils';


function Footer() {
  const [value, setValue] = useState(0);
  // const[contact,useContact] = useState();
  const navigate = useNavigate();
  function setContact(){
    navigate(CONTACT_ROUTE)
  }
  
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
        <BottomNavigationAction label="Показать на карте" icon={<LocationOnIcon />} onClick={setContact}/>
      </BottomNavigation>
    
    );
}


export default Footer;