import React from "react";
import { StyledCard } from "./Card.styles";
import { CardProps } from "./Card.types";

const Card: React.FC<CardProps> = ({ children, width, height }) => {
  return (
    <StyledCard width={width} height={height}>
      {children}
    </StyledCard>
  );
};

export default Card;
