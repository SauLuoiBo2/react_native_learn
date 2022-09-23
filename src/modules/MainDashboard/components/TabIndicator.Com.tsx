import {COLORS} from '@src/assets/theme/colors';
import {SIZES} from '@src/assets/theme/sizes';
import React from 'react';
import {Animated} from 'react-native';
import {config} from '../config';

export interface TabsIndicatorComProps {
  scrollX: Animated.Value;
}

function getWidth(): number {
  let width = SIZES.width - 2 * SIZES.padding;
  let index = config.bottom_tabs.length;

  return width / (index || 1);
}

const inputRange = config.bottom_tabs.map((_, i) => i * SIZES.width);

const outputRange = config.bottom_tabs.map((_, i) => i * getWidth());

const TabIndicatorCom: React.FC<TabsIndicatorComProps> = ({scrollX}) => {
  const translateX = scrollX.interpolate({inputRange, outputRange});

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: 0,
        height: '100%',
        width: getWidth(),
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.primary,
        transform: [{translateX}],
      }}
    />
  );
};

export default TabIndicatorCom;
