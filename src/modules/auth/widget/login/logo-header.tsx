import {IMAGES_URL} from '@src/assets';
import {Image, Text, View} from 'native-base';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface LogoHeaderProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const {logos} = IMAGES_URL;

export const LogoHeader: React.FC<LogoHeaderProps> = ({containerStyle}) => {
  return (
    <View style={containerStyle}>
      <Image source={logos.logo_tinwin} alt={'sda'} my={10} />
      <View width={'60%'}>
        <Text fontWeight={600} fontSize={30} color={'text.main'}>
          Chào mừng bạn đến với{' '}
          <Text fontWeight={600} color={'primary.500'} fontSize={30}>
            TinWin.
          </Text>
        </Text>
      </View>
    </View>
  );
};
