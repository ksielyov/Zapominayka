import React, {FunctionComponent} from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './styles';

/**
 * @param children
 * @param zIndex
 * @param absolute
 * @param top
 * @param bottom
 * @param rowPosition
 * @param height
 * @constructor
 */
const Container: FunctionComponent<{
  zIndex?: number;
  absolute?: boolean;
  top?: number;
  bottom?: number;
  rowPosition?: boolean;
  height?: string | number;
}> = ({children, zIndex, absolute, top, bottom, rowPosition, height}) => {
  const containerStyles = [
    styles.container,
    {
      zIndex,
      position: absolute ? 'absolute' : undefined,
      flexDirection: rowPosition ? 'row' : undefined,
      marginTop: top,
      bottom,
      height,
    } as ViewStyle,
  ];
  return <View style={containerStyles}>{children}</View>;
};

export {Container};
