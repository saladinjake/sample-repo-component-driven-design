import styled, { keyframes } from "styled-components";
import LoaderProps from "./Loader.types";
import libraryConfig from "../../libraryConfig";
import { Size } from "../../global";
import Base from "../Base"
const { colors } = libraryConfig;

const sizes = { sm: "45px", md: "55px", lg: "65px" };

const spinAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

export const StyledLoader = styled(Base)<LoaderProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  .spinner-wrapper {
    width: ${({ size = "md" }) => sizes[size]};
    height: ${({ size = "md" }) => sizes[size]};
    border-radius: 50%;
    border: 1px solid ${colors.kBlack400};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 5px 15px 0px rgba(64, 25, 109, 0.2);
  }

  .spinner {
    border-radius: 50%;
    width: ${({ size = "md" }) => `calc(${sizes[size]} - 28px)`};
    height: ${({ size = "md" }) => `calc(${sizes[size]} - 28px)`};
    border: 3px solid ${({ color }) => color || colors.kPurple500};
    border-bottom-color: transparent;
    animation: ${spinAnimation} 0.7s linear infinite;
    pointer-events: none;
  }

  .logo-animation {
    width: 400px;
    height: 180px;
  }
`;

export const SpinnerWrapper = styled.div<{ color: string; size: Size }>`
  .spinner-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    pointer-events: none;
  }

  .spinner {
    border-radius: 50%;
    width: ${({ size = "md" }) => `calc(${sizes[size]} - 20px)`};
    height: ${({ size = "md" }) => `calc(${sizes[size]} - 20px)`};
    border: 3px solid ${({ color }) => color || colors.kPurple500};
    border-bottom-color: transparent;
    border-top-color: transparent;
    animation: ${spinAnimation} 0.7s linear infinite;
    pointer-events: none;
  }
`;
