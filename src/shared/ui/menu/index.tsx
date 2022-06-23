import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {MaskedButton} from '@ui';
import {LikeButtonComponent, MenuButtonComponent} from '@icons';
import {verticalScale} from 'react-native-size-matters';

const Menu: FunctionComponent = () => {
  const iconBottomMargin = verticalScale(9);

  return (
    <View style={styles.container}>
      <MaskedButton bottom={iconBottomMargin}>
        <LikeButtonComponent />
      </MaskedButton>
      <MaskedButton>
        <MenuButtonComponent />
      </MaskedButton>
    </View>
  );
};

export {Menu};
