import React from "react";
import { IButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styles";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  isLoading = false,
  onClick,
  type = "button",
  fullWidth = false,
  icon,
  iconPosition = "left",
  ...rest
}: IButtonProps) => {
  return (
    <StyledButton
      as="button"
      variant={variant}
      size={size}
      disabled={disabled || isLoading}
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
      {...rest}
    >
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          {icon && iconPosition === "left" && icon}
          {children}
          {icon && iconPosition === "right" && icon}
        </>
      )}
    </StyledButton>
  );
};

export default Button;
