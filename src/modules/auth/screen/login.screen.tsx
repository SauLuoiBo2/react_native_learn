import {MainLayout} from '@src/components';
import {View, Text} from 'native-base';
import React from 'react';
import {LogoHeader} from '../widget/login';

export interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <MainLayout>
      {/* logo */}
      <View>
        <LogoHeader />
      </View>
      {/* form */}
      <View>
        <Text>form</Text>
      </View>
    </MainLayout>
  );
};
