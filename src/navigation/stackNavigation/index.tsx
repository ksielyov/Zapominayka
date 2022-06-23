import React from 'react';
import {FunctionComponent} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {RootStackParamList} from './lib';
import {screens} from './screens';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation: FunctionComponent = () => {
  const screenOptions = {
    ...TransitionPresets.SlideFromRightIOS,
    headerShown: false,
    gestureEnabled: true,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {screens.map(({screen, component}) => (
        <Stack.Screen key={screen} name={screen} component={component} />
      ))}
    </Stack.Navigator>
  );
};

export {StackNavigation};
