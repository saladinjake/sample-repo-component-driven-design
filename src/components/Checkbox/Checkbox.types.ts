export interface ICheckboxProps {
  disabled?: boolean;
  color?: string;
  label?: string;
  name?: string;
  labelFontSize?: string;
  size?: "sm" | "md" | "lg";
  checked?: boolean;
  onChange?: (eventObject: React.ChangeEvent<HTMLInputElement>) => void;
  value?: any;
}
