import React, { useState } from "react";
import Slide from "../../Slide/Slide";
import { slidesData } from "../../Slide/slidesData";
import { ActiveContainer, SlideNav, SliderContainer } from "./HomeElements";
import { pageAnimation } from "../../../animation";

const Home = ({ isOpen }) => {
  const [current, setCurrent] = useState(0);
  const length = slidesData.length;

  const nextPrevSlide = (e) => {
    setTimeout(() => {
      e.deltaY > 0
        ? setCurrent(current === length - 1 ? 0 : current + 1)
        : setCurrent(current === 0 ? length - 1 : current - 1);
    }, 200);
  };

  return (
    <SliderContainer
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      isOpen={isOpen}
      onWheel={nextPrevSlide}
    >
      {slidesData.map((s, index) => (
        <ActiveContainer key={index} active={index === current ? true : false}>
          {current === index && <Slide data={s} />}
        </ActiveContainer>
      ))}
      <SlideNav>
        <div
          style={
            current === 0
              ? { background: "white" }
              : { background: "transparent" }
          }
          onClick={() => setCurrent(0)}
        ></div>
        <div
          style={
            current === 1
              ? { background: "white" }
              : { background: "transparent" }
          }
          onClick={() => setCurrent(1)}
        ></div>
        <div
          style={
            current === 2
              ? { background: "white" }
              : { background: "transparent" }
          }
          onClick={() => setCurrent(2)}
        ></div>
      </SlideNav>
    </SliderContainer>
  );
};

export default Home;
