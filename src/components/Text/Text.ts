import styled from "styled-components";
import Base from "../Base";
import { ITextProps } from "./Text.types";
import MediaScreenBuilder, {
  screenDeviceManager,
} from '../../utilities/pixelScreenBuilder'


const Text = styled(Base)<ITextProps>`
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize}` : "")};
  ${(props) => (props.fontWeight ? `font-weight: ${props.fontWeight}` : "")};
  ${(props) => (props.align ? `text-align: ${props.align}` : "")};
  color: ${({color}) => color || 'initial'};
   ${MediaScreenBuilder.between('zero', 'tablets')`
       
       font-size: 12px;
       font-weight: 300;
      
   `};
`;

export default Text;
