import React from "react";
import { NavLink, withRouter } from 'react-router-dom';

import homeImage from '../assets/images/icons/home.png';
import basketImage from '../assets/images/icons/basket.png';
import dotsImage from '../assets/images/icons/dots.png';

const SideDrawer = props => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
            <img src={homeImage} className="mr-3" alt="Home" /><NavLink to={'/'}>Home / Mint</NavLink>
        </li>
        <li>
            <img src={basketImage} className="mr-3" alt="Marketplace" /><NavLink to={'/list'}>Marketplace</NavLink>
        </li>
        <li>
            <img src={dotsImage} className="mr-3" alt="Dots" /><NavLink to={'/about'}>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(SideDrawer);