import React from "react";
import StyledStatus from "./Status.styles";
import { IStatusProps } from "./Status.types";

const Select: React.FC<IStatusProps> = ({ text, status }) => {
  return (
    <StyledStatus status={status}>
      <span className={`status-icon`}>&#11044;</span>
      <span>{`${text[0].toUpperCase()}${text.slice(1).toLowerCase()}`}</span>
    </StyledStatus>
  );
};

export default Select;
