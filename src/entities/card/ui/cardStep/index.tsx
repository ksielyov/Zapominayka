import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {Container} from '@ui';
import styles from './styles';
import {verticalScale} from 'react-native-size-matters';
import colors from '@colors';

const CardStep: FunctionComponent<{dots: number[]; currentIndex: number}> = ({
  dots,
  currentIndex,
}) => (
  <Container rowPosition zIndex={9} absolute bottom={verticalScale(28)}>
    {dots.map(item => (
      <View
        key={item}
        style={[
          styles.step,
          item === currentIndex ? {backgroundColor: colors.dotGray} : null,
        ]}
      />
    ))}
  </Container>
);

export {CardStep};
