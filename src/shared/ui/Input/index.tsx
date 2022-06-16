import React, {FunctionComponent} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import colors from '@colors';

export enum InputType {
  default = 'default',
}

export enum VerticalAlign {
  center = 'center',
}

interface InputInterface {
  placeholder: string;
  type?: InputType;
  verticalAlign?: VerticalAlign;
}

/**
 * @param placeholder
 * @param type
 * @param verticalAlign
 * @constructor
 */
const Input: FunctionComponent<InputInterface> = ({
  placeholder,
  type = InputType.default,
  verticalAlign = VerticalAlign.center,
}) => {
  return (
    <View style={styles[type]}>
      <TextInput
        style={styles.nativeInput}
        textAlignVertical={verticalAlign}
        placeholderTextColor={colors.inputPlaceholder}
        placeholder={placeholder}
      />
    </View>
  );
};

export {Input};
