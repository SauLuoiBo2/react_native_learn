import {AppProvider} from '../provider';
import {AppContainer} from '@src/routes';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <AppContainer />
      </AppProvider>
    </SafeAreaProvider>
  );
};

export default App;
