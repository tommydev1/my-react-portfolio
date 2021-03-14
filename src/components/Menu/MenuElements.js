import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const MenuContainer = styled.div`
  position: fixed;
  background: rgba(244, 249, 249, 0.2);
  left: 0;
  top: 0;
  width: 100%;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "10" : "-1")};
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  margin: 7rem;
  h1 {
    font-size: 6rem;
  }
  @media screen and (max-width: 768px) {
    margin: 5rem;
  }
`;

export const MenuWrap = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Line = styled.div`
  height: 6px;
  width: 8rem;
`;
