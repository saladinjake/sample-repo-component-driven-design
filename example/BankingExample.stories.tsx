import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';


export default {
  title: 'Examples/Banking Suite',
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<any>;


export const Login = () => <LoginPage />;
export const Register = () => <RegisterPage />;

