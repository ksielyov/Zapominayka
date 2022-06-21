import React, {FunctionComponent} from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './styles';

/**
 * @param children
 * @param zIndex
 * @param absolute
 * @param top
 * @constructor
 */
const Container: FunctionComponent<{
  zIndex?: number;
  absolute?: boolean;
  top?: number;
}> = ({children, zIndex, absolute, top}) => {
  const containerStyles = [
    styles.container,
    {
      zIndex,
      position: absolute ? 'absolute' : undefined,
      marginTop: top,
    } as ViewStyle,
  ];
  return <View style={containerStyles}>{children}</View>;
};

export {Container};
