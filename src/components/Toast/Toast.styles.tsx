import styled from "styled-components";
import { fadeIn } from "../animation.style";
import libraryConfig from "../../libraryConfig";
import { ToastType } from "./Toast.types";

const { breakPoints, colors, shadows, transitions, rounds } = libraryConfig;

export const StyledToast = styled.div<{ type: ToastType }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 24px;
  margin: 0 auto;
  max-width: 420px;
  width: 90%;
  padding: 14px 20px;
  box-sizing: border-box;
  box-shadow: ${shadows.lg};
  border-radius: ${rounds.md};
  transition: ${transitions.springy};
  animation: ${fadeIn} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  font-family: inherit;
  z-index: 10000;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.xl};
  }

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
