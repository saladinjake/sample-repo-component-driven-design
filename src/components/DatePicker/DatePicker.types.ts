import IBaseProps from "../Base/Base.types";

export interface IDatePickerProps extends Omit<IBaseProps, "color"> {
  label?: string;
  date: string | null;
  setDate: (date: string) => void;
  placeholder?: string;
  required?: boolean;
  width?: string;
  error?: string;
  disabled?: boolean;
}
