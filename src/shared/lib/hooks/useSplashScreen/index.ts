import {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

/**
 * @param backgroundLoaded
 */
const useSplashScreen = (backgroundLoaded: boolean): void => {
  useEffect(() => {
    if (!backgroundLoaded) {
      return;
    }

    (async function () {
      await RNBootSplash.hide({fade: true});
      ReactNativeHapticFeedback.trigger('notificationSuccess', {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
      });
    })();
  }, [backgroundLoaded]);
};

export {useSplashScreen};
