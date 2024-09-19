import React from "react";
import { StyledSearchField } from "./SearchField.styles";
import { SearchFieldProps } from "./SearchField.types";
import { Svg } from "./../../assets/svg";

const { Search } = Svg;

const SearchField: React.FC<SearchFieldProps> = ({
  error,
  placeholder,
  width,
  height,
  onChange,
  autoFocus = false,
}) => {
  return (
    <StyledSearchField error={error} width={width} height={height}>
      <div className="icon">
        <img src={Search} />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        autoFocus={autoFocus}
      />
    </StyledSearchField>
  );
};

export default SearchField;
