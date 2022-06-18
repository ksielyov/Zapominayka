import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
};

export type StackPropParamList = StackNavigationProp<RootStackParamList>;
