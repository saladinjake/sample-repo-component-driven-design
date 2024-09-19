import React, { useState, useRef, useEffect } from 'react'
import Flex from '../Flex/Flex'
import Text from '../Text/Text'
import Box from "../Box/Box"
import { Option, SelectProps } from './Select.types'
import libraryConfig from '../../libraryConfig'
import styled from 'styled-components'
import Tooltip from "../Input/Tooltip";
import { useMediaQueryRequest } from '../../hooks/useMediaQueryRequest'

import {
  SelectLabel,
  Wrapper,
  SelectWrapper,
  SelectOption,
  Error,
  RequiredAsterisk,
  SearchBarWrapper,

} from './Select.styles'
import useOnClickOutside from '../../hooks/useOnClickOutside'

import { Svg } from '../../assets/svg'

const { Search } = Svg
import { CaretDown, CaretUp, CancelCircle } from './svg'
import { SkeletonWrap } from '../Skeleton'
import { selectInputId } from "../../utilities/helperFuncs"


const CloseIconPosition = styled.span`
  position: absolute;
  right: 5px;
  /* top: 30%; */
  cursor: pointer;
  margin-top: 24px;
`;

const CloseButton = ({ onClick, disabled }) => {
  if (disabled) {
    return <></>;
  }
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
        right: "17px",
        cursor: "pointer",
        marginRight: "20px",
      }}
      onClick={onClick}
    >
      <path
        d="M12 2.25C6.624 2.25 2.25 6.624 2.25 12C2.25 17.376 6.624 21.75 12 21.75C17.376 21.75 21.75 17.376 21.75 12C21.75 6.624 17.376 2.25 12 2.25ZM12 3.75C16.5653 3.75 20.25 7.43475 20.25 12C20.25 16.5653 16.5653 20.25 12 20.25C7.43475 20.25 3.75 16.5653 3.75 12C3.75 7.43475 7.43475 3.75 12 3.75ZM9.165 8.085L8.085 9.165L10.923 12L8.0865 14.835L9.1665 15.915L12 13.0778L14.835 15.9127L15.915 14.835L13.0778 12L15.9127 9.165L14.835 8.085L12 10.923L9.165 8.0865V8.085Z"
        fill="#4D4D4D"
        fillOpacity="0.8"
      />
    </svg>
  );
};


function Select(props: SelectProps) {
  const {
    value = '',
    label,
    error,
    options,
    onChange,
    onFocus,
    onBlur,
    name = '',
    message,
    required,
    disabled,
    valueArg = 'value',
    valueFontSize = '16px',
    valueFontWeight = '400',
    optionFontSize = '15px',
    optionFontWeight = '400',
    optionHeight = '40px',
    variant,
    width,
    onChangeRaw,
    showRawOption = false,
    disabledOptions,
    hasSearch = false,
    isLoading = false,
    placeholder = 'Select',
    tooltipText,
    
    withClearSelector = false,
    handleClearSelector
  } = props
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectValue, setSelectValue] = useState(value)
  const [searchValue, setSearchValue] = useState<string>()
  const [currentOptions, setCurrentOptions] = useState<Option[]>(options)


  const didMount = useRef(false)

  const handleClick = () => {
    !disabled && setShowDropdown(showDropdown => !showDropdown)
  }



  useEffect(() => {
    setSelectValue(value)
  }, [value])

  useEffect(() => {
    if (didMount.current) {
      if (selectValue) {
        onChange({ target: { name, value: selectValue } })

        if (showRawOption) {
          const result = options.find((option: Option) => {
            if (option[valueArg]) {
              return option[valueArg] === selectValue
            }

            return option === selectValue
          })
          onChangeRaw(result)
        }

        setShowDropdown(false)
      }
    } else {
      didMount.current = true
    }
  }, [selectValue])

  const handleOptionClick = value => {
    setSelectValue(value)
  }

  const node = useRef()
  useOnClickOutside(node, () => setShowDropdown(false))

  const computeValue = (value: string) => {
    if (!value) return placeholder
    if (options.includes(value)) return value
    const result = options.find(item => item[valueArg] === value)
    if (result) return result.name
    return value || placeholder
  }

  const computeOption = (option: Option, nameArg = 'name') => {
    if (typeof option === 'string') {
      return option
    }

    return option[nameArg]
  }

  const updateOptions = e => {
    const val = e.target.value
    const matches = options.filter(
      ({ name }: Option) =>
        name?.toLowerCase()?.indexOf(val?.toLowerCase()) > -1
    )
    setCurrentOptions(matches)
    setSearchValue(val)
  }

  const clearSearchInput = () => {
    setSearchValue('')
    updateOptions({ target: { value: '' } })
  }

  useEffect(() => {
    if (JSON.stringify(options) !== JSON.stringify(currentOptions)) {
      setCurrentOptions(options)
      clearSearchInput()
    }
  }, [options])
  return (
    <Flex
      direction="column"
      opacity={disabled ? '0.5' : '1'}
      width={width ? width : variant === 'outline' ? '170px' : '372px'}
      data-html="HtmlSelectElement"
      id={selectInputId(12)}
    >
      {label && (
        <Flex direction="row" justifyContent="start">
          <SelectLabel>{label}</SelectLabel>
          {required && (
            <RequiredAsterisk as="span" ml="2">
              *
            </RequiredAsterisk>
          )}
          {tooltipText && <Tooltip text={tooltipText} />}
        </Flex>
      )}

      {isLoading ? (
        <SkeletonWrap height="46px" width="100%" />
      ) : (
        <Flex position="relative" width="full" ref={node} data-html="HtmlSelectElement" id={selectInputId(12)}>
          <Wrapper
            alignItems="center"
            justifyContent="between"
            onClick={handleClick}
            disabled={disabled}
            width="100%"
            px="4"
            variant={variant}
            error={error}
            id={selectInputId(12)}
          >
            <Text
              as={'p'}
              color={!selectValue ? libraryConfig.colors.kudaDarkGrey : ''}
              fontSize={valueFontSize}
              fontWeight={valueFontWeight}
              className="selected"
              id={selectInputId(12)}
            >
              {computeValue(selectValue)}
            </Text>
            {(() => {
              if (disabled) return
              else if (variant !== 'outline')
                return <CaretDown isOutline={false} />
              else {
                return showDropdown ? (
                  <CaretUp />
                ) : (
                  <CaretDown isOutline={true} />
                )
              }
            })()}
          </Wrapper>

          {showDropdown && (
            <SelectWrapper direction="column" position="relative" data-html="HtmlSelectElement" id={selectInputId(12)}>
              {hasSearch && (
                <SearchBarWrapper>
                  <input
                    onChange={updateOptions}
                    onFocus={ev => {
                      onFocus && onFocus(ev)
                    }}
                    onBlur={evt => {
                      onBlur && onBlur(evt)
                    }}
                    placeholder="Search..."
                    value={searchValue}
                    autoFocus
                  />
                  <img src={Search} className="search" />
                  {searchValue && (
                    <div className="cancel" onClick={clearSearchInput}>
                      <CancelCircle size="20" />
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
                  id={selectInputId(12)}
                  disabled={disabledOptions?.includes(option.value)}
                  onClick={() => {

                    if (disabledOptions?.includes(option.value)) return
                    handleOptionClick(option[valueArg] || option.name || option)
                  }}
                >
                  {computeOption(option)}
                </SelectOption>
              ))}


            </SelectWrapper>


          )}

          <>
            {withClearSelector && selectValue && (
              <CloseIconPosition>
                <Box onClick={() => setSelectValue(null)}>
                  <CloseButton
                    onClick={() => setSelectValue(null)}
                    disabled={disabled}
                  />
                </Box>
              </CloseIconPosition>
            )}
          </>
        </Flex>
      )}

      {error && message && <Error>{message}</Error>}
    </Flex>
  )
}

export default Select
