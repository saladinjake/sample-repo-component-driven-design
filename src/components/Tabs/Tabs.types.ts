export interface ITabs {
  children?: any;
  value: string | number;
  onChange: (identifier: string | number) => void;
  withStorage?: boolean;
  width?: string;
  gap?: string;
  height?: string;
  mx?: any;
}

export interface ITabPanelProps {
  children?: React.ReactNode;
  identifier: string | number | string[] | number[];
  value: string | number;
}
