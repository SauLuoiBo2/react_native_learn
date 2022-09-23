import {Text} from 'react-native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack, AppStack} from './stack';

const Root = createStackNavigator();

export const MAIN_STACK = {
  AUTH_STACK: 'AUTH_STACK',
  APP_STACK: 'APP_SCREEN',
};

const {AUTH_STACK, APP_STACK} = MAIN_STACK;

export const AppContainer = () => {
  return (
    <NavigationContainer fallback={<Text>Loading ...</Text>}>
      <Root.Navigator>
        {false ? (
          <Root.Screen name={APP_STACK} component={AppStack} />
        ) : (
          <Root.Screen name={AUTH_STACK} component={AuthStack} />
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
};
