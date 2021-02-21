import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactContainer = styled(motion.div)`
  min-height: 95vh;
  display: flex;
  align-items: center;
  filter: ${({ isOpen }) => (isOpen ? "blur(10px)" : "none")};
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-evenly;
    padding-top: 10rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  p {
    margin-top: 1rem;
    text-align: right;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
  color: white;
  p {
    padding-bottom: 3rem;
    font-size: 2rem;
  }
  h1 {
    font-size: 4rem;
    color: #00e4c3;
    text-shadow: 1px 1px 2px #80ffdb;
    width: fit-content;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
    padding-left: 0;
  }
`;

export const EmailNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NameInput = styled.input`
  width: 48%;
  border: 0;
  background: rgba(43, 43, 43, 0.5);
  height: 50px;
  font-size: 16px;
  color: white;
  padding: 0 20px;
  margin: 1rem 0;
  &:focus {
    outline: none;
    border-bottom: 2px solid #6930c3;
  }
`;
export const EmailInput = styled(NameInput)``;
export const TitleInput = styled(NameInput)`
  width: 100%;
`;
export const MessageBox = styled.textarea`
  width: 100%;
  border: 0;
  background: rgba(43, 43, 43, 0.5);
  height: 15rem;
  font-size: 16px;
  color: white;
  padding: 10px 20px;
  margin: 1rem 0;
  resize: vertical;
  max-height: 28rem;
  &:focus {
    outline: none;
    border-bottom: 2px solid #6930c3;
  }
`;
export const SubmitButton = styled.button`
  margin-top: 1rem;
  width: 20%;
  margin-left: 80%;
`;

export const WorldImage = styled.img`
  position: absolute;
  right: 0;
  width: 70%;
  z-index: -1;
  @media screen and (max-width: 1024px) {
    position: relative;
  }
`;
