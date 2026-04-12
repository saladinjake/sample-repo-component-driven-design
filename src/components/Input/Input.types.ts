import { SyntheticEvent, MouseEventHandler } from "react";
import IBaseProps from "../Base/Base.types";

export interface InputProps extends IBaseProps {
  id?: string;

  /**
   * Type of Input can be
   */
  type?: string;

  value?: string;

  size?: "sm" | "md" | "lg";

  label?: string;

  error?: boolean;

  message?: string;

  width?: string;

  placeholder?: string;

  required?: boolean;

  onChange?: (inputValue: string) => void;
  onKeyDown?: (event: any) => void;
  onKeyUp?: (event: any) => void;

  onFocus?: (event: SyntheticEvent) => void;
  onBlur?: (event: SyntheticEvent) => void;

  onChangePure?: (event: SyntheticEvent) => void;

  disabled?: boolean;
  name?: string;
  hasSearch?: boolean;
  isLoading?: boolean;
  handleSearch?: (value: string) => void;
  tooltipText?: string;
  onClick?: MouseEventHandler<HTMLInputElement>;
  min?: string | number;
  max?: string | number;
  minLength?: number;
  maxLength?: number;
}

export type PeriodInputProps = {
  value?: Period;
  onChange: (value: Period) => void;
  label?: string;
  required?: boolean;
  error?: boolean;
  message?: string;
};

export type Period = {
  period: "daily" | "weekly" | "monthly" | "yearly";
  value: number;
};
