import {COLORS} from '@src/assets/theme/colors';
import {SIZES} from '@src/assets/theme/sizes';

import React from 'react';
import {Animated, FlatList, View} from 'react-native';

import {config} from '../config';
import {BottomTabsProps} from '../model';

export interface ContentWidgetProps {
  scrollX: Animated.Value;
  flatListRef: React.RefObject<FlatList<any>>;
}

const ContentWidget: React.FC<ContentWidgetProps> = ({
  scrollX,
  flatListRef,
}) => {
  // const flatListRef = React.useRef<FlatList>(null);
  // const scrollX = React.useRef(new Animated.Value(0)).current;

  const data: any = {nativeEvent: {contentOffset: {x: scrollX}}};
  return (
    <View style={{backgroundColor: COLORS.white}}>
      <Animated.FlatList
        ref={flatListRef}
        scrollEnabled={false}
        horizontal
        pagingEnabled
        snapToAlignment={'center'}
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        data={config.bottom_tabs}
        keyExtractor={(item: BottomTabsProps) => `Main-${item.id}`}
        onScroll={Animated.event([data], {useNativeDriver: false})}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: SIZES.width,
                height: SIZES.height,
              }}>
              {item.element()}
            </View>
          );
        }}
      />
    </View>
  );
};

export default ContentWidget;
