import React from "react"
import styled from "styled-components"
import Box  from "../Box/Box"



export const ColumnGrid = styled(Box)<{width?: string, span?:number}>`
 float:left;
 width: ${({width}) => width ? width : "100%"}

 @media only screen and (min-width: 768px){
  width: ${props => props?.span ? props.span/12*100: "8.33"}
 }


 
`

