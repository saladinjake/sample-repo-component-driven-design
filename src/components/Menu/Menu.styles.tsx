import styled from "styled-components";
import Box from "../Box";

export const StyledMenuButton = styled.button`
    border: "1px solid",
    display: "flex",
    background: "transparent",
    cursor: "pointer",
    padding: 0,
    margin: 0,
`;

export const StyledMenuItems = styled(Box)<{
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}>`
  position: absolute;
  top: ${(props) => (props.top ? props.top : "unset")};
  left: ${(props) => (props.left ? props.left : "unset")};
  right: ${(props) => (props.right ? props.right : "unset")};
  bottom: ${(props) => (props.bottom ? props.bottom : "unset")};
  z-index: 2;
`;
