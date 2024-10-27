import React from 'react';
import Footer from './common/Footer';
import { Outlet } from 'react-router-dom';
import Header from './common/Header';
import { Box } from '@mui/material';

const Layout = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      pl: '210px',
      pr: '210px',
    }}
  >
    <Header />
    <Box
      component="main"
      sx={{
        flex: 1,
        // border: `1px solid #E0E0E0`,
      }}
    >
      <Outlet />
    </Box>
    <Footer />
  </Box>
);

export default Layout;
