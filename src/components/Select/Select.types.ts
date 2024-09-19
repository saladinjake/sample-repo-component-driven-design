export type Option = {
  name: string;
  value?: any;
  id?: any;
};

export type SelectProps = {
  value?: any;
  label?: string;
  error?: boolean;
  message?: string;
  required?: boolean;
  options: any;
  onChange: (value) => void;
  onChangeRaw?: (value) => void;
  onFocus? :(event: SyntheticEvent) => void;
  onBlur?: (event: SyntheticEvent ) => void;
  
  name?: string;
  disabled?: boolean;
  valueArg?: string;
  width?: string;
  valueFontSize?: string;
  valueFontWeight?: string;
  variant?: "outline" | "elevated";
  optionFontSize?: string;
  optionFontWeight?: string;
  optionHeight?: string;
  showRawOption?: boolean;
  disabledOptions?: (string | number)[];
  hasSearch?: boolean;
  isLoading?: boolean;
  placeholder?: string;
  tooltipText?:string;
  withClearSelector?: boolean;
  handleClearSelector?: () => void;
};

export type MultiSelectProps = Exclude<
  SelectProps,
  ["value", "onChangeRaw", "showRawOptions"]
> & {
  values: any[];
  name: string;
};
