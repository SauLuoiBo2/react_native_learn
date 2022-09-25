import {Text} from 'react-native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack, AuthStack} from './stack';
import {screenOptions} from './config';

const Stack = createStackNavigator();

export const MAIN_STACK = {
  AUTH_STACK: 'AUTH_STACK',
  APP_STACK: 'APP_STACK',
};

const {AUTH_STACK, APP_STACK} = MAIN_STACK;

export const AppContainer = () => {
  return (
    <NavigationContainer fallback={<Text>Loading ...</Text>}>
      <Stack.Navigator
        initialRouteName="APP_STACK"
        screenOptions={screenOptions}>
        {false ? (
          <Stack.Screen name={APP_STACK} component={AppStack} />
        ) : (
          <Stack.Screen name={AUTH_STACK} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
