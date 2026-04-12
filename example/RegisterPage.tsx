import React from 'react';
import {
  Flex,
  Box,
  Text,
  Button,
  Card,
  Input,
  PasswordInput,
} from '../src';
import { useCurrentScreenQuery } from '../src/hooks/useMediaQueryRequest';

const RegisterPage = () => {
  const currentScreen = useCurrentScreenQuery() || 'md';
  const isMobile = ['xs', 'sm', 'tab'].includes(currentScreen as string);

  return (
    <Flex height="auto" minHeight="100vh" width="100vw" backgroundColor="kudaLighterGrey" justifyContent="center" alignItems="center" p="4" py="10">
      <Card
        width={isMobile ? '100%' : '520px'}
        height="auto"
        backgroundColor="kudaWhite"
        p={isMobile ? '6' : '10'}
        style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}
      >
        <Flex direction="column" gap="8">
          <Flex direction="column" gap="2">
            <Text fontSize="28px" fontWeight="bold" color="kudaPurple">Create Account</Text>
            <Text color="kudaGrey">Open your world to premium banking.</Text>
          </Flex>

          <Flex direction="column" gap="4">
            <Flex gap="4" direction={isMobile ? 'column' : 'row'}>
              <Input label="First Name" placeholder="John" width="100%" />
              <Input label="Last Name" placeholder="Doe" width="100%" />
            </Flex>
            <Input label="Phone Number" placeholder="+234 800 000 000" width="100%" />
            <Input label="Email Address" placeholder="john@example.com" width="100%" />
            <PasswordInput label="Create Password" placeholder="••••••••" width="100%" />
          </Flex>

          <Flex direction="column" gap="4">
            <Button variant="primary" size="lg" fullWidth>Create My Account</Button>
            <Text fontSize="xs" color="kudaGrey" textAlign="center">
              By clicking "Create My Account", you agree to our Terms of Service and Privacy Policy.
            </Text>
          </Flex>

          <Flex justifyContent="center" gap="1" pt="4" style={{ borderTop: '1px solid #F4F4F4' }}>
            <Text fontSize="sm" color="kudaGrey">Already have an account?</Text>
            <Text fontSize="sm" color="kudaBlue" fontWeight="600" style={{ cursor: 'pointer' }}>Sign in</Text>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default RegisterPage;
