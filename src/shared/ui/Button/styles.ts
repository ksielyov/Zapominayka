import {ScaledSheet} from 'react-native-size-matters';
import colors from '@colors';
import fonts from '@fonts';

export default ScaledSheet.create({
  default: {
    backgroundColor: colors.white,
    width: '100%',
    height: '70@vs',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100@vs',
    elevation: 7,
    shadowColor: colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  title: {
    fontWeight: '400',
    color: colors.black,
    fontFamily: fonts.regular,
    fontSize: '16@vs',
  },
});
