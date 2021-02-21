import React, { useState } from "react";
import {
  ActiveContainer,
  CarouselLink,
  LeftArrow,
  ProjectsCarousel,
  ProjectsContainer,
  ProjectsTextWrap,
  RightArrow,
} from "./ProjectsElements";
import { projectData } from "./projectData";
import { carouselRight, carouselLeft, pageAnimation } from "../../../animation";
import { motion } from "framer-motion";

const Projects = ({ isOpen }) => {
  const [right, setRight] = useState(false);

  const [currentP, setCurrentP] = useState(0);
  const length = projectData.length;

  const prevItem = () => {
    setRight(false);
    setCurrentP(currentP === 0 ? length - 1 : currentP - 1);
  };

  const nextItem = () => {
    setRight(true);
    setCurrentP(currentP === length - 1 ? 0 : currentP + 1);
  };

  return (
    <ProjectsContainer
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      isOpen={isOpen}
    >
      <ProjectsTextWrap>
        <motion.h2
          whileHover={{
            y: -10,
            color: "rgb(255,255,255)",
            transition: { duration: 0.2 },
          }}
        >
          Projects
        </motion.h2>
        <h3>Some of my favourite Personal Projects.</h3>
      </ProjectsTextWrap>
      <ProjectsCarousel>
        <LeftArrow onClick={prevItem} />
        <RightArrow onClick={nextItem} />

        {projectData.map((p, index) => (
          <ActiveContainer
            key={index}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            active={index === currentP ? true : false}
          >
            {index === currentP && (
              <CarouselLink href={p.url} target="_blank">
                <motion.img
                  variants={right ? carouselRight : carouselLeft}
                  initial="hidden"
                  animate="show"
                  src={p.img}
                  alt=""
                />
              </CarouselLink>
            )}
          </ActiveContainer>
        ))}
      </ProjectsCarousel>
    </ProjectsContainer>
  );
};

export default Projects;
