import {ScaledSheet} from 'react-native-size-matters';
import fonts from '@fonts';
import colors from '@colors';

export default ScaledSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.blackBright,
  },
  safeAreaContainer: {flex: 1},
  topContainer: {
    alignItems: 'center',
  },
  searchTitle: {
    fontFamily: fonts.regular,
    color: colors.white,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: '17@vs',
    marginBottom: '10.6@vs',
  },
  title: {
    fontFamily: fonts.regular,
    color: colors.white,
    textAlign: 'center',
    marginTop: '26@vs',
    fontWeight: '400',
    fontSize: '22@vs',
    lineHeight: '28@vs',
    letterSpacing: '0.7@s',
  },
  topIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topIcon: {
    top: -20,
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
  scrollableItems: {
    height: '100%',
    width: '100%',
  },
});
