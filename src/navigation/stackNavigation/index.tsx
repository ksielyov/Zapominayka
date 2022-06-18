import React from 'react';
import {FunctionComponent} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Main from '@screens/main';
import Search from '@screens/search';
import {RootStackParamList} from './lib';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation: FunctionComponent = () => {
  const screenOptions = {
    ...TransitionPresets.SlideFromRightIOS,
    headerShown: false,
    gestureEnabled: true,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export {StackNavigation};
