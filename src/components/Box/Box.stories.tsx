import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Box from './Box'
import Flex from '../Flex'
import  Row   from '../Row/Row'
import { Column } from '../Column/Column'

export default {
  title: 'Layout/Box',
  component: Box,
} as ComponentMeta<typeof Box>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Box> = args => <Box {...args}>Text</Box>

// 👇 Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = {
  ml: ['1'],
  height: ['10/12'],
  rounded: ['sm', 'md', 'lg'],
  px: ['5', '10'],
  py: ['5', '10'],
  backgroundColor: ['kudaPurple'],
  color: ['kudaWhite'],
  opacity: ['0.5'],
}

const ResponsiveBoxTemplate: ComponentStory<typeof Box> = args => (
  <Flex
    justifyContent="between"
    sx={{
      sm: { 'flex-direction': 'column' },
      md: { 'flex-direction': 'row' },
      lg: { 'flex-direction': 'row' },
    }}
  >
    <Box {...args}>Resize to see effect</Box>
    <Box {...args}>Resize to see effect</Box>
    <Box {...args}>Resize to see effect</Box>
    <Box {...args}>Resize to see effect</Box>
  </Flex>
)
//responsive box
export const ResponsiveBox = ResponsiveBoxTemplate.bind({})
ResponsiveBox.args = {
  mb: ['3'],
  // // height: ['10/12'],
  //    sm    tabs  md    lg
  px: ['5', '10', '20', '20'],
  py: ['5', '10', '20', '20'],
  height: {
    sm: '60px',
    tabs: '100px',
    md: '300px',
    lg: '200px',
    xl: '250px',
  },
  mr: '10',
  borderBottomColor: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  sx: {
    /*css cascading style method*/
    sm: { width: '100%', 'background-color': 'green', 'font-size': '10px' },

    md: {
      /*javascript css variable method*/
      width: '33.33%',
      backgroundColor: 'yellow',

      fontSize: '12px',
    },
    lg: {
      width: '33.33%',
      backgroundColor: 'purple',
      fontSize: '14px',
    },
    xl: {
      width: '33.33%',

      backgroundColor: 'gray',

      fontSize: '16px',
    },
  },
}

const CSSOptionsBoxTemplate: ComponentStory<typeof Box> = args => (
  <Flex
    justifyContent={{
      sm: 'start',
      md: 'end',
      lg: 'between',
      xl: 'space-between',
    }}
    sx={{
      sm: { flexDirection: 'column' },
      md: { flexDirection: 'row' },
      lg: { flexDirection: 'row' },
    }}
  >
    <Box {...args}>Box 1</Box>
    <Box {...args}>Box 2</Box>
  </Flex>
)
// testing camel case props vs css based props
export const CSSOptionsBox = CSSOptionsBoxTemplate.bind({})
CSSOptionsBox.args = {
  alignContent: 'center',

  alignSelf: 'center',
  alignmentBaseline: 'center',
  all: 'initial',
  backgroundColor: '#eaeaea',

  padding: '3px',

  height: '100px',
  width: '200px',
  alignItems: 'center',
  justifyContent: 'center',
  mt: '5',
  pt: '5',
  ml: '5',
}
