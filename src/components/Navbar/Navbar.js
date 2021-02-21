import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";
import Logo from "../../img/Logo.png";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavLink to="/">
        <img src={Logo} alt="logo" />
      </NavLink>
      <Bars onClick={toggle} />
    </Nav>
  );
};

export default Navbar;
