import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Author: undefined;
  CardPreview: undefined;
  Card: undefined;
  Home: undefined;
  Search: undefined;
};

export type stackNavigationScreensType = {
  screen: keyof RootStackParamList;
  component: () => JSX.Element;
}[];

export type StackPropParamList = StackNavigationProp<RootStackParamList>;
