import React, { useRef, useState, useEffect, useReducer } from "react";
import { MultiSelectProps, Option } from "./Select.types";
import Flex from "../Flex/Flex";
import {
  Error,
  RequiredAsterisk,
  SearchBarWrapper,
  SelectLabel,
  SelectOption,
  SelectWrapper,
  Wrapper,
  OptionChip,
} from "./Select.styles";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Text from "../Text/Text";
import { CancelCircle, CaretDown, CaretUp, Cancel } from "./svg";
import libraryConfig from "../../libraryConfig";
import { Svg } from "../../assets/svg";
import Checkbox from "../Checkbox";
import Box from "../Box/Box";
import { SkeletonWrap } from "../Skeleton";

const { Search } = Svg;

const MultiSelect = (props: MultiSelectProps) => {
  const {
    name,
    values = [],
    label,
    error,
    options,
    onChange,
    message,
    required,
    disabled,
    valueArg = "name",
    valueFontSize = "16px",
    valueFontWeight = "400",
    optionFontSize = "15px",
    optionFontWeight = "400",
    optionHeight = "40px",
    variant,
    width = "372px",
    disabledOptions,
    hasSearch = false,
    isLoading = false,
  } = props;

  /*=======================================
   * states, variables and constants/enums
   *======================================*/
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState<string>();
  const [currentOptions, setCurrentOptions] = useState<Option[]>(options);

  enum OptionReducerTypes {
    TOGGLE = "TOGGLE",
    CLEAR = "CLEAR",
    ADD_MANY = "ADD_MANY",
    ADD_ALL = "ADD_ALL",
  }

  const allvalues = options?.map(
    (option: Option) => option[valueArg] || option.name || option
  );

  /*===================
   * Reducer function
   *==================*/
  const optionReducer = (state: any[], action: any) => {
    const { payload, type = OptionReducerTypes.TOGGLE } = action;
    let updatedState: any;
    switch (type) {
      case OptionReducerTypes.CLEAR:
        updatedState = [];
        break;
      case OptionReducerTypes.ADD_ALL:
        updatedState = [...options];
        break;
      case OptionReducerTypes.ADD_MANY:
        updatedState = payload;
        break;
      case OptionReducerTypes.TOGGLE:
      default:
        const hasValue = state.find(
          (option) => option[valueArg] === payload[valueArg]
        );
        if (hasValue) {
          updatedState = state.filter(
            (option) => option[valueArg] !== payload[valueArg]
          );
          break;
        }
        updatedState = [...state, payload];
    }
    if (JSON.stringify(updatedState) !== JSON.stringify(values))
      onChange({ target: { name, value: updatedState } });
    return updatedState;
  };
  const [valsState, setValState] = useReducer(optionReducer, []);

  const node = useRef();
  useOnClickOutside(node, () => setShowDropdown(false));

  /*===================
   * Util functions
   *==================*/
  const handleClick = () => {
    !disabled && setShowDropdown((showDropdown) => !showDropdown);
  };

  const handleOptionClick = (value: any) => {
    setValState({ payload: value });
  };

  const computeOption = (option: Option, nameArg = "name") => {
    if (typeof option === "string") {
      return option;
    }

    return option[nameArg];
  };

  const updateOptions = (e) => {
    const val = e.target.value;
    const matches = options.filter(
      ({ name }: Option) =>
        name?.toLowerCase()?.indexOf(val?.toLowerCase()) > -1
    );
    setCurrentOptions(matches);
    setSearchValue(val);
  };

  const clearSearchInput = () => {
    setSearchValue("");
    updateOptions({ target: { value: "" } });
  };

  const clearAll = (e) => {
    e.stopPropagation();
    setValState({ type: OptionReducerTypes.CLEAR });
  };

  const toggleAll = (e) => {
    e.stopPropagation();
    if (valsState.length === allvalues.length) {
      setValState({ type: OptionReducerTypes.CLEAR });
    } else {
      setValState({ type: OptionReducerTypes.ADD_ALL });
    }
  };

  const isOptionSelected = (option: Option): boolean => {
    return !!valsState.find((val: Option) => option.name === val.name);
  };

  /*===================
   * Lifecycle hooks
   *==================*/
  useEffect(() => {
    if (JSON.stringify(valsState) !== JSON.stringify(values))
      setValState({ type: OptionReducerTypes.ADD_MANY, payload: values });
  }, [values]);

  useEffect(() => {
    if (JSON.stringify(options) !== JSON.stringify(currentOptions)) {
      setCurrentOptions(options);
      clearSearchInput();
    }
  }, [options]);

  return (
    <Flex
      direction="column"
      opacity={disabled ? "0.5" : "1"}
      width={width || "372px"}
    >
      {label && (
        <Flex>
          <SelectLabel>{label}</SelectLabel>
          {required && (
            <RequiredAsterisk as="span" ml="2">
              *
            </RequiredAsterisk>
          )}
        </Flex>
      )}

      {isLoading ? (
        <SkeletonWrap height="46px" width="100%" />
      ) : (
        <Flex position="relative" width="full" ref={node}>
          <Wrapper
            alignItems="center"
            justifyContent="between"
            onClick={handleClick}
            disabled={disabled}
            width="100%"
            px="4"
            variant={variant}
          >
            {/* Selected options wrapper */}
            {valsState?.length === 0 ? (
              <Text
                color={libraryConfig.colors.kudaDarkGrey}
                fontSize={valueFontSize}
                fontWeight={valueFontWeight}
              >
                Select
              </Text>
            ) : (
              <Flex
                gap="5px"
                wrap={"wrap"}
                width="100%"
                height={"100%"}
                className="selected-options"
              >
                {valsState.map((val: any) => (
                  <OptionChip
                    key={val[valueArg]}
                    onClick={(e) => {
                      e.stopPropagation();
                      setValState({ payload: val });
                    }}
                  >
                    <Text as={"p"}>{computeOption(val)}</Text>
                    <Box width="max-content" height={"16px"}>
                      <Cancel />
                    </Box>
                  </OptionChip>
                ))}
              </Flex>
            )}
            <Flex alignItems="center" gap="5px">
              {valsState.length > 0 && !showDropdown && (
                <div onClick={clearAll}>
                  <CancelCircle size="20" />
                </div>
              )}
              {(() => {
                if (disabled) return;
                else if (variant !== "outline")
                  return <CaretDown isOutline={false} />;
                else {
                  return showDropdown ? (
                    <CaretUp />
                  ) : (
                    <CaretDown isOutline={true} />
                  );
                }
              })()}
            </Flex>
          </Wrapper>

          {/* Dropdown section */}
          {showDropdown && (
            <SelectWrapper
              direction="column"
              position="absolute"
              mt={valsState.length > 3 ? "7" : "0"}
            >
              <Flex className="choose-all" justifyContent="between">
                <Text as={"p"} my={"0"} onClick={toggleAll} color={"#40196D"}>
                  {valsState.length === options.length && "UN"}CHOOSE ALL (
                  {options.length})
                </Text>
                {valsState.length > 0 ? (
                  <Flex alignItems="center" gap="3px" onClick={clearAll}>
                    <Cancel color="red" />
                    <Text color={"red"} as={"p"} my={"0"}>
                      CLEAR
                    </Text>
                  </Flex>
                ) : (
                  <span></span>
                )}
              </Flex>
              {hasSearch && (
                <SearchBarWrapper>
                  <input
                    onChange={updateOptions}
                    placeholder="Search..."
                    value={searchValue}
                    autoFocus
                  />
                  <img src={Search} className="search" />
                  {searchValue && (
                    <div className="cancel" onClick={clearSearchInput}>
                      <CancelCircle />
                    </div>
                  )}
                </SearchBarWrapper>
              )}
              {currentOptions.map((option: Option, i: number) => (
                <SelectOption
                  type="button"
                  key={i}
                  isLastItem={i === options.length - 1}
                  optionHeight={optionHeight}
                  optionFontSize={optionFontSize}
                  optionFontWeight={optionFontWeight}
                  disabled={disabledOptions?.includes(option.value)}
                  onClick={() => {
                    if (disabledOptions?.includes(option.value)) return;
                    handleOptionClick(option);
                  }}
                >
                  <Flex alignItems="center" gap="10px">
                    <Checkbox
                      size="sm"
                      checked={isOptionSelected(option)}
                      disabled={disabledOptions?.includes(option.value)}
                    />
                    <Text>{computeOption(option)}</Text>
                  </Flex>
                </SelectOption>
              ))}
            </SelectWrapper>
          )}
        </Flex>
      )}

      {/* Error Section */}
      {error && <Error>{message}</Error>}
    </Flex>
  );
};

export default MultiSelect;
