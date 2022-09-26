import {MainLayout} from '@src/components';
import React from 'react';
import {LogoHeader} from '../widget/login';
import {FormLogin} from '../widget/login/form-login';

export interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <MainLayout>
      {/* logo */}

      <LogoHeader />

      {/* form */}

      <FormLogin />
    </MainLayout>
  );
};
