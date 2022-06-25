import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Author: undefined;
  CardPreview: undefined;
  Card: {key: number};
  Home: undefined;
  Search: undefined;
};

export type stackNavigationScreensType = {
  screen: keyof RootStackParamList;
  component: () => JSX.Element;
}[];

export type StackPropParamList = StackNavigationProp<RootStackParamList>;
