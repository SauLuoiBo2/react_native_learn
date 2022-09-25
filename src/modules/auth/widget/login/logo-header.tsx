import {IMAGES_URL} from '@src/assets';
import {Image, Text, View} from 'native-base';
import React from 'react';

export interface LogoHeaderProps {}

const {logos} = IMAGES_URL;

export const LogoHeader: React.FC<LogoHeaderProps> = () => {
  return (
    <View>
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
