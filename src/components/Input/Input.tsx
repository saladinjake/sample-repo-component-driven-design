import React, { useEffect, useState, useMemo } from "react";
import { StyledInput } from "./Input.styles";
import { InputProps } from "./Input.types";
import Flex from "../Flex/Flex";
import { SkeletonWrap } from "../Skeleton";
import Tooltip from "./Tooltip";
import { useMediaQueryRequest } from '../../hooks/useMediaQueryRequest'


export const SearchIcon = () => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.79688 6.96875C1.79688 7.85938 1.96354 8.69531 2.29688 9.47656C2.63021 10.2578 3.09375 10.9453 3.6875 11.5391C4.28125 12.1328 4.96615 12.5964 5.74219 12.9297C6.52344 13.263 7.35938 13.4297 8.25 13.4297C8.88021 13.4297 9.48177 13.3411 10.0547 13.1641C10.6328 12.9818 11.1667 12.7344 11.6562 12.4219L15.0547 15.8203C15.1849 15.9505 15.3333 16.0469 15.5 16.1094C15.6667 16.1719 15.8385 16.2031 16.0156 16.2031C16.276 16.2031 16.5052 16.1432 16.7031 16.0234C16.901 15.9089 17.0573 15.75 17.1719 15.5469C17.2865 15.3438 17.3438 15.1172 17.3438 14.8672C17.3438 14.6849 17.3099 14.513 17.2422 14.3516C17.1797 14.1953 17.0859 14.0521 16.9609 13.9219L13.5938 10.5391C13.9427 10.0339 14.2135 9.47917 14.4062 8.875C14.6042 8.27083 14.7031 7.63542 14.7031 6.96875C14.7031 6.08333 14.5365 5.25 14.2031 4.46875C13.8698 3.6875 13.4062 3.0026 12.8125 2.41406C12.2188 1.82031 11.5312 1.35677 10.75 1.02344C9.97396 0.690104 9.14062 0.523438 8.25 0.523438C7.35938 0.523438 6.52344 0.690104 5.74219 1.02344C4.96615 1.35677 4.28125 1.82031 3.6875 2.41406C3.09375 3.0026 2.63021 3.6875 2.29688 4.46875C1.96354 5.25 1.79688 6.08333 1.79688 6.96875ZM3.69531 6.96875C3.69531 6.34375 3.8125 5.75781 4.04688 5.21094C4.28646 4.65885 4.61458 4.17448 5.03125 3.75781C5.44792 3.33594 5.92969 3.00781 6.47656 2.77344C7.02865 2.53906 7.61979 2.42188 8.25 2.42188C8.88021 2.42188 9.46875 2.53906 10.0156 2.77344C10.5677 3.00781 11.0521 3.33594 11.4688 3.75781C11.8854 4.17448 12.2109 4.65885 12.4453 5.21094C12.6849 5.75781 12.8047 6.34375 12.8047 6.96875C12.8047 7.59896 12.6849 8.1901 12.4453 8.74219C12.2109 9.28906 11.8854 9.77083 11.4688 10.1875C11.0521 10.6042 10.5677 10.9323 10.0156 11.1719C9.46875 11.4062 8.88021 11.5234 8.25 11.5234C7.61979 11.5234 7.02865 11.4062 6.47656 11.1719C5.92969 10.9323 5.44792 10.6042 5.03125 10.1875C4.61458 9.77083 4.28646 9.28906 4.04688 8.74219C3.8125 8.1901 3.69531 7.59896 3.69531 6.96875Z"
        fill="white"
      />
    </svg>
  );
};

const Input: React.FC<InputProps> = ({
  label = "Label",
  error,
  message,
  width,
  placeholder = "Placeholder",
  required = false,
  value,
  onChange,
  onKeyDown,
  onKeyUp,
  onFocus,
  onBlur,
  onChangePure,
  disabled,
  name,
  type = "text",
  min,
  max,
  minLength,
  maxLength,
  hasSearch = false,
  isLoading = false,
  handleSearch = (value: string) => null,
  onClick,
  tooltipText,

  ...props
}) => {
  const [currentValue, setValue] = useState(value);

  const { hitsBreakPoint } = useMediaQueryRequest({
    screenResolver: '(max-width: 480px)', //"(max-width: 768px)",
  })

  const windowWidth = useMemo(() => window.innerWidth,[])
  width = windowWidth <=480 && hitsBreakPoint ? "100%" : width

 console.log(hitsBreakPoint, windowWidth)
  useEffect(() => {
    if (currentValue !== value) setValue(value);
  }, [value]);

  return (
    <StyledInput
      width={width}
      disabled={disabled}
      error={error}
      hasSearch={hasSearch}
    >
      {label && (
        <Flex gap="10px">
          <label>
            {label}
            {required && <span>*</span>}
          </label>
          {tooltipText && <Tooltip text={tooltipText} />}
        </Flex>
      )}

      {isLoading ? (
        <SkeletonWrap height="46px" width="100%" />
      ) : (
        <div className="input-wrap">
          <input
            onClick={onClick}
            type={type}
            placeholder={placeholder}
            required={required}
            name={name}
            value={currentValue}
            onChange={(e) => {
              setValue(e.target.value);
              onChangePure && onChangePure(e);
              onChange && onChange(e.currentTarget.value);
            }}
            disabled={disabled}
            min={min}
            max={max}
            minLength={minLength}
            maxLength={maxLength}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onFocus={(ev) => {
              onFocus && onFocus(ev);
            }}
            onBlur={(evt) => {
              onBlur && onBlur(evt);
            }}
          />
          {hasSearch && (
            <Flex
              onClick={() => handleSearch(currentValue)}
              justifyContent="center"
              alignItems="center"
              className="search-wrapper"
            >
              <SearchIcon />
            </Flex>
          )}
        </div>
      )}
      {error && message && <span className="error">{message}</span>}
    </StyledInput>
  );
};

export default Input;
