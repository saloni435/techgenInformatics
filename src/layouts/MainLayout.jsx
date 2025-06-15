import React from 'react';
import Layout from '../assets/components/layout';

const MainLayout = ({ children }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};

export default MainLayout;
