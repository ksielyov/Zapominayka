import {ScaledSheet} from 'react-native-size-matters';
import fonts from '@fonts';
import colors from '@colors';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default ScaledSheet.create({
  step: {
    width: '10.4@vs',
    height: '10.4@vs',
    backgroundColor: colors.preloadingBright,
    borderRadius: 100,
  },
});
