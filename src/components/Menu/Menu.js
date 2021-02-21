import React from "react";
import { useLocation } from "react-router-dom";
import { MenuContainer, NavLink, MenuWrap, Line } from "./MenuElements";

const Menu = ({ isOpen, toggle }) => {
  const { pathname } = useLocation();
  return (
    <MenuContainer isOpen={isOpen} onClick={toggle}>
      <MenuWrap>
        <NavLink onClick={toggle} to="/">
          <h1 style={{ color: pathname === "/" ? "#6930c3" : "white" }}>
            Home
          </h1>
          <Line
            style={{ background: pathname === "/" ? "#6930c3" : "white" }}
          />
          <p></p>
        </NavLink>
        <NavLink onClick={toggle} to="/about">
          <h1 style={{ color: pathname === "/about" ? "#6930c3" : "white" }}>
            About
          </h1>
          <Line
            style={{ background: pathname === "/about" ? "#6930c3" : "white" }}
          />
          <p></p>
        </NavLink>
        <NavLink onClick={toggle} to="/contact">
          <h1 style={{ color: pathname === "/contact" ? "#6930c3" : "white" }}>
            Contact
          </h1>
          <Line
            style={{
              background: pathname === "/contact" ? "#6930c3" : "white",
            }}
          />
          <p></p>
        </NavLink>
      </MenuWrap>
      <MenuWrap>
        <NavLink onClick={toggle} to="/skills">
          <h1 style={{ color: pathname === "/skills" ? "#6930c3" : "white" }}>
            Skills
          </h1>
          <Line
            style={{ background: pathname === "/skills" ? "#6930c3" : "white" }}
          />
          <p></p>
        </NavLink>
        <NavLink onClick={toggle} to="/projects">
          <h1 style={{ color: pathname === "/projects" ? "#6930c3" : "white" }}>
            Projects
          </h1>
          <Line
            style={{
              background: pathname === "/projects" ? "#6930c3" : "white",
            }}
          />
          <p></p>
        </NavLink>
      </MenuWrap>
    </MenuContainer>
  );
};

export default Menu;
