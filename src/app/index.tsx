import React, {Fragment, useEffect} from 'react';
import {StatusBar} from 'react-native';

import RNBootsplash from 'react-native-bootsplash';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Main from '../screens/Main';

const App = () => {
  useEffect(() => {
    (async function () {
      await RNBootsplash.hide({fade: true});
      ReactNativeHapticFeedback.trigger('notificationSuccess', {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
      });
    })();
  }, []);

  return (
    <Fragment>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <Main />
    </Fragment>
  );
};

export default App;
