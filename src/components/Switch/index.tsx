import React from "react";
import { StyledSwitch } from "./Switch.styles";
import { ISwitchProps } from "./Switch.types";

const Switch: React.FC<ISwitchProps> = ({
  value,
  onChange,
  disabled,
  state = "active",
  size = "md",
  color,
}) => {
  return (
    <StyledSwitch state={state} disabled={disabled} size={size} color={color}>
      <label className="switch">
        <input
          type="checkbox"
          onChange={() => onChange(!value)}
          checked={value}
          disabled={disabled}
        />

        <span className="slider round"></span>
      </label>
    </StyledSwitch>
  );
};
export default Switch;
