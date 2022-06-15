import {Button} from '@ui';
import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import {Brain} from '@icons';
import RNBootsplash from 'react-native-bootsplash';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {AppSafeArea} from '../../shared/ui/AppSafeArea';

const Main = () => {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  useEffect(() => {
    if (!backgroundLoaded) {
      return;
    }

    (async function () {
      await RNBootsplash.hide({fade: true});
      ReactNativeHapticFeedback.trigger('notificationSuccess', {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
      });
    })();
  }, [backgroundLoaded]);

  return (
    <ImageBackground
      style={styles.container}
      onLayout={() => setBackgroundLoaded(true)}
      source={require('../../shared/assets/images/background/main.png')}>
      <AppSafeArea>
        <View style={styles.topContainer}>
          <Text style={styles.title}>
            Запоминать стихи{'\n'}с картинками легче
          </Text>
          <View style={styles.topIconContainer}>
            <Brain style={styles.topIcon} />
          </View>
        </View>
        <LinearGradient
          useAngle={true}
          angle={-310}
          locations={[0.25, 0.77]}
          style={styles.bottomContainer}
          colors={['#D5332E', '#E15D23']}>
          <Text style={styles.bottomTitle}>
            Zапоминай<Text style={styles.bottomTitleNormal}>ка</Text>
          </Text>
          <Button title={'Найти стих или автора'} onPress={() => {}} />
        </LinearGradient>
      </AppSafeArea>
    </ImageBackground>
  );
};

export default Main;
