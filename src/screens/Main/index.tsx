import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './style';

const Main = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../shared/assets/images/background/main.png')}>
      <View>
        <Text style={styles.title}>hello</Text>
      </View>
    </ImageBackground>
  );
};

export default Main;
