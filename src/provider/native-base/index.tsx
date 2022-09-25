import React, {PropsWithChildren} from 'react';
import {NativeBaseProvider} from 'native-base';
import {theme_native_base} from './theme';

export interface NativeBaseProviderProps extends PropsWithChildren {}

export const NativeBaseThemeProvider: React.FC<NativeBaseProviderProps> = ({
  children,
}) => {
  return (
    <NativeBaseProvider theme={theme_native_base}>
      {children}
    </NativeBaseProvider>
  );
};
