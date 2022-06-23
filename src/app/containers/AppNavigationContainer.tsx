import React, {FunctionComponent} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import colors from '@colors';

const AppNavigationContainer: FunctionComponent = ({children}) => {
  const appTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.blackBright,
      card: colors.blackBright,
      background: colors.blackBright,
    },
  };

  return <NavigationContainer theme={appTheme}>{children}</NavigationContainer>;
};

export {AppNavigationContainer};
