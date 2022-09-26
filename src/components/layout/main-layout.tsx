import {SIZES} from '@src/assets/theme/sizes';
import {HStack, Text, View, Icon as NbIcon} from 'native-base';
import React, {PropsWithChildren} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface MainLayoutProps
  extends PropsWithChildren,
    HeaderMainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = ({children, ...props}) => {
  return (
    <View mt={30} height={SIZES.height}>
      {props.title && <HeaderMainLayout {...props} />}
      {children}
    </View>
  );
};

interface HeaderMainLayoutProps {
  title?: string;
  onLeftPress?: () => void;
}

const HeaderMainLayout: React.FC<HeaderMainLayoutProps> = ({
  title,
  onLeftPress,
}) => {
  return (
    <HStack justifyContent={'center'} position={'relative'} mb={2}>
      {onLeftPress && (
        <View position={'absolute'} left={0} top={0}>
          <TouchableOpacity onPress={onLeftPress}>
            <NbIcon as={<Icon name={'chevron-left'} />} size={7} />
          </TouchableOpacity>
        </View>
      )}

      <Text fontWeight={600} fontSize={18}>
        {title}
      </Text>
    </HStack>
  );
};
