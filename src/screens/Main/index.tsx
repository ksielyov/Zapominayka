import {Button} from '@ui';
import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import {Brain} from '@icons';

const Main = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../shared/assets/images/background/main.png')}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>
          Запоминать стихи{'\n'}с картинками легче
        </Text>
        <View style={styles.topIconContainer}>
          <Brain />
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
    </ImageBackground>
  );
};

export default Main;
