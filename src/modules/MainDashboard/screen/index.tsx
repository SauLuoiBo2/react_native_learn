import {SIZES} from '@src/assets/theme/sizes';
import React from 'react';
import {Animated, FlatList, StyleSheet, View} from 'react-native';
import BottomTabsWidget from '../widget/BottomTabs.Widget';
import ContentWidget from '../widget/Content.Widget';

// import ContentWidget from './widget/Content.Widget';

type Props = {};

export const MainDashboard: React.FC<Props> = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef<FlatList>(null);
  return (
    <View style={styles.container}>
      {/* content  */}
      <ContentWidget scrollX={scrollX} flatListRef={flatListRef} />
      {/* <Text>dsadsadsa</Text> */}
      <BottomTabsWidget scrollX={scrollX} flatListRef={flatListRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    width: '100%',
    paddingHorizontal: SIZES.padding,
  },

  // hello: {
  //   flexDirection: 'column',
  // },
});
