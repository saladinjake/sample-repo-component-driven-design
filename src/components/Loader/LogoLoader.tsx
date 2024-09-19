import React from "react";
import Lottie from "lottie-react";
import KudaLogoAnimation from "../../assets/animations/kudaLogoAnimation.json";
import { StyledLoader } from "./Loader.styles";

const LogoLoader = () => {
  return (
    <StyledLoader>
      <Lottie animationData={KudaLogoAnimation} className="logo-animation" />
    </StyledLoader>
  );
};

export default LogoLoader;
