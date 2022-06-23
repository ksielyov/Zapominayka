import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import colors from '@colors';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default ScaledSheet.create({
  container: {
    width: width - verticalScale(88),
    height: '157@vs',
    borderRadius: '12@vs',
    backgroundColor: colors.preloadingBright,
  },
  indexContainer: {
    position: 'absolute',
    zIndex: 2,
    width: '32@vs',
    height: '32@vs',
    backgroundColor: 'rgba(0,0,0,0.69)',
    borderBottomRightRadius: '12@vs',
    borderTopLeftRadius: '12@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  index: {
    color: colors.white,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: '12@vs',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '12@vs',
  },
});
