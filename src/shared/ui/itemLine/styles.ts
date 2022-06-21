import {ScaledSheet} from 'react-native-size-matters';
import colors from '@colors';
import fonts from '@fonts';

export default ScaledSheet.create({
  container: {
    width: '100%',
    height: '66@vs',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
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
    fontSize: '13.8@vs',
    fontFamily: fonts.regular,
    fontWeight: '400',
    width: '100%',
  },
  likeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '28@s',
  },
  likeCount: {
    color: colors.white,
    fontWeight: '700',
    fontFamily: fonts.regular,
    top: '-1@vs',
    fontSize: '10.7@vs',
  },
});
