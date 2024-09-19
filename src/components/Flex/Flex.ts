import styled from "styled-components";

import manageBreakpoints from "../../utilities/manageBreakpoints";
import Base from "../Base";
import FlexIProps, { flexDisplays } from "./Flex.types";

const Flex = styled(Base)<FlexIProps>`
   ${props => (props.display ? `display: ${props.display}` : `display: flex`)};

  ${({ direction, theme }) =>
    manageBreakpoints("flex-direction", direction, theme)};

  ${({ alignItems, theme }) =>
    manageBreakpoints("align-items", alignItems, theme, flexDisplays)};

  ${({ justifyContent, theme }) =>
    manageBreakpoints("justify-content", justifyContent, theme, flexDisplays)};

  ${({ wrap, theme }) => manageBreakpoints("flex-wrap", wrap, theme)};

  ${({ gap, theme }) => manageBreakpoints("gap", gap, theme)};
`;

export default Flex;
