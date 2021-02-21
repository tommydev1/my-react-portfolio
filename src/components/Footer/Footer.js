import React from "react";
import { FooterContainer } from "./FooterElements";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Tommy Dev.</p>
      <div>
        <a href="https://github.com/tommydev1" target="_blank">
          <AiOutlineGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/thomas-m%C3%BCller-576093207/"
          target="_blank"
        >
          <AiOutlineLinkedin />
        </a>
        <a href="mailto: thomasmmlr@gmail.com">
          <HiOutlineMail />
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
