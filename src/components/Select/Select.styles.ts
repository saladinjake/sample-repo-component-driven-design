import styled from "styled-components";
import Flex from "../Flex/Flex";
import Box from "../Box/Box";
import Base from "../Base"
import libraryConfig from "../../libraryConfig";
import "../../main.css";
const { colors, rounds, shadows, transitions } = libraryConfig;

export const SelectLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 8px;
  color: ${colors.kudaPurple};
  transition: ${transitions.smooth};
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
  background: ${({ disabled }) => (disabled ? colors.kudaLighterGrey : colors.kudaWhite)};
  border: 1.5px solid ${colors.kudaLighterGrey};
  border-radius: ${rounds.md};
  min-height: 48px;
  max-height: 80px;
  width: ${(props) => (props.width ? props.width : "372px")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  padding: 12px 16px;
  transition: ${transitions.smooth};
  box-shadow: ${shadows.xs};

  &:hover:not(:disabled) {
    border-color: ${colors.kudaBlue}80;
    box-shadow: ${shadows.sm};
  }

  &:focus-within {
    border-color: ${colors.kudaBlue};
    box-shadow: 0 0 0 4px ${colors.kudaBlue}15;
  }

  .selected {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 90%;
    font-size: 15px;
    font-weight: 400;
    color: ${colors.kudaBlack};
  }

  ${({ error }) =>
    error &&
    `
    border-color: ${colors.kudaRed};
    &:focus-within {
      box-shadow: 0 0 0 4px ${colors.kudaRed}15;
    }
`}
`;

export const SelectWrapper = styled(Flex)`
  position: absolute;
  z-index: 1000;
  width: 100%;
  top: calc(100% + 8px);
  background: ${colors.surfaceGlass};
  backdrop-filter: blur(12px);
  border: 1px solid ${colors.borderGlass};
  box-shadow: ${shadows.lg};
  border-radius: ${rounds.lg};
  cursor: pointer;
  max-height: 300px;
  overflow-y: auto;
  transition: ${transitions.springy};
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from { transform: translateY(-10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

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
  border-bottom: ${(props) => !props.isLastItem && `1px solid ${colors.borderGlass}`};
  padding: 14px 18px;
  cursor: pointer;
  text-align: left;
  font-size: ${(props) => props.optionFontSize || "14px"};
  font-weight: ${(props) => props.optionFontWeight || "500"};
  line-height: 20px;
  transition: ${transitions.smooth};
  color: ${colors.kudaBlack};
  
  &:hover:not(:disabled) {
    background: ${colors.kudaBlue}10;
    color: ${colors.kudaBlue};
    padding-left: 22px;
  }

  &:active {
    background: ${colors.kudaBlue}20;
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.4;
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
