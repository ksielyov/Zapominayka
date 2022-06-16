import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Text} from 'react-native';
import {MaskImage} from '@icons';

interface ItemLineInterface {}

/**
 * @constructor
 */
const ItemLine: FunctionComponent<ItemLineInterface> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <MaskImage style={styles.image} />
        <Text style={styles.name} numberOfLines={2}>
          Осень
        </Text>
      </View>
      <View>
        <Text>like</Text>
      </View>
    </View>
  );
};

export {ItemLine};
