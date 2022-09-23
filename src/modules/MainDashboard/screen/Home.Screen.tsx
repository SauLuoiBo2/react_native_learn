import React from 'react';
import {Text, View} from 'react-native';

export interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
