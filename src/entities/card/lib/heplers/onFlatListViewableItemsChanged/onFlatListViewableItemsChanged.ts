import {onFlatListViewableItemsChangedArgument} from './types';

const onFlatListViewableItemsChanged: onFlatListViewableItemsChangedArgument<
  number | null
> = (event): number | null => {
  const targetElement = event.viewableItems[0]?.index;

  if (typeof targetElement === 'number') {
    return targetElement;
  }

  return null;
};

export {onFlatListViewableItemsChanged};
