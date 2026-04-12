import { IGridItemProps, IGridProps } from "./Grid.types";
import Base from "../Base/Base";
import styled from "styled-components";

import manageBreakpoints from "../../utilities/manageBreakpoints";
import libraryConfig from "../../libraryConfig";

export const GridRoot = styled(Base)<IGridProps>`
  display: grid;
  
  ${({ columns, theme }) =>
    columns
      ? manageBreakpoints(
          "grid-template-columns",
          columns,
          theme,
          (val) => `repeat(${val}, 1fr)`
        )
      : ""};

  ${({ templateColumn, theme }) =>
    templateColumn ? manageBreakpoints("grid-template-columns", templateColumn, theme) : ""};

  ${({ templateRow, theme }) =>
    templateRow ? manageBreakpoints("grid-template-rows", templateRow, theme) : ""};

  ${({ gap, theme }) =>
    gap ? manageBreakpoints("gap", gap, theme, libraryConfig.spacing) : ""};

  ${({ rowGap, theme }) =>
    rowGap ? manageBreakpoints("row-gap", rowGap, theme, libraryConfig.spacing) : ""};

  ${({ columnGap, theme }) =>
    columnGap ? manageBreakpoints("column-gap", columnGap, theme, libraryConfig.spacing) : ""};
`;

export const Item = styled(Base)<IGridItemProps>`
  ${(props) => (props.column ? `grid-column: ${props.column}` : "")};
  ${(props) =>
    props.columnStart ? `grid-column-start: ${props.columnStart}` : ""};
  ${(props) => (props.columnEnd ? `grid-column-end: ${props.columnEnd}` : "")};
  ${(props) => (props.row ? `grid-row: ${props.row}` : "")};
  ${(props) => (props.rowStart ? `grid-row-start: ${props.rowStart}` : "")};
  ${(props) => (props.rowEnd ? `grid-row-end: ${props.rowEnd}` : "")};
`;
