import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import styles from './styles';

/**
 * @param children
 * @constructor
 */
const Container: FunctionComponent = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export {Container};
