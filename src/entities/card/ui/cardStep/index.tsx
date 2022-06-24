import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Container} from '@ui';
import styles from './styles';
import {CardItemInterface} from './lib';
import {verticalScale} from 'react-native-size-matters';

const CardStep: FunctionComponent = ({}) => (
  <Container zIndex={9} absolute bottom={verticalScale(28)}>
    <View style={styles.step} />
  </Container>
);

export {CardStep};
