import { SyntheticEvent } from "react";
export interface InputProps {
  id?: string;

  /**
   * Type of Input can be
   */
  type?: string;

  value?: string | null | number;

  size?: "sm" | "md" | "lg";

  label?: string;

  error?: boolean;

  message?: string;

  width?: string;

  placeholder?: string;

  required?: boolean;

  onChange?: (inputValue: string) => void;

  onChangePure?: (event: SyntheticEvent) => void;

  disabled?: boolean;

  name?: string;

  isLoading?: boolean;
  passwordValidation?: boolean;

  onFocus? :(event: SyntheticEvent) => void;
  onBlur?: (event: SyntheticEvent ) => void;
  onKeyUp?:(event: SyntheticEvent) => void;
}
