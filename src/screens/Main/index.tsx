import {Button} from '@ui';
import React, {useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import {Brain} from '@icons';
import {AppSafeArea} from '@ui';
import {useNavigation} from '@react-navigation/native';
import {useSplashScreen} from '@hooks';

const Main = () => {
  const navigation = useNavigation();
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  useSplashScreen(backgroundLoaded);

  return (
    <ImageBackground
      style={styles.container}
      onLayout={() => setBackgroundLoaded(true)}
      source={require('@images/background/main.png')}>
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
          useAngle
          angle={-310}
          locations={[0.25, 0.77]}
          style={styles.bottomContainer}
          colors={['#D5332E', '#E15D23']}>
          <Text style={styles.bottomTitle}>
            Zапоминай<Text style={styles.bottomTitleNormal}>ка</Text>
          </Text>
          <Button
            title={'Найти стих или автора'}
            onPress={() =>
              // @ts-ignore
              navigation.navigate('Search')
            }
          />
        </LinearGradient>
      </AppSafeArea>
    </ImageBackground>
  );
};

export default Main;
