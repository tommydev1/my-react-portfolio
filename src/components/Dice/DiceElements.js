import styled from "styled-components";

export const DiceContainer = styled.div`
  overflow: visible;
  width: 200px;
  height: 200px;
  position: relative;
  perspective: 1000px;
  perspective-origin: 100% 100%;
  margin: 0 20rem 10rem 0;
  @media screen and (max-width: 1024px) {
    margin: 0 0 35rem 2rem;
  }
`;
export const Cube = styled.div`
  overflow: visible;
  width: 100%;
  height: 100%;
  top: 100px;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 6s;
  transform: ${(props) =>
    `rotateX(${props.xRand}deg) rotateY(${props.yRand}deg)`};
  &:hover {
    cursor: pointer;
  }
  span {
    font-size: 4rem;
  }
`;
export const Front = styled.div`
  transform: translateZ(100px);
`;
export const Back = styled.div`
  transform: rotateX(-180deg) translateZ(100px);
`;
export const Right = styled.div`
  transform: rotateY(90deg) translateZ(100px);
`;
export const Left = styled.div`
  transform: rotateY(-90deg) translateZ(100px);
`;
export const Top = styled.div`
  transform: rotateX(90deg) translateZ(100px);
`;
export const Bottom = styled.div`
  transform: rotateX(-90deg) translateZ(100px);
`;
