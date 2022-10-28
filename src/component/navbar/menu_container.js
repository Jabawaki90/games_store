import React from "react";
import "./menu_container.css";

const Menu_container = (props) => {
  return (
    <div className="menu_container">
      <div className="left-nav">
        <div className="logo_container">
          <h1 className="game">Game</h1>
          <h1 className="store">Store</h1>
        </div>
        <ul className="tabbed_navigation_container">
          <li className="tabbed_navigation_single">
            <a href="">Home</a>
          </li>
          <li className="tabbed_navigation_single">
            <a href="">Adventure</a>
          </li>
          <li className="tabbed_navigation_single">
            <a href="">RPG</a>
          </li>
          <li className="tabbed_navigation_single">
            <a href="">High Rating</a>
          </li>
          <li className="tabbed_navigation_single">
            <a href="">My List</a>
          </li>
        </ul>
      </div>
      <div className="tabbed_navigation_secondary right-nav">
        <div className="nav-element">
          <a href="">
            <ion-icon name="search"></ion-icon>
          </a>
        </div>
        <div className="nav-element">
          <a href="">
            <ion-icon name="notifications"></ion-icon>
          </a>
        </div>
        <div className="nav-element">
          <a href="">
            <img src="/user.png" alt="asdsad" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu_container;
