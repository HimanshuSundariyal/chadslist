import React from 'react';
import { useLocation, NavLink, withRouter } from 'react-router-dom';

import TabItem from '../components/tabs/TabItem';
import { TwitterIcon } from '../components/icons';

import logo from '../assets/images/logo.png';
import homeImage from '../assets/images/icons/home.png';
import basketImage from '../assets/images/icons/basket.png';
import dotsImage from '../assets/images/icons/dots.png';

const Footer = () => {
  const location = useLocation();
  return (
    <div className="page-footer">
      <div className="footer-nav">
        <div className="navbar-left menus">
          <TabItem active={location.pathname === '/' ? true : false} image={homeImage}><NavLink to={'/'}>Home / Mint</NavLink></TabItem>
          <TabItem active={location.pathname === '/list' ? true : false} image={basketImage}><NavLink to={'/list'}>Marketplace</NavLink></TabItem>
          <TabItem image={dotsImage}><NavLink to={'/'}>About</NavLink></TabItem>
        </div>
      </div>
      <div className="footer-logo">
        <div className="container-fluid">
          <img src={logo} width="400" height="auto" alt="Top Logo" />
          <div className="d-flex flex-column align-items-md-end align-items-center">
            <div className="d-flex align-items-center mr-4">
              <a href="/#"><TwitterIcon /></a>
              <a href="/#"><TwitterIcon /></a>
            </div>
            <span className="mr-4">do you even chad, bro?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Footer);
