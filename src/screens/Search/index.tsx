import React, {useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import {SearchIcon} from '@icons';
import {AppSafeArea, Container, Input} from '@ui';
import {useSplashScreen} from '@hooks';

const Search = () => {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  useSplashScreen(backgroundLoaded);

  return (
    <ImageBackground
      style={styles.container}
      onLayout={() => setBackgroundLoaded(true)}
      source={require('../../shared/assets/images/background/search.png')}>
      <AppSafeArea>
        <View style={styles.topContainer}>
          <SearchIcon />
          <Text style={styles.searchTitle}>Искать стих или автора</Text>
          <Container>
            <Input placeholder={'Искать стих или автора'} />
          </Container>
        </View>
      </AppSafeArea>
    </ImageBackground>
  );
};

export default Search;
