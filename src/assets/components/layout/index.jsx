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
          <p>&copy; {new Date().getFullYear()} Tech Gen Informatics. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
