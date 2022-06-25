import React, {FunctionComponent} from 'react';
import {AppNavigationContainer} from './AppNavigationContainer';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const AppContainer: FunctionComponent = ({children}) => (
  <SafeAreaProvider>
    <AppNavigationContainer>{children}</AppNavigationContainer>
  </SafeAreaProvider>
);
export {AppContainer};
