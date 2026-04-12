import React from "react";
import {
  StyledDatePickerContainer,
  StyledLabel,
  StyledInputWrapper,
  StyledInput,
  ErrorText,
} from "./DatePicker.styles";
import { IDatePickerProps } from "./DatePicker.types";

const DatePicker: React.FC<IDatePickerProps> = ({
  label,
  date,
  setDate,
  placeholder,
  required,
  width,
  error,
  disabled,
  ...baseProps
}) => {
  return (
    <StyledDatePickerContainer width={width} {...baseProps}>
      {label && (
        <StyledLabel>
          {label} {required && <span style={{ color: "#FF4D4F" }}>*</span>}
        </StyledLabel>
      )}
      <StyledInputWrapper hasError={!!error} isDisabled={disabled}>
        <StyledInput
          type="date"
          value={date || ""}
          onChange={(e) => setDate(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
      </StyledInputWrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </StyledDatePickerContainer>
  );
};

export default DatePicker;
