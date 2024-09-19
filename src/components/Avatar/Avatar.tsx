import React from "react";
import { StyledAvatar } from "./Avatar.styles";
import { AvatarProps } from "./Avatar.types";
import "../../main.css";

const Avatar: React.FC<AvatarProps> = ({
  shape = "square",
  size = "md",
  src,
  text = "Avatar",
  type = "image",
  name,
  backgroundColor,
  color,
}) => {
  return (
    <StyledAvatar
      shape={shape}
      size={size}
      backgroundColor={backgroundColor}
      color={color}
    >
      {type === "image" ? <img src={src} alt={name} /> : <span>{text}</span>}
    </StyledAvatar>
  );
};

export default Avatar;
