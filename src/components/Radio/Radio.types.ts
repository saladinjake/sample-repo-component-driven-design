import IBaseProps from "../Base/Base.types";

export interface RadioProps extends IBaseProps {
  disabled?: boolean;
  radioButtonColor?: string;
  color?: string;
  label?: string;
  value?: string;
  name?: string;
  labelFontSize?: string;
  size?: "sm" | "md" | "lg";
  type?: "default" | "check";
  checked?: boolean;
  onChange?: (eventObject: React.ChangeEvent<HTMLInputElement>) => void;
}
