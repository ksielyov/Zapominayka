import {Search, Main, Author} from '@screens';
import {stackNavigationScreensType} from '@navigation/lib';

export const screens: stackNavigationScreensType = [
  {screen: 'Home', component: Main},
  {screen: 'Search', component: Search},
  {screen: 'Author', component: Author},
];
