import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export const Nav = styled.nav`
  background: transparent;
  min-height: 8vh;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  width: 100%;
  z-index: 99;
  padding: 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 1024px) {
    overflow: hidden;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 10%;
  img {
    padding-top: 0.1rem;
    width: 100%;
    @media screen and (max-width: 1024px) {
      width: calc(80% + 80px);
    }
  }
`;

export const Bars = styled(GiHamburgerMenu)`
  font-size: 2.4rem;
  cursor: pointer;
`;
