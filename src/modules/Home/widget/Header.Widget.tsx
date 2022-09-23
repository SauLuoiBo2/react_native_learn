import {COLORS} from '@src/assets/theme/colors';
import {FONTS} from '@src/assets/theme/fonts';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface HeaderWidgetProps {}

const HeaderWidget: React.FC<HeaderWidgetProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hello}>
        <Text style={{...FONTS.h2}}>Hello, Shine Edu Dev!</Text>
        <Text style={{...FONTS.body3, color: COLORS.gray30}}>HeaderWidget</Text>
      </View>

      <Text>HeaderWidget</Text>
    </View>
  );
};

export default HeaderWidget;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    // paddingHorizontal: SIZES.padding,
  },

  hello: {
    flexDirection: 'column',
  },
});
