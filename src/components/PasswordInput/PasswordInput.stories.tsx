import React from 'react'
import PasswordInput from './PasswordInput'
import Box from '../Box/Box'
import { Container } from "../Container/Container"

export default {
  title: 'Form/PasswordInput',
  component: PasswordInput,
}



export const Variant = () => {

   const academyTitleResponsiveStyles = {
    xs: {
      color: '#40196D',
      fontFamily: 'sans-serif',
      fontWeight: '600',
      fontSize: '15px',
    },
    sm: {
      color: '#40196D',
      fontFamily: 'sans-serif',
      fontWeight: '500',
      fontSize: '18px',
    },
    md: {
      color: '#40196D',
      fontFamily: 'sans-serif',
      fontWeight: '700',
      fontSize: '25px',
      marginTop:"10px"
    },
    lg: {
      color: '#40196D', 
      fontFamily: 'sans-serif',
      fontWeight: '800',
      fontSize: '28px',
        marginTop:"10px"
    },
  }

  const layoutResponsive = {
    md: { margin: '80px auto', padding: '80px', width: '80%' },
    lg: { margin: '80px auto', padding: '80px', width: '80%' },
  }
  return (
    <Container centered={true} width="100%" sx={{ sm: { marginTop: '100px' } }}>
      <Box style={{ marginTop: '50px' }} sx={layoutResponsive}>
        <Box
          onSubmit={() =>{}}
          id="lape"
          sm="12"
          md="12"
          lg="6"
          sx={{
            all: {
              boxShadow: '0 0 25px rgba(0,0,0,.06)',
            },
          }}
        >
          <Container>
            <Box width={'100%'} mb="5">
              Welcome Back Using Containers
            </Box>

            <PasswordInput
              type="password"
              value={'values.password'}
              id=""
              width="100%"
              label=""
              placeholder="..........."
              name="password"
              onChangePure={() => {}}
              passwordValidation={true}
            />
          </Container>
        </Box>
      </Box>
    </Container>
  )
}

export const Control = {
  args: {},
}
