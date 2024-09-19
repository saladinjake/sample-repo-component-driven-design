import React from "react";
import { SpinnerWrapper } from "./Loader.styles";
import { ISpinnerProps } from "./Loader.types";

const Spinner: React.FC<ISpinnerProps> = ({ color = "white", size = "sm" }) => {
  return (
    <SpinnerWrapper color={color} size={size}>
      <div className="spinner-wrap">
        <span className="spinner"></span>
      </div>
    </SpinnerWrapper>
  );
};

export default Spinner;
