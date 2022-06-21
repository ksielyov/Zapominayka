import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {LikeButton} from '@icons';

const Menu: FunctionComponent = () => {
  const containerStyles = [styles.container];

  return (
    <View style={containerStyles}>
      <LikeButton />
    </View>
  );
};

export {Menu};
