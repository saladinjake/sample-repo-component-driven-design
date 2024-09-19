import React from 'react'
import styled, { css } from 'styled-components'
import Box from '../Box/Box'
import Base from '../Base/Base'
import BaseProps from '../Base/Base.types'
interface IRow {
  centered?: boolean
  height?: string
  backgroundColor?: string
  border?: string
}
const Row = styled(Box)<IRow>`
border: ${({ border }) => (border ? border : '#fff')};
   background-color: ${({ backgroundColor }) =>
     backgroundColor ? backgroundColor : '#fff'};
   height:${({ height }) => (height ? height : '')};
  &:after {
    content:"",
    clear: both;
    display:table
  }

  

  
}
`

export default Row
