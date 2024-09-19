import React from "react";
import { StyledLoader } from "./Loader.styles";
import LoaderProps from "./Loader.types";

const Loader: React.FC<LoaderProps> = ({ color, size = "md" }) => {
  return (
    <StyledLoader color={color} size={size}>
      <div className="spinner-wrapper">
        <div className="spinner"></div>
      </div>
    </StyledLoader>
  );
};

export default Loader;
