import styled from "styled-components";

export const FooterContainer = styled.div`
  background: black;
  min-height: 5vh;
  position: fixed;
  bottom: 0;
  left: 0;
  color: white;
  width: 100%;
  z-index: 99;
  padding: 0 2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 600;
  div {
    line-height: 0.8rem;
    width: 10rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      color: white;
    }
  }
`;
