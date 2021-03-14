import { motion } from "framer-motion";
import styled from "styled-components";

export const SlideContainer = styled(motion.div)`
  min-width: 100%;
  min-height: 95vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProjectLink = styled.a`
  pointer-events: none;
`;

export const ProjectContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 10rem;
  @media screen and (max-width: 1024px) {
    padding-right: 4rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    padding: 0;
  }
`;

export const ProjectImg = styled(motion.img)`
  pointer-events: all;
  width: 60%;
  padding: 2rem;
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 617px) {
    width: 100%;
  }
`;

export const BackVideo = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`;

export const TextContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5rem;
  h2 {
    padding-bottom: 1rem;
  }
  div {
    background: white;
    height: 1px;
    width: 40%;
    margin-top: -2rem;
    margin-bottom: 2rem;
    box-shadow: 1px 1px 4px white;
  }
  h3 {
    padding-bottom: 2rem;
    text-shadow: 0.1px 0.1px 1px #6930c3;
    font-weight: 600;
  }
  h4 {
    padding-bottom: 2rem;
    text-shadow: 1px 1px 2px #6930c3;
    font-weight: 400;
  }
  p {
    color: #64dfdf;
    font-size: 2.7rem;
    margin-top: 2rem;
    text-shadow: 1px 1px 8px #64dfdf;
  }
  button {
    margin-top: 1.8rem;
  }
  @media screen and (max-width: 768px) {
    padding: 5rem 2.5rem;
  }
`;

export const Span1 = styled.span`
  color: #00e4c3;
  text-shadow: 1px 1px 2px #80ffdb;
`;
export const Span2 = styled.span`
  color: #6b28b0;
  text-shadow: 1px 1px 2px #883cd8;
`;

export const Image = styled(motion.img)`
  flex: 1;
  width: 30%;
  padding-right: 10rem;
  @media screen and (max-width: 768px) {
    width: 40%;
    padding: 0;
    margin-bottom: 5rem;
  }
`;
