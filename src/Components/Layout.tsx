import React from 'react';
import Footer from './common/Footer';
import { Outlet } from 'react-router-dom';
import Header from './common/Header';

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;