import {HStack, Text, View} from 'native-base';
import {InterfaceViewProps} from 'native-base/lib/typescript/components/basic/View/types';
import React from 'react';

export interface CustomDividerProps {}

const styleLine: InterfaceViewProps = {
  borderColor: 'muted.400',
  flex: 1,
  height: '50%',
  borderBottomWidth: 0.5,
};

export const CustomDivider: React.FC<CustomDividerProps> = () => {
  return (
    <HStack w={'full'}>
      <View {...styleLine} />
      <View px={3}>
        <Text color={'muted.400'}>hoac</Text>
      </View>
      <View {...styleLine} />
    </HStack>
  );
};
