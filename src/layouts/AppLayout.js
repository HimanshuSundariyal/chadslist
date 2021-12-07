import React from 'react';

import Header from '../containers/Header';
import Footer from '../containers/Footer';

const AppLayout = ({ children }) => {
  return (
    <div id="app-container">
      <Header />
      <main>
        <div className="container-fluid">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
