import React from "react";
import { StyledTextarea } from "./Textarea.styles";
import { TextareaProps } from "./Textarea.types";
import { selectInputId } from "../../utilities/helperFuncs"
const Textarea: React.FC<TextareaProps> = ({
  value,
  name,
  placeholder,
  label = "Description",
  onChange,
  onChangePure,
  disabled = false,
  cols = 20,
  rows = 2,
  resize,
  required,
  width,
  error = false,
  message,
  style = {},
}) => {
  return (
    <StyledTextarea
      width={width}
      resize={resize}
      disabled={disabled}
      error={error}
      id={selectInputId(12)}
    >
      {label && (
        <label>
          {label} {required && <span>*</span>}
        </label>
      )}
      <textarea
      id={selectInputId(12)}
        required={required}
        name={name}
        value={value}
        onChange={(e) => {
          onChange && onChange(e.currentTarget.value);
          onChangePure && onChangePure(e);
        }}
        placeholder={placeholder}
        disabled={disabled}
        cols={cols}
        rows={rows}
        style={style}
      />
      {error && <span className="error">{message}</span>}
    </StyledTextarea>
  );
};

export default Textarea;
