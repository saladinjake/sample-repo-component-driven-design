import styled, { css } from "styled-components";
import libraryConfig from "../../libraryConfig";
import Base from "../Base"

const { colors } = libraryConfig;

export const StyledSwitch = styled(Base)<{
  disabled: boolean;
  state: "active" | "destructive";
  size?: "sm" | "md" | "lg";
  color?: string;
}>`
  height: 20px;
  .switch {
    position: relative;
    display: inline-block;
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    input {
      visibility: hidden;
    }
    .slider {
      cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
    .slider:before {
      position: absolute;
      content: "";
      left: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
    input:checked + .slider {
      background-color: ${({ color, state }) =>
        state === "destructive" ? colors.kRed500 : color || colors.kPurple500};
    }
    input:disabled + .slider {
      opacity: 0.5;
    }
    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }
    input:checked + .slider:before {
      -webkit-transform: translateX(21px);
      -ms-transform: translateX(21px);
      transform: translateX(21px);
    }
    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }
    .slider.round:before {
      border-radius: 50%;
    }

    ${({ size }) => {
      switch (size) {
        case "sm":
          return `
          width: 44.8px;
          height: 27.2px;

          .slider:before {
            height: 21.6px;
            width: 21.6px;
            bottom: 2.7px;
          }
          input:checked + .slider:before {
            -webkit-transform: translateX(16px);
            -ms-transform: translateX(16px);
            transform: translateX(16px);
          }
          `;
        case "md":
          return `
          width: 56px;
          height: 34px;

          .slider:before {
            height: 27px;
            width: 27px;
            bottom: 3.5px;
          }

          input:checked + .slider:before {
            -webkit-transform: translateX(21px);
            -ms-transform: translateX(21px);
            transform: translateX(21px);
          }
          `;
        case "lg":
          return `
          width: 67.2px;
          height: 40.8px;

          .slider:before {
            height: 32.4px;
            width: 32.4px;
            bottom: 3.9px;
          }
          input:checked + .slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
          }
          `;
        default:
      }
    }}
  }
`;
