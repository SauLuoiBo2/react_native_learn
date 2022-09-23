import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as AuthScreens from '@src/modules/auth';

const Stack = createStackNavigator();

export const AUTH_SCREENS = {
  LOGIN_SCREEN: 'LOGIN_SCREEN',
  RESGISTER_SCREEN: 'RESGISTER_SCREEN',
  FORGOT_PASSWORD_SCREEN: 'FORGOT_PASSWORD_SCREEN',

  STATUS_SCREEN: 'STATUS_SCREEN',
};

const {LOGIN_SCREEN, RESGISTER_SCREEN, FORGOT_PASSWORD_SCREEN, STATUS_SCREEN} =
  AUTH_SCREENS;

const {LoginScreen, RegisterScreen, StatusScreen, ForgotPasswordScreen} =
  AuthScreens;

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={LOGIN_SCREEN}>
      <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={RESGISTER_SCREEN} component={RegisterScreen} />
      <Stack.Screen
        name={FORGOT_PASSWORD_SCREEN}
        component={ForgotPasswordScreen}
      />

      <Stack.Screen name={STATUS_SCREEN} component={StatusScreen} />
    </Stack.Navigator>
  );
};
