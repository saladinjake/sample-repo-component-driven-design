import React, { FC } from "react";
import ReactDOM from "react-dom";
import { StyledToast, IconWrapper } from "./Toast.styles";
import { ToastProps } from "./Toast.types";

export const Cancel = ({ onClick }) => (
  <IconWrapper onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.08581 9.08607C8.56511 9.60677 8.56511 10.451 9.08581 10.9717L14.1141 16L9.08581 21.0283C8.56511 21.549 8.56511 22.3932 9.08581 22.9139C9.60651 23.4346 10.4507 23.4346 10.9714 22.9139L15.9997 17.8856L21.0281 22.9139C21.5488 23.4346 22.393 23.4346 22.9137 22.9139C23.4344 22.3932 23.4344 21.549 22.9137 21.0283L17.8854 16L22.9137 10.9717C23.4344 10.451 23.4344 9.60677 22.9137 9.08607C22.393 8.56537 21.5488 8.56537 21.0281 9.08607L15.9997 14.1144L10.9714 9.08607C10.4507 8.56537 9.60651 8.56537 9.08581 9.08607Z"
        fill="#40196D"
      />
      <mask
        id="mask0_14308_376430"
        maskUnits="userSpaceOnUse"
        x="8"
        y="8"
        width="16"
        height="16"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.08581 9.08607C8.56511 9.60677 8.56511 10.451 9.08581 10.9717L14.1141 16L9.08581 21.0283C8.56511 21.549 8.56511 22.3932 9.08581 22.9139C9.60651 23.4346 10.4507 23.4346 10.9714 22.9139L15.9997 17.8856L21.0281 22.9139C21.5488 23.4346 22.393 23.4346 22.9137 22.9139C23.4344 22.3932 23.4344 21.549 22.9137 21.0283L17.8854 16L22.9137 10.9717C23.4344 10.451 23.4344 9.60677 22.9137 9.08607C22.393 8.56537 21.5488 8.56537 21.0281 9.08607L15.9997 14.1144L10.9714 9.08607C10.4507 8.56537 9.60651 8.56537 9.08581 9.08607Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_14308_376430)"></g>
    </svg>
  </IconWrapper>
);

const Toast: FC<ToastProps> = ({
  type = "success",
  show,
  closeModal,
  children,
}) => {
  const renderToast = () => {
    if (show) {
      return (
        <StyledToast type={type}>
          {children}
          <Cancel onClick={closeModal} />
        </StyledToast>
      );
    }
  };

  return ReactDOM.createPortal(renderToast(), document.body);
};

export default Toast;
