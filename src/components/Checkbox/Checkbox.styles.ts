import styled from "styled-components";
import libraryConfig from "../../libraryConfig";
import Flex from "../Flex/Flex";
const { colors } = libraryConfig;

const sizeValues = { sm: "20px", md: "28px", lg: "36px" };

export const StyledCheckboxWrapper = styled(Flex)<{
  color: string;
  size: string;
  labelFontSize: string;
  disabled: boolean;
}>`
  align-items: center;
  position: relative;

  input[type="checkbox"] {
    width: ${({ size }) => sizeValues[size] || "24px"};
    height: ${({ size }) => sizeValues[size] || "24px"};
    opacity: 0;
    z-index: 10;
    + .custom-checkbox {
      height: ${({ size }) => sizeValues[size] || "24px"};
      width: ${({ size }) => sizeValues[size] || "24px"};
      border: 1px solid #8d9091;
      border-color: #8d9091;
      border-radius: 5px;
      position: absolute;
      cursor: ${({ disabled }) => (disabled ? "not-allowed" : "cursor")};
      opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    }

    &:active + .custom-checkbox {
      background-color: white;
    }

    &:checked + .custom-checkbox {
      background-color: ${(props) => props.color || colors.kPurple500};
      border-color: ${(props) => props.color || colors.kPurple500};
    }
    + .custom-checkbox:after {
      content: "";
      position: absolute;
      display: none;
    }
    &:checked + .custom-checkbox:after {
      display: block;
    }
    & + .custom-checkbox:after {
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    ${({ size }) => {
      switch (size) {
        case "sm":
          return `
            & + .custom-checkbox:after {
                left: 32%;
                bottom: 25%;
                width: 5px;
                height: 10px;
                border-width: 0 2px 2px 0;
            }
        `;
        case "md":
          return `
            & + .custom-checkbox:after {
                left: 35%;
                bottom: 25%;
                width: 8px;
                height: 16px;
                border-width: 0 3px 3px 0;
            }
        `;
        case "lg":
          return `
            & + .custom-checkbox:after {
                left: 35%;
                bottom: 30%;
                width: 10px;
                height: 20px;
                border-width: 0 4px 4px 0;
            }
        `;
        default:
      }
    }}
  }

  label {
    color: ${colors.kBlack500};
    font-size: ${({ labelFontSize }) => labelFontSize || "16px"};
    margin-left: 10px;
  }
`;
