import React from 'react';
import {FunctionComponent} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Main from '@screens/Main';
import Search from '@screens/Search';

const Stack = createStackNavigator();

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
