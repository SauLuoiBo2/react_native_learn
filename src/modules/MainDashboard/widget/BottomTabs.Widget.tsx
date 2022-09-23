import {COLORS} from '@src/assets/theme/colors';
import {SIZES} from '@src/assets/theme/sizes';
import React, {useRef} from 'react';
import {Animated, FlatList, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import TabCom from '../components/Tab.Com';
import TabIndicatorCom from '../components/TabIndicator.Com';
import {config} from '../config';

export interface BottomTabsWidgetProps {
  scrollX: Animated.Value;
  flatListRef: React.RefObject<FlatList<any>>;
}

const BottomTabsWidget: React.FC<BottomTabsWidgetProps> = ({
  scrollX,
  flatListRef,
}) => {
  const containerRef = useRef<View | null>(null);
  const onBottomPress = (index: number) => {
    flatListRef.current?.scrollToOffset({
      offset: index * SIZES.width,
    });
  };
  return (
    <View
      ref={containerRef}
      style={{
        marginBottom: 20,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.radius,
        position: 'absolute',
        bottom: 0,
      }}>
      <Shadow
        size={[SIZES.width - SIZES.padding * 2, 85]}
        viewStyle={{
          backgroundColor: COLORS.primary3,
        }}>
        <View
          style={{
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary3,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: SIZES.padding,
            paddingVertical: 'auto',
            height: '100%',
            alignItems: 'center',
            position: 'relative',
          }}>
          {/* indicator */}
          <TabIndicatorCom scrollX={scrollX} />
          {/* nav */}
          {config.bottom_tabs.map((item, i) => {
            return (
              <TabCom data={item} key={i} onPress={() => onBottomPress(i)} />
            );
          })}
        </View>
      </Shadow>
    </View>
  );
};

export default BottomTabsWidget;
