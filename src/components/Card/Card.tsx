import React from "react";
import { StyledCard } from "./Card.styles";
import { CardProps } from "./Card.types";

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <StyledCard {...props}>
      {children}
    </StyledCard>
  );
};

export default Card;
