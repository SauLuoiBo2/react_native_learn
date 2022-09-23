// import {MainDashboard} from '@src/modules';
// import {AppContainer} from './src/routes';
import {AppContainer} from './src/routes';
import React from 'react';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      {/* <MainLayout />
      <Text>sda</Text>
      <Home /> */}
      {/* <MainDashboard /> */}
      <AppContainer />
    </SafeAreaView>
  );
};

export default App;
