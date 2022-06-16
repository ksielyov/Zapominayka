import {ScaledSheet} from 'react-native-size-matters';
import colors from '@colors';

export default ScaledSheet.create({
  default: {
    backgroundColor: colors.white,
    width: '100%',
    height: '44@vs',
    borderRadius: '6@vs',
  },
  nativeInput: {
    width: '100%',
    height: '100%',
    paddingHorizontal: '14@s',
    color: colors.input,
    fontSize: '13.6@vs',
  },
});
