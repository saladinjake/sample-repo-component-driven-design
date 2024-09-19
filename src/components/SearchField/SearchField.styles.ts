import styled, { css } from "styled-components";
import Base from "../Base"
import { SearchFieldProps } from "./SearchField.types";

export const StyledSearchField = styled(Base)<SearchFieldProps>`
  display: flex;
  align-items: center;
  border: 1px solid #dbdce0;
  border-radius: 5px;
  padding: 13px 15px;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "46px"};
  background-color: #fff;

  .icon {
    display: flex;
    align-items: center;
    margin-right: 10px;
    img {
      height: 100%;
      width: 100%;
    }
  }

  input {
    flex-grow: 1;
    border: none;
    outline: none;
  }
`;
