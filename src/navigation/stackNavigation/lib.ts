import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Author: undefined;
};

export type stackNavigationScreensType = {
  screen: keyof RootStackParamList;
  component: () => JSX.Element;
}[];

export type StackPropParamList = StackNavigationProp<RootStackParamList>;
