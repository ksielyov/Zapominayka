import React, {FunctionComponent, useState} from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Container} from '@ui';
import styles from './styles';
import {CardItemInterface} from '../../lib';
import {RotatedPreloader} from '@icons';

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
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.cardImageContainer}>
        <FastImage
          onLoadEnd={() => setImageLoaded(true)}
          style={styles.cardImage}
          source={{uri: imageSource}}
        />
        {!imageLoaded ? (
          <View style={styles.preloaderContainer}>
            <RotatedPreloader />
          </View>
        ) : null}
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
};

export {CardItem};
