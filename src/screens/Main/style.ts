import {ScaledSheet} from 'react-native-size-matters';
import fonts from '@fonts';
import colors from '@colors';

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
  topIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topIcon: {
    width: '283@s',
    height: '236@s',
  },
  bottomContainer: {
    width: '100%',
    height: '177@vs',
    borderTopLeftRadius: '18@vs',
    borderTopRightRadius: '18@vs',
    alignItems: 'center',
    paddingVertical: '23@vs',
    paddingHorizontal: '26@s',
    justifyContent: 'space-between',
  },
  bottomTitle: {
    fontFamily: fonts.bold,
    color: colors.white,
    fontSize: '33@vs',
    fontWeight: '900',
  },
  bottomTitleNormal: {
    fontWeight: '300',
  },
});
