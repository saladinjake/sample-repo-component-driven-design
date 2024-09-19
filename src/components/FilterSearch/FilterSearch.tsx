import React, { useState, useEffect } from "react";
import { Svg } from "../../assets/svg";
import Flex from "../Flex";
import Text from "../Text";
import Box from "../Box";
import { Menu, MenuButton, MenuItems } from "../Menu";
import {
  StyledSearchIcon,
  StyledBox,
  StyledInput,
  StyledInputLabel,
} from "./FilterSearch.styles";
import FilterDropdown from "./FilterDropdown";
import { IFilterSearch, FilterOption } from "./FilterSearch.types";
import { SkeletonWrap } from "../Skeleton";

const { Search } = Svg;

const CloseButton = ({ onClick }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        right: "10px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <path
        d="M12 2.25C6.624 2.25 2.25 6.624 2.25 12C2.25 17.376 6.624 21.75 12 21.75C17.376 21.75 21.75 17.376 21.75 12C21.75 6.624 17.376 2.25 12 2.25ZM12 3.75C16.5653 3.75 20.25 7.43475 20.25 12C20.25 16.5653 16.5653 20.25 12 20.25C7.43475 20.25 3.75 16.5653 3.75 12C3.75 7.43475 7.43475 3.75 12 3.75ZM9.165 8.085L8.085 9.165L10.923 12L8.0865 14.835L9.1665 15.915L12 13.0778L14.835 15.9127L15.915 14.835L13.0778 12L15.9127 9.165L14.835 8.085L12 10.923L9.165 8.0865V8.085Z"
        fill="#4D4D4D"
        fill-opacity="0.8"
      />
    </svg>
  );
};

const DropdownFilterSearch = (props: IFilterSearch) => {
  const {
    disabled = false,
    fontSize = "14px",
    borderRadius = "8px",
    height = "48px",
    width = "319px",
    placeholder = "Search for preference",
    filterOptions = [],
    filterBy = { name: "Filter By", value: "" },
    setFilterBy,
    onSearch,
    onClear = () => null,
    value = "",
    hasFilter = true,
    isLoading = false,
    selectedOptionWidth,
    dropdownWidth = "150px",
  } = props;

  const [touched, setTouched] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  const handleReset = () => {
    setTouched(false);
    onClear();
    onSearch("");
    setSearchValue("");
  };

  return (
    <Flex alignItems="start">
      {hasFilter && (
        <Menu isLoading={isLoading}>
          <MenuButton>
            {(setShowMenu) => (
              <FilterDropdown
                width={selectedOptionWidth}
                value={filterBy.name}
                onClick={() => setShowMenu((state) => !state)}
              />
            )}
          </MenuButton>

          <MenuItems top="56px" width={dropdownWidth}>
            <StyledBox px="4">
              {filterOptions.map((item: FilterOption) => (
                <Box
                  key={item.name}
                  py="3"
                  borderBottomStyle="solid"
                  borderBottomColor="#F4F4F4"
                  borderWidth="1px"
                  cursor="pointer"
                  onClick={() => setFilterBy(item)}
                >
                  <Text fontSize="13px" fontWeight="600">
                    {item.name}
                  </Text>
                </Box>
              ))}
            </StyledBox>
          </MenuItems>
        </Menu>
      )}

      {isLoading ? (
        <SkeletonWrap height="46px" width={width} />
      ) : (
        <Box height={height} position="relative">
          <StyledSearchIcon src={Search} />

          <StyledInput
            type="text"
            placeholder={placeholder}
            fontSize={fontSize}
            borderRadius={borderRadius}
            value={searchValue}
            onChange={({ target }) => {
              if (!target.value) {
                onSearch("");
              }

              setTouched(false);
              setSearchValue(target.value);
            }}
            disabled={disabled}
            hasFilter={hasFilter}
            width={width}
            height={height}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                setTouched(true);
                onSearch(searchValue);
              }
            }}
          />

          {!touched ? (
            <StyledInputLabel
              onClick={() => {
                setTouched(true);
                onSearch(searchValue);
              }}
              disabled={disabled}
            >
              Search
            </StyledInputLabel>
          ) : (
            <CloseButton onClick={handleReset} />
          )}
        </Box>
      )}
    </Flex>
  );
};

export default DropdownFilterSearch;
