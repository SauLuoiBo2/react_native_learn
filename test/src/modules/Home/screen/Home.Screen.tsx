import React from 'react';
import {View} from 'react-native';
import {HeaderWidget} from '../widget';

export interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View>
      <HeaderWidget />
    </View>
  );
};

export default HomeScreen;
