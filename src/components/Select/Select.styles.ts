import styled from "styled-components";
import Flex from "../Flex/Flex";
import Box from "../Box/Box";
import Base from "../Base"
import libraryConfig from "../../libraryConfig";
import "../../main.css";
const { colors } = libraryConfig;

export const SelectLabel = styled.label`
  font-size: 13.5px;
  line-height: 18px;
  margin-bottom: 10px;
  color:#000;
`;

export const RequiredAsterisk = styled(Box)`
  color: ${colors.kudaRed};
`;

export const Wrapper = styled(Flex)<{
  disabled?: boolean;
  width?: any;
  variant?: string;
  error?: boolean;
}>`
  background: ${({ disabled }) => (disabled ? "#EFEFEF4D" : "#ffffff")};
  border: ${(props) =>
    props.variant !== "outline" ? "1px solid #f4f4f4" : "1px solid #DBDCE0"};
  box-shadow: ${(props) =>
    props.variant !== "outline" && "0px 2px 2px rgba(0, 0, 0, 0.1)"};
  border-radius: 5px;
  min-height: 46px;
  max-height: 80px;
  overflow-y: hidden;
  width: ${(props) => (props.width ? props.width : "372px")};
  text-align: left;
  position: relative;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  padding: 10px;

  .selected {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: clip;
    width: 90%;
    min-height: 20px;
    padding-top: 3px;
  }

  .selected-options {
    overflow: auto;
  }

  ${({ error }) =>
    error &&
    `
    border: 1px solid ${colors.kudaRed};
`}
`;

export const SelectWrapper = styled(Flex)`
  position: absolute;
  z-index: 1000000;
  width: 100%;
  top: 60px;
  background: #ffffff;
  border: 1px solid rgba(219, 220, 224, 0.5);
  box-shadow: 15px 30px 40px rgba(64, 25, 109, 0.07);
  border-radius: 5px;
  cursor: pointer;
  max-height: 40vh;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .choose-all {
    padding: 10px;
    background-color: ${colors.kBlack100};
    color: ${colors.kPurple500};
    z-index: 3;
    width: 100%;
    height: 100%;
    font-size: 10px;
  }
`;

export const SelectOption = styled.button<{
  isLastItem: boolean;
  optionHeight: string;
  optionFontSize: string;
  optionFontWeight: string;
}>`
  display: flex;
  align-items: center;
  background: transparent;
  border-style: none;
  border-bottom: ${(props) => !props.isLastItem && "1px solid #f4f4f4"};
  padding: 16px 14px;
  cursor: pointer;
  text-align: left;
  font-size: ${(props) => props.optionFontSize || "15px"};
  font-weight: ${(props) => props.optionFontWeight || "400"};
  line-height: 20px;
  
  &:hover {
    background: ${libraryConfig.colors.kudaLighterGrey};
  }

  :disabled {
    cursor: not-allowed;
  }
`;

export const Error = styled.small`
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  font-size: 12px;
  color: ${libraryConfig.colors.kudaRed};
`;

export const StyledErrorIcon = styled.img`
  display: inline-block;
  margin-right: 4px;
`;

export const SearchBarWrapper = styled(Base)`
  border: 0;
  width: 100%;
  height: 55px;
  position: relative;
  input {
    border: 1px solid ${colors.kudaLighterGrey};
    border-width: 0px 0px 1px 0px;

    width: 96%;
    height: 55px;
    outline: none;
    padding: 10px;
    padding-left: 32px;
  }

  img.search {
    position: absolute;
    left: 10px;
    top: 33%;
    width: 20px;
    height: 20px;
  }

  div.cancel {
    position: absolute;
    right: 5px;
    top: 33%;
  }
`;

export const OptionChip = styled.div`
  border: 1px solid ${colors.kBlack300};
  border-radius: 4px;
  background-color: ${colors.kBlack100};
  padding: 4px;
  max-width: 100px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  p {
    max-width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
    font-size: 12px;
  }
`;
