import styled from "styled-components";
import libraryConfig from "../../libraryConfig";
import "../../main.css";
import Base from "../Base"
import { Link } from "react-router-dom";
const { colors } = libraryConfig;

export const StyledCard = styled(Base)<{
  width?: string;
  height?: string;
}>`
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.05);
  width: ${({ width }) => width || "260.07px"};
  height: ${({ height }) => height || "80px"};
  padding: 0 18px;
  border-radius: 5px;
  border: 1px solid ${colors.kBlack200}};
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .ellipsis {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
  }
`;

export const StyledLink = styled(Link)<{ color?: string; disabled: boolean }>`
  text-decoration: none;
  color: ${({ color }) => color || colors.kPurple500};
  font-size: 15px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  ${({ disabled }) =>
    disabled &&
    `
    color: #9F8CB6 !important;
    pointer-events: none;
  `}

  .title-text,
  .description-text {
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0;
    min-height: 20px;
    padding-top: 3px;
  }

  .description-text {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${colors.kBlack400};
  }
`;

export const StyledIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  * {
    width: 100%;
    height: 100%;
    padding: 0;
  }
`;

export const ProfileCardWrapper = styled.div`
  width: 199px;
  border-radius: 4px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 15px 30px 40px 0px rgba(64, 25, 109, 0.07);

  .details {
    padding: 15px;
    background-color: ${colors.kPurple500};
    color: ${colors.kWhite500};
    border-radius: 4px 4px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    svg {
      cursor: pointer;
    }
  }

  .cta-wrapper {
    border-radius: 4px 4px 0px 0px;
    display: flex;
    flex-direction: column;
  }

  .cta-wrapper > div:first-child {
    border-bottom: 1px solid ${colors.kBlack100};
  }
`;
