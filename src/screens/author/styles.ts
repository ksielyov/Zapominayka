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
    width: '100%',
    height: '167@vs',
  },
  authorImage: {
    width: '100%',
    height: '100%',
  },
  lastName: {
    color: colors.white,
    fontSize: '32@vs',
    fontFamily: fonts.bold,
    fontWeight: '900',
  },
  patronymic: {
    color: colors.white,
    fontSize: '17@vs',
    fontFamily: fonts.bold,
    fontWeight: '400',
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
  scrollableItemsContentContainer: {
    paddingBottom: '377@vs',
  },
  scrollableItems: {
    height: '100%',
    width: '100%',
    marginTop: '6@vs',
  },
});
