import {useNavigation} from '@react-navigation/native';
import {CustomDivider} from '@src/components';
import {NbInput} from '@src/components/form';
import {AUTH_SCREENS} from '@src/routes/stack';
import {View, VStack, HStack, Button} from 'native-base';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface FormLoginProps {
  containerStyle?: StyleProp<ViewStyle>;
}

export const FormLogin: React.FC<FormLoginProps> = ({containerStyle}) => {
  const navigation = useNavigation<any>();

  return (
    <View style={containerStyle}>
      <VStack>
        <NbInput.InputBasic
          title="Email/ So dien thoai"
          placeholder={'Nhap email/ So dien thoai'}
        />
        <NbInput.InputBasic
          title="Mat khau"
          placeholder={'Nhap mat khau'}
          type="password"
        />
        <HStack justifyContent={'flex-end'}>
          <Button variant="link">Quen mat khau?</Button>
        </HStack>
      </VStack>
      <VStack space={2}>
        <Button>Dang nhap</Button>

        <CustomDivider />

        <Button
          variant="outline"
          onPress={() => navigation.navigate(AUTH_SCREENS.RESGISTER_SCREEN)}>
          Dang ky de thanh dai ly
        </Button>
      </VStack>
    </View>
  );
};
