import React from 'react'
import styled from 'styled-components'
import Base from '../Base/Base'

const getWidthValue = span => {
  if (!span) return

  let width = (span / 12) * 100
  return `width: ${width}%`
}

export const Column = styled(Base)<{
  xs?: string
  sm?: string
  md?: string
  lg?: string
}>`
  float: left;
  ${({ xs }) => (xs ? getWidthValue(xs) : 'width: 100%')};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthValue(sm)};
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthValue(md)};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthValue(lg)};
  }
`
