import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutContainer = styled(motion.div)`
  min-height: 95vh;
  padding: 0 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  filter: ${({ isOpen }) => (isOpen ? "blur(10px)" : "none")};
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 10rem;
  }
`;

export const AboutTextWrap = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  color: white;
  h2 {
    color: #00e4c3;
    text-shadow: 1px 1px 2px #80ffdb;
  }
  p {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 1024px) {
    padding-top: 10rem;
    p {
      font-size: 2.5rem;
    }
  }
`;

export const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  max-width: 8rem;
  max-width: 8rem;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: visible;
  @media screen and (max-width: 1024px) {
    padding-bottom: 20rem;
  }
  ${Image}:nth-child(1) {
    margin-bottom: 15rem;
    max-width: 12rem;
    max-width: 12rem;
  }
  ${Image}:nth-child(3) {
    margin-top: 20rem;
    max-width: 16rem;
    max-width: 16rem;
  }
`;
