import styled from "styled-components";
import  Box from "../Box/Box";

export const Label = styled.label`
  font-size: 13.5px;
  line-height: 18px;
  margin-bottom: 10px;
  font-weight:400;
`;

export const InputWrapper = styled.input`
  height: 46px;
  width: ${(props) => (props.width ? props.width : "314px")};
  border-radius: 5px;
  padding: 15px 10px;
  border: 1px solid #f4f4f4;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const RequiredAsterisk = styled(Box)`
  color: ${({ theme }) => theme ? theme?.colors?.KudaRed : "#F7685B"};
`;

export const Error = styled.small`
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  font-size: 12px;
  color: ${(props) => props?.theme ? props.theme.colors.kudaRed:  "#F7685B"};
`;

export const StyledErrorIcon = styled.img`
  display: inline-block;
  margin-right: 4px;
`;
