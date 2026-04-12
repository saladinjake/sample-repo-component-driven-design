export interface GridProps {
  templateRow?: string;
  templateColumn?: string;
  gap?: string;
  columnGap?: string;
  rowGap?: string;
  height?: string;
  width?: string;
  margin?: string;
  children?: React.ReactNode;
  style?: Record<string, any>;
}

import IBaseProps from "../Base/Base.types";

export interface IGridProps extends IBaseProps {
  templateColumn?: string;
  templateRow?: string;
  columns?: string | number | any;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  children?: React.ReactNode;
}

export interface IGridItemProps {
  column?: string;
  columnStart?: string;
  columnEnd?: string;
  row?: string;
  rowStart?: string;
  rowEnd?: string;
}
