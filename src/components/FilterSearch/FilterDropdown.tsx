import React from "react";
import { Svg } from "../../assets/svg";
import { FilterDropdownWrapper } from "./FilterSearch.styles";
const { LineArrowDown } = Svg;

export type FilterDropdownProps = {
  width?: string;
  onClick?: (e) => void;
  value?: any;
};

const FilterDropdown = (props: FilterDropdownProps) => {
  const { onClick, value, width } = props;

  return (
    <FilterDropdownWrapper onClick={onClick} width={width}>
      <p className="select-text">{value}</p>
      <img src={LineArrowDown} />
    </FilterDropdownWrapper>
  );
};

export default FilterDropdown;
