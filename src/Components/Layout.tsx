import React from 'react';
import Footer from './common/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;