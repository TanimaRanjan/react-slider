import React from "react";
import styled from "styled-components";

const ArrowCSS = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === "right" ? `right:25px` : `left:25px`)};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: white;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
`;

const ImageCSS = styled.p`
    &:hover {
        transform:translateX(${({ direction }) =>
          direction === "right" ? "2" : "-2"})px)
    }

`;

const Arrow = ({ direction, handleClick }) => {
  console.log(direction);
  return (
    <ArrowCSS onClick={handleClick} direction={direction}>
      <ImageCSS direction={direction}>
        {direction === "right" ? ">" : "<"}
      </ImageCSS>
    </ArrowCSS>
  );
};

export default Arrow;
