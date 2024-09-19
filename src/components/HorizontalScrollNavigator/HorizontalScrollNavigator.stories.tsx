import React, { useMemo } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import  {
	HorizontalScrollNavigator,
	HorizontalFilterBox,
} from './HorizontalScrollNavigator'
import Flex from '../Flex'
import Box from '../Box'

import FilterSearch from '../FilterSearch/FilterSearch'
import DatePicker from '../DatePicker/DatePicker'
import Select from '../Select/Select'

import {
	useMediaQueryRequest,
	useCurrentScreenQuery,
} from '../../hooks/useMediaQueryRequest'

export default {
	title: 'Layout/HorizontalScrollNavigator',
	component: HorizontalScrollNavigator,
} as ComponentMeta<typeof HorizontalScrollNavigator>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof HorizontalScrollNavigator> = args => {
	const currentScreen = useCurrentScreenQuery()

	const hitsBreakPoint = useMemo(
		() => ['sm', 'xs', 'tab', 'tabPortrait'].includes(currentScreen),
		[currentScreen]
	)

	const toggleFilter = () => {}

	const lastItemOrdering ={ md: {order:1, marginLeft:"auto", selfAlign: "flex-end" }, tab:{order:1}, sm:{order:1}, xs:{order: 1}}
  const firstItemOrdering ={ md: {order:-1 , selfAlign:"flex-start", marginRight:"auto"}, tab:{order:1}, sm:{order:1}, xs:{order: 1}}
	return (
		<>
	

			<div id="testGround" style={{ marginTop: '40px' }}>
				<HorizontalFilterBox>
				<Box sx={{...firstItemOrdering}}>
	<Select
						width={hitsBreakPoint ? '100%' : '200px'}
						hasSearch
						label=""
						onChange={e => {
							console.log({ e })
						}}
						valueArg={'name'}
						options={[
							{
								name: 'Quality Assurance has a very long description and continues to work',
								value: 'quality assurance',
								id: '5',
								rand: 4,
							},
							{
								name: 'Super Administrator',
								value: 'super admin',
								id: '8',
								rand: 9,
							},
						]}
						value={'Select Branch'}
					/>
				</Box>
						<DatePicker
							width={hitsBreakPoint? '100%': "200px"}
							required
							label=""
							date={null}
							setDate={() => null}
							placeholder="Financial Date"
						/>

							<DatePicker
							width={hitsBreakPoint? '100%': "200px"} 
							required
							label=""
							date={null}
							setDate={() => null}
							placeholder="Financial Date"
						/>
				
					<StyledBlock mr="4" sx={{...lastItemOrdering}}>
						<FilterSearch
							filterOptions={[{ name: 'Name', value: 'NAME' }]}
							filterBy={[]}
							setFilterBy={value => {}}
							placeholder="Search by filter"
							value=""
							onSearch={v => null}
							isLoading={false}
							onClear={() => console.log('Its cleared')}
							width={hitsBreakPoint? '350px': "300px"}
							dropdownWidth="200px" 
						/>
					</StyledBlock>
				</HorizontalFilterBox>


					<HorizontalScrollNavigator {...args}>
				<StyledBlock mr="4">
					Component A
				</StyledBlock>

				<StyledBlock mr="4">
					Component B
				</StyledBlock>

				<StyledBlock mr="4">
					Component C
				</StyledBlock>

					<StyledBlock mr="4">
					Component D
				</StyledBlock>
					<StyledBlock mr="4">
					Component E
				</StyledBlock>

				<StyledBlock mr="4">
					Component F
				</StyledBlock>

				<StyledBlock mr="4">
					Component G
				</StyledBlock>

				<StyledBlock mr="4">
					Component H
				</StyledBlock>

					<StyledBlock mr="4">
					Component I
				</StyledBlock>
					<StyledBlock mr="4">
					Component J
				</StyledBlock>


				<StyledBlock mr="4">
					Component K
				</StyledBlock>

					<StyledBlock mr="4">
					Component L
				</StyledBlock>
					<StyledBlock mr="4">
					Component M
				</StyledBlock>

				<StyledBlock mr="4">
					Component N
				</StyledBlock>

				<StyledBlock mr="4">
					Component O
				</StyledBlock>

				<StyledBlock mr="4">
					Component P
				</StyledBlock>

					<StyledBlock mr="4">
					Component Q
				</StyledBlock>
					<StyledBlock mr="4">
					Component R
				</StyledBlock>
			</HorizontalScrollNavigator>
			</div>
		</>
	)
}
// 👇 Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = {
	displayChild: null,
}

const StyledBlock = styled(Box)`
	display: inline-block;
	margin-right: 20px;
`
