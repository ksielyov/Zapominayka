import {ViewToken} from 'react-native';

export type onFlatListViewableItemsChangedArgument<T> = (info: {
  viewableItems: Array<ViewToken>;
  changed: Array<ViewToken>;
}) => T;
