import {COLORS} from '@src/assets/theme/colors';
import {FONTS} from '@src/assets/theme/fonts';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {BottomTabsProps} from '../model';

export interface TabComProps extends TouchableOpacityProps {
  data: BottomTabsProps;
}

const TabCom: React.FC<TabComProps> = ({data, ...props}) => {
  return (
    <View>
      <TouchableOpacity
        {...props}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
        <Image
          source={data.icon}
          style={{width: 25, height: 25}}
          resizeMode="contain"
        />
        <Text style={{marginTop: 3, color: COLORS.white, ...FONTS.h3}}>
          {data.label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabCom;
