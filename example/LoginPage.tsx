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

const LoginPage = () => {
  const currentScreen = useCurrentScreenQuery() || 'md';
  const isMobile = ['xs', 'sm', 'tab'].includes(currentScreen as string);

  return (
    <Flex height="100vh" width="100vw" backgroundColor="kudaLighterGrey" justifyContent="center" alignItems="center" p="4">
      <Card
        width={isMobile ? '100%' : '420px'}
        height="auto"
        isGlass
        p={isMobile ? '6' : '10'}
        style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
      >
        <Flex direction="column" gap="6">
          <Flex direction="column" alignItems="center" textAlign="center" gap="2">
            <Box width="48px" height="48px" backgroundColor="kudaBlue" style={{ borderRadius: '12px' }} mb="2" />
            <Text fontSize="24px" fontWeight="bold" color="kudaPurple">Welcome Back</Text>
            <Text color="kudaGrey" fontSize="sm">Manage your finances with Muitiny</Text>
          </Flex>

          <Flex direction="column" gap="4">
            <Input label="Email Address" placeholder="name@company.com" width="100%" />
            <PasswordInput label="Password" placeholder="••••••••" width="100%" />
            <Flex justifyContent="end">
              <Text fontSize="xs" color="kudaBlue" style={{ cursor: 'pointer' }}>Forgot password?</Text>
            </Flex>
          </Flex>

          <Button variant="primary" size="lg" fullWidth>Sign In</Button>

          <Flex justifyContent="center" gap="1" mt="2">
            <Text fontSize="sm" color="kudaGrey">Don't have an account?</Text>
            <Text fontSize="sm" color="kudaBlue" fontWeight="600" style={{ cursor: 'pointer' }}>Sign up</Text>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default LoginPage;
