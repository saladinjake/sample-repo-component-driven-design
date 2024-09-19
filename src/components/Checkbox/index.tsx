import React from "react";
import { StyledCheckboxWrapper } from "./Checkbox.styles";
import { ICheckboxProps } from "./Checkbox.types";

const Checkbox: React.FC<ICheckboxProps> = ({
  disabled,
  label,
  color,
  labelFontSize,
  name,
  size = "md",
  checked,
  onChange = (e) => null,
  value = "",
}) => {
  return (
    <StyledCheckboxWrapper
      size={size}
      color={color}
      labelFontSize={labelFontSize}
      disabled={disabled}
    >
      <input
        type="checkbox"
        onChange={onChange}
        title={label}
        id={label}
        color={color}
        checked={checked}
        disabled={disabled}
        name={name}
        value={value}
      />
      <span className="custom-checkbox"></span>
      {label && <label htmlFor={label}>{label}</label>}
    </StyledCheckboxWrapper>
  );
};

export default Checkbox;
