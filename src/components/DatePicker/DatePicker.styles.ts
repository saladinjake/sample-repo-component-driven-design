import styled from "styled-components";
import Base from "../Base";
import libraryConfig from "../../libraryConfig";

const { colors, rounds, transitions, shadows } = libraryConfig;

export const StyledDatePickerContainer = styled(Base)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${(props) => props.width || "100%"};
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.kudaPurple};
`;

export const StyledInputWrapper = styled.div<{ hasError?: boolean; isDisabled?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  background: ${colors.kudaWhite};
  border: 1px solid ${(props) => (props.hasError ? colors.kRed500 : "#E1E1E1")};
  border-radius: ${rounds.md};
  transition: ${transitions.smooth};
  
  &:focus-within {
    border-color: ${colors.brandPrimary};
    box-shadow: ${colors.shadowSoft};
    transform: translateY(-1px);
  }

  ${(props) => props.isDisabled && `
    opacity: 0.6;
    cursor: not-allowed;
    background: #F9F9F9;
  `}
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: transparent;
  outline: none;
  font-size: 14px;
  color: ${colors.kudaBlack};
  font-family: inherit;

  &::placeholder {
    color: ${colors.kudaGrey};
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(15%) sepia(40%) saturate(5000%) hue-rotate(240deg) brightness(90%) contrast(90%);
  }
`;

export const ErrorText = styled.span`
  font-size: 12px;
  color: ${colors.kRed500};
  margin-top: 4px;
`;
