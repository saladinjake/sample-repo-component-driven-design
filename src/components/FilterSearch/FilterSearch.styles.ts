import styled from "styled-components";
import Box from "../Box";
import Flex from "../Flex";
import libraryConfig from "../../libraryConfig";
import "../../main.css";

const { colors } = libraryConfig;

export const StyledSearchIcon = styled.img`
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  fill: #979797;
`;

export const StyledBox = styled(Box)`
  background: #ffffff;
  border: 1px solid rgba(219, 220, 224, 0.5);
  box-shadow: 15px 30px 40px rgba(64, 25, 109, 0.07);
  border-radius: 5px;
`;

export const StyledInput = styled.input<{
  fontSize: string;
  borderRadius: string;
  hasFilter: boolean;
  width: string;
  height: string;
  disabled: boolean;
}>`
  box-sizing: border-box;
  width: ${({ width }) => width || "250px"};
  height: ${({ height }) => height || "48px"};
  background: #ffffff;
  border: 1px solid #dbdce0;
  border-radius: ${({ hasFilter }) =>
    hasFilter ? "0px 10px 10px 0px" : "10px"};
  font-weight: 600;
  font-size: 13px;
  padding-left: 45px;
  padding-right: 20px;
  outline: none;
  :focus {
    border: 1px solid rgba(64, 25, 109, 0.3);
  }
  &::placeholder {
    color: #979797;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const StyledInputLabel = styled.button<{ disabled?: boolean }>`
  align-items: center;
  position: absolute;
  top: 25%;
  right: 10px;
  height: 25px;
  width: 52px;
  background: ${colors.kudaPurple};
  border: 1px solid rgba(64, 25, 109, 0.3);
  border-radius: 4px;
  font-weight: 700;
  font-size: 10px;
  color: white;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    `
       opacity: .5;
       color: #9F8BB6;
       cursor: not-allowed;
    `}
`;

export const FilterDropdownWrapper = styled(Flex)`
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  height: 48px;
  text-overflow: ellipsis;
  border-radius: 8px 0px 0px 8px;
  border: 1px solid #dbdce0;
  border-right: none;
  background: ${colors.kudaLightGrey};
  font-size: 13px;
  gap: 4px 8px;
  padding-left: .7rem;
  padding-right: .7rem;
  opacity: 0.8;
  cursor: pointer;
  width: ${({ width }) => width || "100px"};

  .select-text {
    text-overflow: ellipsis;
    overflow: clip;
    white-space: nowrap;
    font-size: 13px;
    font-weight: 600;
    min-height: 20px;
    padding-top: 3px;
}
  }
`;
