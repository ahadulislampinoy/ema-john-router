import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="menu">
      <img src={logo} alt="" />
      <div className="menu-links">
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Shop
        </NavLink>
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
};

export default Header;
