import {ImageCardInterface} from '@ui';

export interface CardItemInterface
  extends Omit<ImageCardInterface, 'onPress' | 'bottom'> {
  text: string;
}
