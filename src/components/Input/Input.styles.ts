import styled from "styled-components";

import libraryConfig from "../../libraryConfig";
import { InputProps } from "./Input.types";
import "../../main.css";
import Box from "../Box/Box";
import Base from "../Base";
import MediaScreenBuilder, {
  screenDeviceManager,
} from "../../utilities/pixelScreenBuilder";

const { colors, shadows, transitions, rounds } = libraryConfig;

export const StyledInput = styled(Base)<InputProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "372px")};
  box-sizing: border-box;

  label {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.kudaPurple};
    margin-bottom: 8px;
    text-transform: capitalize;
    transition: ${transitions.smooth};

    span {
      color: ${colors.kudaRed};
    }
  }

  .input-wrap {
    height: 48px;
    display: flex;
    width: 100%;
    position: relative;
    justify-content: space-between;
    align-items: center;
    border-radius: ${rounds.md};
    transition: ${transitions.smooth};
    background: ${({ disabled }) => (disabled ? colors.kudaLighterGrey : colors.kudaWhite)};
    box-shadow: ${shadows.xs};

    input {
      width: 100%;
      height: 100%;
      padding: 12px 16px;
      outline: none;
      border: 1.5px solid ${colors.kudaLighterGrey};
      background: transparent;
      border-radius: ${rounds.md};
      font-size: 15px;
      transition: ${transitions.smooth};
      color: ${colors.kudaBlack};

      &:focus {
        border-color: ${colors.kudaBlue};
        box-shadow: 0 0 0 4px ${colors.kudaBlue}15;
      }

      &:disabled {
        cursor: not-allowed;
        color: ${colors.kudaGrey};
      }
      
      ${({ error }) =>
        error &&
        `
          border-color: ${colors.kudaRed};
          &:focus {
            box-shadow: 0 0 0 4px ${colors.kudaRed}15;
          }
      `}
    }

    input::placeholder {
      font-size: 14px;
      color: ${colors.kudaGrey};
      font-weight: 400;
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
