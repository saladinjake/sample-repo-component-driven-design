import styled, { css } from "styled-components";
import { IButtonProps } from "./Button.types";
import libraryConfig from "../../libraryConfig";
import Base from "../Base/Base";

const { colors, rounds, shadows, transitions } = libraryConfig;

const getVariantStyles = (variant: IButtonProps["variant"]) => {
  switch (variant) {
    case "primary":
      return css`
        background: ${colors.brandPrimary};
        color: ${colors.kudaWhite};
        border: none;
        box-shadow: ${shadows.sm};
        &:hover:not(:disabled) {
          box-shadow: ${shadows.md};
          filter: brightness(1.1);
        }
      `;
    case "secondary":
      return css`
        background: ${colors.brandSecondary};
        color: ${colors.kudaWhite};
        border: none;
        box-shadow: ${shadows.sm};
        &:hover:not(:disabled) {
          box-shadow: ${shadows.md};
          filter: brightness(1.1);
        }
      `;
    case "outline":
      return css`
        background-color: transparent;
        color: ${colors.kudaPurple};
        border: 2px solid ${colors.kudaPurple};
        &:hover:not(:disabled) {
          background-color: ${colors.kudaPurple};
          color: ${colors.kudaWhite};
        }
      `;
    case "ghost":
      return css`
        background-color: transparent;
        color: ${colors.kudaPurple};
        border: none;
        &:hover:not(:disabled) {
          background-color: ${colors.kudaInactivePurple};
        }
      `;
    case "danger":
      return css`
        background: ${colors.kudaRed};
        color: ${colors.kudaWhite};
        border: none;
        box-shadow: ${shadows.sm};
        &:hover:not(:disabled) {
          box-shadow: ${shadows.md};
          transform: translateY(-1px);
        }
      `;
    default:
      return css`
        background: ${colors.brandPrimary};
        color: ${colors.kudaWhite};
        border: none;
      `;
  }
};

const getSizeStyles = (size: IButtonProps["size"]) => {
  switch (size) {
    case "sm":
      return css`
        padding: 6px 14px;
        font-size: 13px;
        height: 32px;
        border-radius: ${rounds.sm};
      `;
    case "md":
      return css`
        padding: 10px 20px;
        font-size: 15px;
        height: 44px;
        border-radius: ${rounds.md};
      `;
    case "lg":
      return css`
        padding: 14px 28px;
        font-size: 17px;
        height: 52px;
        border-radius: ${rounds.lg};
      `;
    default:
      return css`
        padding: 10px 20px;
        font-size: 15px;
        height: 44px;
        border-radius: ${rounds.md};
      `;
  }
};

export const StyledButton = styled(Base)<IButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: ${transitions.springy};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  gap: 10px;
  border-radius: ${rounds.md};
  outline: none;
  border: none;

  ${({ variant }) => getVariantStyles(variant)}
  ${({ size }) => getSizeStyles(size)}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    box-shadow: none;
    filter: grayscale(1);
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0) scale(0.96);
  }

  .loading-spinner {
    width: 18px;
    height: 18px;
    border: 2px solid currentColor;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    animation: rotation 0.6s linear infinite;
  }

  @keyframes rotation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
