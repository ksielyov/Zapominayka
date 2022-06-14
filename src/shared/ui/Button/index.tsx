import React, {FunctionComponent} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export enum ButtonType {
  default = 'default',
}

interface ButtonInterface {
  title: string;
  onPress: () => void;
  type: ButtonType;
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
    <TouchableOpacity style={styles[type]} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export {Button};
