import {COLORS} from '@src/assets/theme/colors';
import {SIZES} from '@src/assets/theme/sizes';
import {Hu} from '@src/components';
import React from 'react';
import {Animated, View} from 'react-native';
import {config} from '../config';

export interface ContentWidgetProps {}

const ContentWidget: React.FC<ContentWidgetProps> = () => {
  const flatListRef: React.LegacyRef<Animated.FlatList<any>> =
    React.useRef(null);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const data: any = {nativeEvent: {contentOffset: {x: scrollX}}};
  return (
    <View style={{backgroundColor: COLORS.white}}>
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        snapToAlignment={'center'}
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        data={config.bottom_tabs}
        keyExtractor={item => `Main-${item.id}`}
        onScroll={Animated.event([data], {useNativeDriver: false})}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: SIZES.width,
                height: SIZES.height,
              }}>
              {item.label === config.screens.home && <Hu />}
              {item.label === config.screens.profile && <Hu />}
              {item.label === config.screens.search && <Hu />}
            </View>
          );
        }}
      />
    </View>
  );
};

export default ContentWidget;
