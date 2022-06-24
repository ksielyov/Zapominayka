import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Container} from '@ui';
import styles from './styles';
import {CardItemInterface} from '../../lib';

/**
 * @param index
 * @param text
 * @param imageSource
 * @constructor
 */
const CardItem: FunctionComponent<CardItemInterface> = ({
  index,
  text,
  imageSource,
}) => (
  <View style={styles.container}>
    <View style={styles.cardImageContainer}>
      <FastImage style={styles.cardImage} source={{uri: imageSource}} />
      <Container bottom={-1} absolute>
        <View style={styles.numericContainer}>
          <Text style={styles.numericText}>{index}</Text>
        </View>
      </Container>
    </View>
    <View style={styles.textContainer}>
      <Container>
        <Text style={styles.text}>{text}</Text>
      </Container>
    </View>
  </View>
);

export {CardItem};
