import { ReactNode, MouseEventHandler } from "react";
import IBaseProps from "../Base/Base.types";

export interface IButtonProps extends Omit<IBaseProps, "color"> {
  color?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}
