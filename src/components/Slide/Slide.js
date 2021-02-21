import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { fadeAnimation } from "../../animation";
import {
  ProjectImg,
  SlideContainer,
  BackVideo,
  TextContainer,
  ProjectContainer,
  Image,
  ProjectLink,
  Span1,
  Span2,
} from "./SlideElements";

const Slide = ({ data }) => {
  return (
    <SlideContainer
      variants={fadeAnimation}
      initial="hidden"
      animate="show"
      data={data}
    >
      {data.video && (
        <BackVideo autoPlay muted loop>
          <source src={data.video} type="video/mp4" />
        </BackVideo>
      )}

      <TextContainer>
        <motion.h2
          whileHover={{
            y: -10,
            color: "rgb(255,255,255)",
            transition: { duration: 0.2 },
          }}
        >
          {data.span2 && <Span2>{data.span2}</Span2>} {data.h2}
          {data.span && <Span1>{data.span}</Span1>}
        </motion.h2>
        {data.div && <div></div>}
        {data.h3 && <h3>{data.h3}</h3>}
        {data.h4 && <h4>{data.h4}</h4>}
        {data.code && (
          <p>
            {data.code.one}
            <span>{data.code.two}</span>
            {data.code.three}
            <span>{data.code.four}</span>
          </p>
        )}
        {data.contactButton && (
          <Link to="/contact">
            <button>{data.contactButton}</button>
          </Link>
        )}
        {data.projectButton && (
          <Link to="/projects">
            <button>{data.projectButton}</button>
          </Link>
        )}
      </TextContainer>
      {data.projects && (
        <ProjectContainer
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          {data.projects.map((p, index) => (
            <ProjectLink href={p.url} target="_blank" key={index}>
              <ProjectImg
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                src={p.img}
                alt=""
              />
            </ProjectLink>
          ))}
        </ProjectContainer>
      )}
      {data.animation && (
        <Image
          src={data.animation.img1}
          alt="planet"
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
      )}
    </SlideContainer>
  );
};

export default Slide;
