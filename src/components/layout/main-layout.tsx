import {View} from 'native-base';
import React, {PropsWithChildren} from 'react';

export interface MainLayoutProps extends PropsWithChildren {}

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return <View mt={30}>{children}</View>;
};
