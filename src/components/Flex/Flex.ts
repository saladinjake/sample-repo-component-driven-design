import styled from "styled-components";

import manageBreakpoints from "../../utilities/manageBreakpoints";
import Base from "../Base";
import FlexIProps, { flexDisplays } from "./Flex.types";
import libraryConfig from "../../libraryConfig";

const Flex = styled(Base)<FlexIProps>`
   ${props => (props.display ? `display: ${props.display}` : `display: flex`)};

  ${({ direction, theme }) =>
    direction ? manageBreakpoints("flex-direction", direction, theme) : ""};

  ${({ alignItems, theme }) =>
    alignItems ? manageBreakpoints("align-items", alignItems, theme, flexDisplays) : ""};

  ${({ justifyContent, theme }) =>
    justifyContent ? manageBreakpoints("justify-content", justifyContent, theme, flexDisplays) : ""};

  ${({ wrap, theme }) => wrap ? manageBreakpoints("flex-wrap", wrap, theme) : ""};

  ${({ gap, theme }) => gap ? manageBreakpoints("gap", gap, theme, libraryConfig.spacing) : ""};
`;

export default Flex;
