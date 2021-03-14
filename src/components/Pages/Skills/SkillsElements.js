import { motion } from "framer-motion";
import styled from "styled-components";

export const SkillsContainer = styled(motion.div)`
  min-height: 95vh;
  display: flex;
  align-items: center;
  padding: 0 5rem;
  filter: ${({ isOpen }) => (isOpen ? "blur(10px)" : "none")};
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 10rem;
  }
`;

export const SkillsTextWrap = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  color: white;
  padding-right: 20rem;
  h2 {
    color: #00e4c3;
    text-shadow: 1px 1px 2px #80ffdb;
  }
  p {
    font-size: 2.2rem;
    span {
      color: #00e4c3;
    }
  }
  @media screen and (max-width: 1024px) {
    padding-right: 0;
    padding-top: 10rem;
    p {
      font-size: 2.5rem;
    }
  }
`;
