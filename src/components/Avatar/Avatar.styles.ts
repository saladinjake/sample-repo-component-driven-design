import styled from "styled-components";
import { IStyledAvatarProps } from "./Avatar.types";
import libraryConfig from "../../libraryConfig";
import Base from "../Base/Base"
const { colors, shadows, transitions } = libraryConfig;
import "../../main.css";

export const StyledAvatar = styled(Base)<IStyledAvatarProps>`
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ backgroundColor }) => backgroundColor || colors.kudaLighterGrey};
  color: ${({ color }) => color || colors.kudaPurple};
  overflow: hidden;
  box-shadow: ${shadows.sm};
  transition: ${transitions.smooth};
  border-radius: ${(props) =>
    props.shape === "square" ? "8px" : props.shape === "rounded" ? "50%" : ""};
  
  &:hover {
    transform: scale(1.05);
    box-shadow: ${shadows.md};
  }
  ${({ size }) => {
    switch (size) {
      case "sm":
        return `
            font-size: 15px;
            height: 32px;
            width: 32px;
        `;
      case "md":
        return `
            font-size: 18px;
            height: 43px;
            width: 43px;
        `;
      case "lg":
        return `
          font-size: 22px;
          height: 65px;
          width: 65px;
        `;
      default:
        return `
          font-size: 15px;
          height: 32px;
          width: 32px;
        `;
    }
  }}

  & > img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
