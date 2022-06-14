import {ScaledSheet} from 'react-native-size-matters';
import fonts from '@fonts';
import colors from '../../shared/colors';

export default ScaledSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  topContainer: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.regular,
    color: colors.white,
    textAlign: 'center',
    marginTop: '64@vs',
    fontWeight: '400',
    fontSize: '22@vs',
  },
  bottomContainer: {
    width: '100%',
    height: '200@vs',
    borderTopLeftRadius: '18@vs',
    borderTopRightRadius: '18@vs',
    alignItems: 'center',
    paddingTop: '23@vs',
  },
  bottomTitle: {
    fontFamily: fonts.regular,
    color: colors.white,
    fontSize: '31@vs',
    fontWeight: '800',
  },
  bottomTitleNormal: {
    fontWeight: '300',
  },
});
