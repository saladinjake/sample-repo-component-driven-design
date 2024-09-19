import styled from 'styled-components'
import Base from '../Base'
import BaseProps from "../Base/Base.types"


import manageBreakpoints from '../../utilities/manageBreakpoints'
export const flexDisplays = {
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  even: 'space-even',
  start: 'flex-start',
  end: 'flex-end',
}

export  interface ExtraIProps {
  display?: string;
  direction?: string
  wrap?: string
  alignItems?: keyof typeof flexDisplays
  justifyContent?: keyof typeof flexDisplays
  gap?: string
}

//base box
const Box = styled(Base)<ExtraIProps & BaseProps>`
  ${props => (props.display ? `display: ${props.display}` : `display: block`)};

  ${(props) => props?.direction && manageBreakpoints('flex-direction', props.direction, props.theme)};

  ${(props) => props.alignItems && manageBreakpoints('align-items', props.alignItems, props.theme, flexDisplays)};

  ${(props) => props?.justifyContent && manageBreakpoints('justify-content', props.justifyContent, props.theme, flexDisplays)};

  ${(props) => props.wrap && manageBreakpoints('flex-wrap', props.wrap, props.theme)};

  ${(props) => props.gap && manageBreakpoints('gap', props.gap, props.theme)};

  
`

export default Box
