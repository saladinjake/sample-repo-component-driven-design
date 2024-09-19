import React, { Component } from 'react'
import styled from 'styled-components'
import Box from '../Box/Box'
import Base from '../Base/Base'

export const Container = styled(Base)<{
	width?: string
	paddingRight?: string
	paddingLeft?: string
	marginRight?: string
	marginLeft?: string
}>`
	--bs-gutter-x: 1.5rem;
	--bs-gutter-y: 0;
	width: ${({ width }) => (width ? width : '100%')}
	padding-right:   ${({ paddingRight }) =>
		paddingRight ? `calc(var(--bs-gutter-x) * 0.5)` : '2px'} 
	padding-left: ${({ paddingLeft }) =>
		paddingLeft ? `calc(var(--bs-gutter-x) * 0.5)` : '2px'} 
	margin-right: ${({ marginRight }) => (marginRight ? `auto` : '2px')} 
	margin-left: ${({ marginLeft }) => (marginLeft ? `auto` : '2px')} 

	@media (min-width: 576px) {
		max-width: 540px;
	}
	@media (min-width: 768px) {
		max-width: 720px;
	}
	@media (min-width: 992px) {
		max-width: 960px;
	}
	@media (min-width: 1200px) {
		max-width: 1140px;
	}
	@media (min-width: 1400px) {
		max-width: 1320px;
	}
`
