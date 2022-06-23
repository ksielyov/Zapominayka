import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Text, TouchableOpacity} from 'react-native';
import {Like} from '@icons';
import {MaskedImage} from '@ui';
import {scale, verticalScale} from 'react-native-size-matters';
import {ItemLineInterface} from './lib';

/**
 * @param title
 * @param likeCount
 * @param enabledTopBorder
 * @param imageSource
 * @param onPress
 * @param likeMode
 * @constructor
 */
const ItemLine: FunctionComponent<ItemLineInterface> = ({
  title,
  likeCount,
  enabledTopBorder,
  imageSource,
  onPress,
  likeMode,
}) => {
  const containerStyles = [
    styles.container,
    enabledTopBorder
      ? {
          borderTopColor: '#424242',
          borderTopWidth: verticalScale(1.3),
        }
      : undefined,
  ];

  return (
    <TouchableOpacity onPress={onPress} style={containerStyles}>
      <View style={styles.left}>
        <MaskedImage imageSource={imageSource} style={styles.image} />
        <Text style={styles.name} numberOfLines={2}>
          {title}
        </Text>
      </View>
      {likeMode ? (
        <View style={styles.likeContainer}>
          <Like width={scale(27)} height={verticalScale(22.67)} />
          <Text style={styles.likeCount}>{likeCount}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export {ItemLine};
