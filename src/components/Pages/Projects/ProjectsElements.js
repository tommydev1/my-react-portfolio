import styled from "styled-components";
import { CgArrowLeftR, CgArrowRightR } from "react-icons/cg";
import { motion } from "framer-motion";

export const ProjectsContainer = styled(motion.div)`
  min-height: 95vh;
  padding: 0 5rem;
  display: flex;
  align-items: center;
  filter: ${({ isOpen }) => (isOpen ? "blur(10px)" : "none")};
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 10rem;
  }
`;

export const ProjectsTextWrap = styled.div`
  flex: 2;
  color: white;
  padding-right: 5rem;
  h2 {
    color: #00e4c3;
    text-shadow: 1px 1px 2px #80ffdb;
  }
  h3 {
    font-weight: 500;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 10rem;
    margin-bottom: 5rem;
  }
`;

export const ProjectsCarousel = styled.div`
  background: transparent;
  width: 35vw;
  height: 40vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
  overflow: visible;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 25rem;
    margin-right: 0;
    width: 60vw;
    height: 100%;
  }
`;

export const LeftArrow = styled(CgArrowLeftR)`
  position: absolute;
  top: 50%;
  left: -40px;
  font-size: 3rem;
  color: white;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const RightArrow = styled(CgArrowRightR)`
  position: absolute;
  top: 50%;
  right: -40px;
  font-size: 3rem;
  color: white;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const CarouselLink = styled.a`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ActiveContainer = styled(motion.div)`
  opacity: ${(props) => (props.active ? 1 : 0.9)};
`;
