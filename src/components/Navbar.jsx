import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/Navbar.css';

const Navbar = () => {
  return (
    <div
      className="site-navbar d-flex justify-content-around align-items-center"
      data-testid="navbar"
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Shop</NavLink>
      <NavLink to="/">Cart</NavLink>
    </div>
  );
};

export default Navbar;
