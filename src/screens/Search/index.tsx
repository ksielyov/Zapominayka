import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import styles from './styles';
import {SearchIcon} from '@icons';
import {AppSafeArea, Container, GrayText, Input, ItemLine} from '@ui';
import {verticalScale} from 'react-native-size-matters';

const Search = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../shared/assets/images/background/search.png')}>
      <AppSafeArea>
        <Container>
          <View style={styles.topContainer}>
            <SearchIcon />
            <Text style={styles.searchTitle}>Искать стих или автора</Text>
            <Input placeholder={'Искать стих или автора'} />
            <ScrollView style={styles.scrollableItems}>
              <GrayText bottom={verticalScale(12)} top={verticalScale(22)}>
                Популярные в этом месяце
              </GrayText>
              <ItemLine />
            </ScrollView>
          </View>
        </Container>
      </AppSafeArea>
    </ImageBackground>
  );
};

export default Search;
