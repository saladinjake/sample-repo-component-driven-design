import styled from "styled-components";
import { TextareaProps } from "./Textarea.types";
import libraryConfig from "../../libraryConfig";

export const StyledTextarea = styled.div<TextareaProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || "372px"};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  label {
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #000000;
    margin-bottom: 10px;
    text-align: left;
    span {
      color: ${libraryConfig.colors.kudaRed};
    }
  }

  textarea {
    background: #ffffff;
    height: 88px;
    border: 1px solid ${libraryConfig.colors.kudaLighterGrey};
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    resize: ${({ resize }) => resize || "both"};
    padding: 10px 10px;
    outline: none;
    line-height: 20px;
    background: ${({ disabled }) =>
      !disabled ? "#fff" : "rgba(239, 239, 239, 0.3)"};
    transition: all 0.6s;
    &:hover,
    &:focus {
      border: ${({ disabled }) =>
        disabled ? "1px solid rgba(64, 25, 109, 0.3)" : ""};
    }

    &:disabled {
      cursor: not-allowed;
    }

    ${({ error }) =>
      error &&
      `
    border: 1px solid ${libraryConfig.colors.kudaRed};
    &:focus, &:hover {
      border: 1px solid ${libraryConfig.colors.kudaRed};
    };
`}
  }

  textarea::placeholder {
    color: ${libraryConfig.colors.kudaDarkGrey};
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
  }

  .error {
    display: inline-flex;
    align-items: center;
    margin-top: 10px;
    font-size: 12px;
    color: ${libraryConfig.colors.kudaRed};

    img {
      display: inline-block;
      margin-right: 4px;
    }
  }
`;
