import React from 'react';
import Nav from '../../../components/ShadcnNavbar';

const Layout = ({ children }) => {
  return (
    <>
      <ShadcnNavbar />
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
