import React from 'react';
import {StatusBar} from 'react-native';

import {StackNavigation} from '@navigation';
import {AppContainer} from './containers';

import codePush from 'react-native-code-push';
import {useCodePushService} from './lib';

const codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_START};

const App = () => {
  useCodePushService();

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

export default codePush(codePushOptions)(App);
