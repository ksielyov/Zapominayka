import {verticalScale} from 'react-native-size-matters';
import {StyleProp, ViewStyle} from 'react-native';

const iconSize = verticalScale(22);
const containerPosition = {
  zIndex: 1,
  position: 'absolute',
} as StyleProp<ViewStyle>;

export {iconSize, containerPosition};
