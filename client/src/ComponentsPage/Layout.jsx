import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Header from './Header';
import {ABOUT_ROUTE} from '../utils';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function Layout() {
 
  const [mode, setMode] = React.useState('dark');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  
    return (
        <>
        <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <Container maxWidth="xl" >
        <CssBaseline />
        {/* <nav> */}
          <Header/>
          {/* <Link to={ABOUT_ROUTE}>ABOUT_ROUTE</Link> */}
          {/* </nav> */}
        <main>
          
          <Outlet/>
        
        </main>
        <Divider/>
        {/* <Footer/> */}
        </Container>
        </ThemeProvider>
         </ColorModeContext.Provider>
        </>
    );
}


export default Layout;