import React from "react";
import {
  AboutContainer,
  AboutTextWrap,
  Image,
  ImageContainer,
} from "./AboutElements";
import Group1 from "../../../img/Group1.svg";
import Group2 from "../../../img/Group2.svg";
import Group3 from "../../../img/Group3.svg";
import { pageAnimation } from "../../../animation";
import { motion } from "framer-motion";

const About = ({ isOpen }) => {
  return (
    <AboutContainer
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      isOpen={isOpen}
    >
      <AboutTextWrap>
        <motion.h2
          whileHover={{
            y: -10,
            color: "rgb(255,255,255)",
            transition: { duration: 0.2 },
          }}
        >
          About Me
        </motion.h2>
        <p>
          Fascinated about Programming and Computer Science since my early life.
        </p>
        <br />
        <p>Well-organized person and lover of Art & Nature.</p>
        <p>Music is my passion, creativity my Engine.</p>
        <br />
        <p>I am interested in the entire frontend spectrum.</p>
        <p>Always trying to make the user's life much easier and nicer.</p>
      </AboutTextWrap>
      <ImageContainer>
        <Image
          src={Group1}
          alt="ball"
          whileTap={{ scale: 0.9 }}
          drag={true}
          dragConstraints={{ left: 0, right: 0, top: 50, bottom: 150 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
        <Image
          src={Group2}
          alt="ball"
          whileTap={{ scale: 0.9 }}
          drag={true}
          dragConstraints={{ left: 0, right: 0, top: 50, bottom: 50 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
        <Image
          src={Group3}
          alt="ball"
          whileTap={{ scale: 0.9 }}
          drag={true}
          dragConstraints={{ left: 0, right: 0, top: 50, bottom: 50 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
      </ImageContainer>
    </AboutContainer>
  );
};

export default About;
