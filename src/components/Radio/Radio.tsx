import React from "react";
import StyledRadio from "./Radio.styles";
import { RadioProps } from "./Radio.types";

const Radio: React.FC<RadioProps> = ({
  disabled,
  label,
  radioButtonColor,
  labelFontSize,
  name,
  value,
  size = "md",
  type = "default",
  checked,
  onChange = (e) => null,
  ...props
}) => {
  return (
    <StyledRadio
      labelFontSize={labelFontSize}
      radioButtonColor={radioButtonColor}
      disabled={disabled}
      size={size}
      type={type}
      {...props}
    >
      <input
        type="radio"
        className="radio--input"
        id={`${label}-${name}-${value}`}
        value={value}
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <label className="radio--label" htmlFor={`${label}-${name}-${value}`}>
        <span>{label}</span>
      </label>
    </StyledRadio>
  );
};

export default Radio;
