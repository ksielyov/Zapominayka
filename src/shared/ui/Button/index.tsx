import React, {FunctionComponent} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export enum ButtonType {
  default = 'default',
}

interface ButtonInterface {
  title: string;
  onPress: () => void;
  type?: ButtonType;
}

/**
 * @param title
 * @param onPress
 * @param type
 * @constructor
 */
const Button: FunctionComponent<ButtonInterface> = ({
  title,
  onPress,
  type = ButtonType.default,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles[type]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export {Button};
