import React from 'react';
import {StatusBar} from 'react-native';

import {StackNavigation} from '@navigation';
import {AppContainer} from './containers';

const App = () => {
  return (
    <AppContainer>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <StackNavigation />
    </AppContainer>
  );
};

export default App;
