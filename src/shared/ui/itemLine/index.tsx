import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Text} from 'react-native';
import {MaskImage, Like} from '@icons';
import {scale, verticalScale} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ItemLineInterface} from './lib';

/**
 * @param title
 * @param likeCount
 * @param enabledTopBorder
 * @constructor
 */
const ItemLine: FunctionComponent<ItemLineInterface> = ({
  title,
  likeCount,
  enabledTopBorder,
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
    <TouchableOpacity style={containerStyles}>
      <View style={styles.left}>
        <MaskImage style={styles.image} />
        <Text style={styles.name} numberOfLines={2}>
          {title}
        </Text>
      </View>
      <View style={styles.likeContainer}>
        <Like width={scale(28)} height={verticalScale(23)} />
        <Text style={styles.likeCount}>{likeCount}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {ItemLine};
