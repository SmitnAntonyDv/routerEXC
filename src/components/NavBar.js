import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink exact to="/">
        HomePage
      </NavLink>
      <NavLink to="/about"> About us</NavLink>
      <NavLink to="/discover">Discover all our movies!</NavLink>
    </div>
  );
}

export default NavBar;
