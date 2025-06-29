import React from 'react';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>
        {/* Footer content can be added here */}
        <div className="footer-content">
        </div>
      </footer>
    </>
  );
};

export default Layout;
