import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

/**
 * @param children
 * @constructor
 */
const AppSafeArea: FunctionComponent = ({children}) => {
  const {top} = useSafeAreaInsets();
  const container = {paddingTop: top, width: '100%', height: '100%'};

  return <View style={container}>{children}</View>;
};

export {AppSafeArea};
