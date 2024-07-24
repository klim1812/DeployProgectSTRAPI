
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { GOOGLE_MAPS_API_KEY } from '../utils';
import {APIProvider, Map, AdvancedMarker} from '@vis.gl/react-google-maps';
import { Typography } from '@mui/material';
// import {AdvancedMarker} from './advanced-marker';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Contacts() {

  const position = {lat: 53.54992, lng: 10.00678};


  return (
    <>
    
    <Box sx={{ width: '100%' }}>
        <Paper>
      <Stack spacing={6}>
        <Item><Typography>Компания "Climate" Центральный офис в Германия г.Гамбург,Бухльштрассе 111</Typography></Item>
        <Item>Администрация: т. +49 111 000 111</Item>

        <Item id="map" sx={{height:'100%'}}> 

        <APIProvider apiKey={GOOGLE_MAPS_API_KEY }>
    <Map
      style={{maxWidth: '80vw', height: '50vh'}}
      defaultCenter={{lat: 22.54992, lng: 0}}
      defaultZoom={3}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    >
      <AdvancedMarker position={position} />
      </Map>
  </APIProvider>
    
    </Item>

      </Stack>
      </Paper>
    </Box>
    </>
  );
};

