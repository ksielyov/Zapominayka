import {ScaledSheet} from 'react-native-size-matters';
import colors from '@colors';
import fonts from '@fonts';

export default ScaledSheet.create({
  text: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    color: colors.white,
    opacity: 0.5,
  },
});
