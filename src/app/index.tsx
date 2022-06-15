import React, {Fragment, useEffect} from 'react';
import {StatusBar} from 'react-native';

import RNBootsplash from 'react-native-bootsplash';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Main from '../screens/Main';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from '../navigation/stackNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Fragment>
          <StatusBar
            translucent={true}
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
