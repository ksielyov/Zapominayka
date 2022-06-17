import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from '@navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Fragment>
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            barStyle={'light-content'}
          />
          <StackNavigation />
        </Fragment>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
