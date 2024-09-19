import styled from "styled-components";
import { IStyledAvatarProps } from "./Avatar.types";
import libraryConfig from "../../libraryConfig";
import Base from "../Base/Base"
const { colors } = libraryConfig;
import "../../main.css";

export const StyledAvatar = styled(Base)<IStyledAvatarProps>`
  font-family: Mulish;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ backgroundColor }) => backgroundColor || colors.kudaGrey};
  color: ${({ color }) => color || colors.kudaBlack};
  overflow: hidden;
  border-radius: ${(props) =>
    props.shape === "square" ? "6px" : props.shape === "rounded" ? "50%" : ""};
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
