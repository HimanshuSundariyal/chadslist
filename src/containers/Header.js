import React, { useState } from 'react';

import SideDrawer from "./SideDrawer";
import BackDrop from "./BackDrop";
import Toolbar from "./Toolbar";

const Header = () => {

  const [sideDrawerOpen, updateSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    updateSideDrawerOpen(!sideDrawerOpen);
  };

  const backDropClickHandler = () => {
    updateSideDrawerOpen(false);
  };

  return (
    <>
    <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
    <SideDrawer show={sideDrawerOpen} />
    {
      sideDrawerOpen && (
        <BackDrop click={backDropClickHandler} />
      )
    }
    </>
  );
};

export default Header;
