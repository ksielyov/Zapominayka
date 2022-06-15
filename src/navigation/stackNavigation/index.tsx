import React from 'react';
import {FunctionComponent} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Main from '@screens/Main';

const Stack = createStackNavigator();

const StackNavigation: FunctionComponent = () => {
  const screenOptions = {
    ...TransitionPresets.SlideFromRightIOS,
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Main} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
