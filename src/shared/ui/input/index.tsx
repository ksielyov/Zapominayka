import React, {FunctionComponent} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import colors from '@colors';
import {InputInterface, InputType, VerticalAlign} from './lib';

/**
 * @param placeholder
 * @param type
 * @param verticalAlign
 * @param value
 * @param onChangeText
 * @constructor
 */
const Input: FunctionComponent<InputInterface> = ({
  placeholder,
  type = InputType.default,
  verticalAlign = VerticalAlign.center,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles[type]}>
      <TextInput
        style={styles.nativeInput}
        textAlignVertical={verticalAlign}
        placeholderTextColor={colors.inputPlaceholder}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export {Input};
