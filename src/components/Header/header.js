import React from "react";
import "./header.css";
export const Header = () => (
  <header className="Header">
    <img src={require("../../assets/logo.png")} className="logo" alt="logo" />
    <div className="HeaderContainer">Nobo Movies</div>
  </header>
);

export default Header(Header);
