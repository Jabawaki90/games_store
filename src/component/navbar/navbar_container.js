import React from "react";
import "./navbar_container.css";
import MenuContainer from "./menu_container";

const Navbar_Container = (props) => {
  return (
    <div className="navbar_main_container">
      <MenuContainer />
    </div>
  );
};

export default Navbar_Container;
