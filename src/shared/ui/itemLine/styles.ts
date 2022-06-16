import {ScaledSheet} from 'react-native-size-matters';
import colors from '@colors';
import fonts from '@fonts';

export default ScaledSheet.create({
  container: {
    width: '100%',
    height: '68@vs',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopColor: '#424242',
    borderTopWidth: '1.3@vs',
    borderBottomColor: '#424242',
    borderBottomWidth: '1.3@vs',
  },
  left: {
    width: '70%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    marginRight: '12@s',
  },
  name: {
    color: colors.white,
    fontSize: '14.6@vs',
    fontFamily: fonts.regular,
    fontWeight: '400',
  },
});
