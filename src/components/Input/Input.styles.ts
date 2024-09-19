import styled from "styled-components";

import libraryConfig from "../../libraryConfig";
import { InputProps } from "./Input.types";
import "../../main.css";
import Box from "../Box/Box";
import Base from "../Base";
import MediaScreenBuilder, {
  screenDeviceManager,
} from "../../utilities/pixelScreenBuilder";

const { colors } = libraryConfig;

export const StyledInput = styled(Base)<InputProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "372px")};
  box-sizing: border-box;

  label {
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #000000;
    margin-bottom: 10px;
    text-transform: capitalize;

    span {
      color: ${colors.kudaRed};
    }
  }

  .input-wrap {
    height: 46px;
    display: flex;
    width: calc(100% + 2px);
    position: relative;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #f4f4f4;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: ${({ hasSearch }) =>
      hasSearch ? "5px 0px 0px 5px" : "5px"};

    input {
      width: 100%;
      height: 46px;
      padding: 15px 10px;
      outline: none;
      border: 1px solid #f4f4f4;
      background: ${({ disabled }) => (disabled ? "#EFEFEF30" : "#ffffff")};
      border-radius: ${({ hasSearch }) =>
        hasSearch ? "5px 0px 0px 5px" : "5px"};
      font-size: 16px;
      &:focus {
        border: ${(props) =>
          !props.disabled ? "1px solid rgba(64, 25, 109, 0.3)" : ""};
      }

      &:disabled {
        cursor: not-allowed;
      }
      ${({ error }) =>
        error &&
        `
          border: 1px solid ${colors.kudaRed};
          &:focus, &:hover {
            border: 1px solid ${colors.kudaRed};
          };
      `}
    }

    input::placeholder {
      font-size: 16px;
      line-height: 28px;
      color: ${colors.kudaGrey};
      font-weight: 500;
    }
  }

  .search-wrapper {
    background-color: ${colors.kPurple500};
    color: white;
    height: calc(100% + 2px);
    width: 48px;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    border: 1px solid ${colors.kPurple500};
  }

  .error {
    display: inline-flex;
    align-items: center;
    margin-top: 10px;
    font-size: 12px;
    color: ${colors.kudaRed};

    img {
      display: inline-block;
      margin-right: 4px;
    }
  }

  @media ${screenDeviceManager.mobileSmall} {
    width: 90vw;
    max-width: 100vw;
  }

  @media ${screenDeviceManager.mobileLarge} {
    width: 90vw;

    maxwidth: calc(100vh -32px); // 90%
  }

  ${MediaScreenBuilder.between("mobileSmall", "mobileLarge")`
       width: 90vw;
       max-width : 100vw;
       /*
       maxWidth : calc(100vh -32px); // 90%
       */
   `};
`;

export const StyledToolTipWrapper = styled(Box)`
  #tooltip {
    z-index: 10;
    padding: 8px;
    opacity: 0.9;
    border-radius: 8px;
    background: #000;
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.06);

    color: #f4f4f4;
    font-family: Mulish;
    font-size: 9px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
  }
`;

export const PeriodInputWrapper = styled.div`
  .mb-10 {
    margin-bottom: 10px;
  }

  label {
    span {
      color: ${colors.kudaRed};
    }
  }

  .error {
    display: inline-flex;
    align-items: center;
    margin-top: 10px;
    font-size: 12px;
    color: ${colors.kudaRed};
  }
`;
