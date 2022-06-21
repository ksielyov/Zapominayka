import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';
import styles from './styles';
import {verticalScale} from 'react-native-size-matters';
import {GrayTextInterface} from './lib';

const defaultSize = verticalScale(15);

/**
 * @param children
 * @param size
 * @param top
 * @param bottom
 * @constructor
 */
const GrayText: FunctionComponent<GrayTextInterface> = ({
  children,
  size = defaultSize,
  top,
  bottom,
}) => {
  const textStyles = [
    styles.text,
    {fontSize: size, marginTop: top, marginBottom: bottom},
  ];

  return <Text style={textStyles}>{children}</Text>;
};

export {GrayText};
