import {ScaledSheet, verticalScale} from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  iconBackground: {
    backgroundColor: '#151625',
    width: verticalScale(44),
    height: verticalScale(44),
    position: 'absolute',
    borderRadius: verticalScale(9),
  },
});
