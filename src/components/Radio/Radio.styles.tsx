import styled from "styled-components";
import libraryConfig from "../../libraryConfig";
import { Svg } from "../../assets/svg";
import Base from "../Base/Base";
const { CheckMark } = Svg;
const { colors } = libraryConfig;

const sizeValues = { sm: "16px", md: "24px", lg: "34px" };

export default styled(Base)<{
  labelFontSize: string;
  radioButtonColor: string;
  disabled: boolean;
  size?: "sm" | "md" | "lg";
  type?: "default" | "check";
}>`
  opacity: ${({ disabled }) => (disabled ? "0.7" : "1")};
  box-sizing: border-box;
  font-size: ${({ labelFontSize }) => (labelFontSize ? labelFontSize : "16px")};
  display: flex;
  align-items: center;
  position: relative;
  height: ${({ size }) => sizeValues[size] || "24px"};
  .radio--label {
    margin-left: 0.7rem;
  }

  .radio--input {
    border: 6px solid white;
    border-width: ${({ size }) => `calc(${sizeValues[size]}/4)`};
    box-shadow: 0 0 0 1px
      ${({ radioButtonColor }) =>
        radioButtonColor ? radioButtonColor : colors.kPurple500};
    appearance: none;
    border-radius: 50%;
    width: ${({ size }) => sizeValues[size] || "24px"};
    height: ${({ size }) => sizeValues[size] || "24px"};
    transition: all ease-in 0.2s;
  }
  .radio--input:checked {
    border-color: ${({ radioButtonColor }) =>
      radioButtonColor ? radioButtonColor : colors.kPurple500};
  }

  ${({ type, size, radioButtonColor }) =>
    type === "check" &&
    `
    .radio--input {
      display: none;
    }
  
    .radio--input + label:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: ${sizeValues[size] || "24px"};
      height: ${sizeValues[size] || "24px"};
      text-align: center;
      color: white;
      font-family: Times;
      border-radius: 50%;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      border: 1px solid ${radioButtonColor || colors.kPurple500};
      
    }
  
    .radio--input + label:before {
      content: url(${CheckMark});
      border-radius: 4px;
      color: white;
      position: relative;    
      left: ${{ sm: "-9px", md: "-5px", lg: "0" }[size]}
    }
    
    .radio--input + label > span{
      margin-left: ${{ sm: "5px", md: "13px", lg: "23px" }[size]};
    }
  
    .radio--input + label:hover:before {
      color: ${radioButtonColor || colors.kPurple500};;
    }
  
    .radio--input:checked + label:before {
      background-color: transparent;
      z-index: 2;
     
    }
    .radio--input:checked + label:after {
      background: ${radioButtonColor || colors.kPurple500};
    }
  `}
`;
