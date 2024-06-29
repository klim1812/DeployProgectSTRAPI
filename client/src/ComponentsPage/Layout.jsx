import React from 'react';
import Header from '../ComponentsPage/Header';
import Footer from '../ComponentsPage/Footer';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import PaginationBlock from './PaginationBlock';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


function Layout() {
 
  const [mode, setMode] = React.useState('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
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
        <Container maxWidth="xl">
        <CssBaseline />
        <main>
          
          <Outlet/>
        
        </main>
        
        <Footer/>
        </Container>
        </ThemeProvider>
        </ColorModeContext.Provider>
        </>
    );
}


export default Layout;