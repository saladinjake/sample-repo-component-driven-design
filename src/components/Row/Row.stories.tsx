
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Box from '../Box/Box'
import Flex from '../Flex'
import  Row   from '../Row/Row'
import { Column } from '../Column/Column'

export default {
  title: 'Layout/Row',
  component: Row,
} as ComponentMeta<typeof Box>

//👇 We create a “template” of how args map to rendering
const RowBoxTemplate : ComponentStory<typeof Row> = args => (
  <>
    <Row {...args}>
      <Column md="6" border="1px solid #333" height="300px">
        <Box  mt="10">
          <h4 style={{ color: '#40196D', marginBottom: '20px' }}>
            Visit Nerve V2{' '}
          </h4>
          <p> Talk is cheap... see for your self </p>
        </Box>
      </Column>
      <Column md="6" border="1px solid #333" height="300px">Row 2</Column>
    </Row>

    <Row  {...args}>
      <Column md="3" lg="4" sm="12" border="1px solid #333" height="300px">
        {' '}
        <h1 style={{ color: '#40196D', marginBottom: '20px' }}>
          Buy Me Coffee{' '}
        </h1>
      </Column>
      <Column md="9" lg="8" sm="12" border="1px solid #333" height="300px">
        10 dollars minimum...
      </Column>
    </Row>

    <Row {...args}>
      <Column lg="4" md="5" sm="12" border="1px solid #333" height="300px">
        {' '}
        <h1 style={{ color: '#40196D', marginBottom: '20px' }}>
          Place Holder Test{' '}
        </h1>
      </Column>
      <Column lg="8" md="7" sm="12" border="1px solid #333" height="300px">
        Lorem Ipsum....
      </Column>
    </Row>

    <Row {...args}>
      <Column lg="4" md="4" sm="12" border="1px solid #333" height="300px">
        {' '}
        <h1 style={{ color: '#40196D', marginBottom: '20px' }}>
          Place Holder Test{' '}
        </h1>
      </Column>
      <Column lg="4" md="4" sm="12" border="1px solid #333" height="300px">
        Lorem Ipsum....
      </Column>
      <Column lg="4" md="4" sm="12" border="1px solid #333" height="300px">
        Lorem Ipsum....
      </Column>
    </Row>

    <Row {...args}>
      <Column md="3" sm="12" border="1px solid #333" height="300px">
        Row 1
      </Column>
      <Column md="3" sm="12" border="1px solid #333" height="300px">
        Row 2
      </Column>
      <Column md="3" sm="12" border="1px solid #333" height="300px">
        Row 2
      </Column>
      <Column md="3" sm="12" border="1px solid #333" height="300px">
        Row 2
      </Column>
    </Row>
  </>
)

// 👇 Each story then reuses that template
export const RowBox =  RowBoxTemplate.bind({})
RowBox.args = {
  height:"300px",
  border: "2px solid black",
  backgroundColor:"#fff"
}


