import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {MaskedButton} from '@ui';
import {ShareButtonComponent} from '@icons';

const Menu: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <MaskedButton>
        <ShareButtonComponent />
      </MaskedButton>
    </View>
  );
};

export {Menu};
