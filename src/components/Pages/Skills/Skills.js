import { motion } from "framer-motion";
import React from "react";
import { pageAnimation } from "../../../animation";
import Dice from "../../Dice/Dice";
import { SkillsContainer, SkillsTextWrap } from "./SkillsElements";

const Skills = ({ isOpen }) => {
  return (
    <SkillsContainer
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      isOpen={isOpen}
    >
      <SkillsTextWrap>
        <motion.h2
          whileHover={{
            y: -10,
            color: "rgb(255,255,255)",
            transition: { duration: 0.2 },
          }}
        >
          Skills
        </motion.h2>
        <p>The main area I am working in is Front End Development.</p>
        <p>
          Inevitable, my main skills are all about HTML, CSS (SASS) and
          JavaScript.
        </p>
        <br />
        <p>
          I've worked with different JavaScript Frameworks,
          <br />
          whereat I am mostly experienced with React.
        </p>
        <br />
        <p>I am also comfortable with the functionality of Git and</p>
        <p>
          have some Backend knowledge with Databases (Mongo.db) and Node.js.
        </p>
      </SkillsTextWrap>
      <Dice style={{ flex: 1 }} />
    </SkillsContainer>
  );
};

export default Skills;
