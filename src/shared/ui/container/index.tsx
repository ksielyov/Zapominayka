import React, {FunctionComponent} from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './styles';

/**
 * @param children
 * @param zIndex
 * @param absolute
 * @param top
 * @param bottom
 * @constructor
 */
const Container: FunctionComponent<{
  zIndex?: number;
  absolute?: boolean;
  top?: number;
  bottom?: number;
}> = ({children, zIndex, absolute, top, bottom}) => {
  const containerStyles = [
    styles.container,
    {
      zIndex,
      position: absolute ? 'absolute' : undefined,
      marginTop: top,
      bottom,
    } as ViewStyle,
  ];
  return <View style={containerStyles}>{children}</View>;
};

export {Container};
