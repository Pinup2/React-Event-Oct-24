import React from 'react';
import Footer from './common/Footer';
import { Outlet } from 'react-router-dom';
import Header from './common/Header';
import { Box } from '@mui/material';

const Layout = () => (
  <>
  <Box sx={{

  }}>
    <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
  </Box>
  </>
);

export default Layout;