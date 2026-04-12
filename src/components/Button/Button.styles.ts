import styled, { css } from "styled-components";
import { IButtonProps } from "./Button.types";
import libraryConfig from "../../libraryConfig";
import Base from "../Base/Base";

const { colors, rounds } = libraryConfig;

const getVariantStyles = (variant: IButtonProps["variant"]) => {
  switch (variant) {
    case "primary":
      return css`
        background-color: ${colors.kudaPurple};
        color: ${colors.kudaWhite};
        border: none;
        &:hover:not(:disabled) {
          opacity: 0.9;
        }
      `;
    case "secondary":
      return css`
        background-color: ${colors.kudaBlue};
        color: ${colors.kudaWhite};
        border: none;
        &:hover:not(:disabled) {
          opacity: 0.9;
        }
      `;
    case "outline":
      return css`
        background-color: transparent;
        color: ${colors.kudaPurple};
        border: 1.5px solid ${colors.kudaPurple};
        &:hover:not(:disabled) {
          background-color: ${colors.kudaLightPurple}20;
        }
      `;
    case "ghost":
      return css`
        background-color: transparent;
        color: ${colors.kudaPurple};
        border: none;
        &:hover:not(:disabled) {
          background-color: ${colors.kudaLightPurple}10;
        }
      `;
    case "danger":
      return css`
        background-color: ${colors.kudaRed};
        color: ${colors.kudaWhite};
        border: none;
        &:hover:not(:disabled) {
          opacity: 0.9;
        }
      `;
    default:
      return css`
        background-color: ${colors.kudaPurple};
        color: ${colors.kudaWhite};
        border: none;
      `;
  }
};

const getSizeStyles = (size: IButtonProps["size"]) => {
  switch (size) {
    case "sm":
      return css`
        padding: 8px 16px;
        font-size: 14px;
        height: 36px;
      `;
    case "md":
      return css`
        padding: 12px 24px;
        font-size: 16px;
        height: 48px;
      `;
    case "lg":
      return css`
        padding: 16px 32px;
        font-size: 18px;
        height: 56px;
      `;
    default:
      return css`
        padding: 12px 24px;
        font-size: 16px;
        height: 48px;
      `;
  }
};

export const StyledButton = styled(Base)<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  border-radius: ${rounds.md};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  gap: 8px;

  ${({ variant }) => getVariantStyles(variant)}
  ${({ size }) => getSizeStyles(size)}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }
`;
