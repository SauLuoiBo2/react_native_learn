import React, {PropsWithChildren} from 'react';
import {NativeBaseThemeProvider} from './native-base';

export interface AppProviderProps extends PropsWithChildren {}

export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  return <NativeBaseThemeProvider>{children}</NativeBaseThemeProvider>;
};
