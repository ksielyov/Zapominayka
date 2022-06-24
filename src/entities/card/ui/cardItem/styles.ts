import {ScaledSheet} from 'react-native-size-matters';
import fonts from '@fonts';
import colors from '@colors';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default ScaledSheet.create({
  flatList: {
    width,
    height,
  },
  container: {
    width,
    height,
    backgroundColor: colors.blackBright,
  },
  cardImageContainer: {
    width: '100%',
    height: '56%',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  numericContainer: {
    width: '36@s',
    height: '27@vs',
    borderTopRightRadius: '8@vs',
    borderTopLeftRadius: '8@vs',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blackBright,
  },
  numericText: {
    color: colors.white,
  },
  textContainer: {
    flex: 1,
    paddingVertical: '20@vs',
  },
  text: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontWeight: '400',
    letterSpacing: '0.3@s',
    fontSize: '21@vs',
    lineHeight: '34@vs',
    width: '100%',
  },
});
