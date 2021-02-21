import React, { useState } from "react";
import {
  Cube,
  DiceContainer,
  Front,
  Back,
  Right,
  Left,
  Top,
  Bottom,
} from "./DiceElements";

const Dice = () => {
  const [xRand, setXRand] = useState(null);
  const [yRand, setYRand] = useState(null);

  const divStyle = {
    background: "rgba(105,48,195,0.6)",
    display: "block",
    position: "absolute",
    width: "200px",
    height: "200px",
    border: "2px solid white",
    margin: "0 auto",
    padding: "50px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  };

  const min = 10;
  const max = 20;

  const clickDiceHandler = () => {
    setXRand(getRandom(max, min));
    setYRand(getRandom(max, min));
  };

  const getRandom = (max, min) =>
    (Math.floor(Math.random() * (max - min)) + min) * 40;

  return (
    <DiceContainer>
      <Cube xRand={xRand} yRand={yRand} onClick={clickDiceHandler}>
        <Front style={divStyle}>
          <span>React</span>
        </Front>
        <Back style={divStyle}>
          <span>CSS</span>
        </Back>
        <Right style={divStyle}>
          <span>JavaScript</span>
        </Right>
        <Left style={divStyle}>
          <span>HTML</span>
        </Left>
        <Top style={divStyle}>
          <span>Sass</span>
        </Top>
        <Bottom style={divStyle}>
          <span>Git</span>
        </Bottom>
      </Cube>
    </DiceContainer>
  );
};

export default Dice;

{
  /* <section class="container">
  <div id="cube">
    <div class="front">
      <span class="dot dot1">Hallo</span>
    </div>
    <div class="back">
      <span class="dot dot1"></span>
      <span class="dot dot2"></span>
    </div>
    <div class="right">
      <span class="dot dot1"></span>
      <span class="dot dot2"></span>  
      <span class="dot dot3"></span>
    </div>
    <div class="left">
      <span class="dot dot1"></span>
      <span class="dot dot2"></span>  
      <span class="dot dot3"></span>
      <span class="dot dot4"></span>
    </div>
    <div class="top">
      <span class="dot dot1"></span>
      <span class="dot dot2"></span>  
      <span class="dot dot3"></span>
      <span class="dot dot4"></span>
      <span class="dot dot5"></span>
    </div>
    <div class="bottom">
      <span class="dot dot1"></span>
      <span class="dot dot2"></span>  
      <span class="dot dot3"></span>
      <span class="dot dot4"></span>
      <span class="dot dot5"></span>
      <span class="dot dot6"></span>
    </div>
  </div>
</section> */
}
