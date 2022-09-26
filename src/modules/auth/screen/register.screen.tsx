import {useNavigation} from '@react-navigation/native';
import {MainLayout} from '@src/components';
import React from 'react';
import {FormRegister} from '../widget/register';

export interface RegisterScreenProps {}

export const RegisterScreen: React.FC<RegisterScreenProps> = () => {
  const navigation = useNavigation();

  return (
    <MainLayout title="Dang ky dai ly" onLeftPress={navigation.goBack}>
      <FormRegister />
    </MainLayout>
  );
};
