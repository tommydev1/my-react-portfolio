import { motion } from "framer-motion";
import styled from "styled-components";

export const SliderContainer = styled(motion.div)`
  min-height: 95vh;
  position: relative;
  filter: ${({ isOpen }) => (isOpen ? "blur(10px)" : "none")};
`;

export const ActiveContainer = styled.div`
  transition: all 1s ease;
  opacity: ${(props) => (props.active ? 1 : 0.9)};
  transition: all 1s ease;
`;

export const SlideNav = styled.div`
  background: transparent;
  position: absolute;
  top: 0;
  right: 0;
  width: 5vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
    border: 1px solid white;
    margin: 0.5rem;
    cursor: pointer;
  }
`;
