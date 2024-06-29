import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';
import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';

function Footer() {
  const [value, setValue] = React.useState(0);
  
    return (
         
        // <Paper sx={{position:'fixed', bottom: 0 ,left:50,right:50}} elevation={10} >
      <BottomNavigation
        showLabels
        value={value}
        sx={{alignItems:'center'}}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
      // </Paper>
    
    );
}


export default Footer;