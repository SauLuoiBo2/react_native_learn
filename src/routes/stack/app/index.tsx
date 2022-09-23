import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainDashboard} from '@src/modules';

const Stack = createStackNavigator();

export const APP_SCREENS = {
  DASHBOARD_SCREEN: 'DASHBOARD_SCREEN',
};

const {DASHBOARD_SCREEN} = APP_SCREENS;

export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={DASHBOARD_SCREEN}>
      <Stack.Screen name={DASHBOARD_SCREEN} component={MainDashboard} />
    </Stack.Navigator>
  );
};
