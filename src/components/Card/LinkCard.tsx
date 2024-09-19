import React from "react";
import { StyledCard, StyledIconWrapper, StyledLink } from "./Card.styles";
import { ILinkCardProps } from "./Card.types";
import Box from "../Box/Box";
import { RightArrow } from "./svg";

const LinkCard: React.FC<ILinkCardProps> = ({
  title,
  link,
  color,
  width = "319px",
  Icon,
  description,
  disabled = false,
}) => {
  return (
    <StyledCard width={width} height="65px">
      <StyledLink to={link} color={color} disabled={disabled}>
        {Icon && <StyledIconWrapper>{Icon}</StyledIconWrapper>}
        <Box width="95%">
          <p className="title-text">{title}</p>
          {description && (
            <>
              <Box height={"5px"}></Box>
              <p className="description-text">{description}</p>
            </>
          )}
        </Box>
        <RightArrow disabled={disabled} />
      </StyledLink>
    </StyledCard>
  );
};

export default LinkCard;
