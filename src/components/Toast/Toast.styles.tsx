import styled from "styled-components";
import { fadeIn } from "../animation.style";
import libraryConfig from "../../libraryConfig";
import { ToastType } from "./Toast.types";

const { breakPoints, colors } = libraryConfig;

export const StyledToast = styled.div<{ type: ToastType }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  margin: 0 auto;
  max-width: 450px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  transition: transform 0.6s ease-in-out;
  animation: ${fadeIn} 0.2s;
  &:hover {
    transform: translate3d(0px, -3px, 0px);
    opacity: 0.9;
  }
  z-index: 10000;

  ${({ type }) => {
    switch (type) {
      case "success":
        return `
      background: ${colors.kPurple200};
      border: 0.4px solid transparent;
      color: ${colors.kPurple400};
    `;
      case "information":
        return `
        background: ${colors.kBlue200};
        border: 1px solid transparent;
        color: ${colors.kudaBlue};
    `;
      case "error":
        return `
        background: #FFE8E8;
        border: 1px solid transparent;
        color: ${colors.kRed400};
  
        @media ${breakPoints.md} {
          width: 166px;
        }
    `;
      default:
    }
  }};

  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
`;
