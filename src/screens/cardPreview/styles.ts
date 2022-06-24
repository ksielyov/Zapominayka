import {ScaledSheet} from 'react-native-size-matters';
import fonts from '@fonts';
import colors from '@colors';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export default ScaledSheet.create({
  container: {
    width: '100%',
    height,
    backgroundColor: colors.blackBright,
    paddingTop: '10@vs',
  },
  title: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: '21@vs',
    lineHeight: '25@vs',
    fontWeight: 'bold',
    letterSpacing: '0.28@vs',
    marginBottom: '16@vs',
  },
  scrollableContentContainer: {
    paddingBottom: '28@vs',
  },
  scrollableContainer: {
    width: '100%',
    height: '100%',
  },
});
