import React, {FunctionComponent, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {ImageCardInterface} from './lib';
import FastImage from 'react-native-fast-image';
import {RotatedPreloader} from '@icons';

/**
 * @param index
 * @param bottom
 * @param imageSource
 * @param onImageLoad
 * @constructor
 */
const ImageCard: FunctionComponent<ImageCardInterface> = ({
  index,
  bottom,
  imageSource,
  onImageLoad,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerStyles = [styles.container, {marginBottom: bottom}];
  const source = {uri: imageSource};
  const onLoadEnd = () => {
    if (onImageLoad) {
      onImageLoad();
    }
    setImageLoaded(true);
  };

  return (
    <TouchableOpacity activeOpacity={0.55} style={containerStyles}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{index}</Text>
      </View>
      <FastImage style={styles.image} onLoadEnd={onLoadEnd} source={source} />
      <View style={styles.imageContainer}>
        {!imageLoaded ? <RotatedPreloader /> : null}
      </View>
    </TouchableOpacity>
  );
};

export {ImageCard};
