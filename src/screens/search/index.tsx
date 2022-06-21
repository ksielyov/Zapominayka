import React from 'react';
import {View, Text, ImageBackground, ScrollView, Keyboard} from 'react-native';
import styles from './styles';
import {SearchIcon} from '@icons';
import {AppSafeArea, Container, GrayText, Input, ItemLine} from '@ui';
import {verticalScale} from 'react-native-size-matters';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Search = () => {
  const dismissKeyboard = () => Keyboard.dismiss();

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../shared/assets/images/background/search.png')}>
      <AppSafeArea>
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <Container>
            <View style={styles.topContainer}>
              <SearchIcon />
              <Text style={styles.searchTitle}>Искать стих или автора</Text>
              <Input
                placeholder={'Искать стих или автора'}
                onChangeText={() => {}}
              />
              <ScrollView
                contentContainerStyle={styles.scrollableItemsContentContainer}
                showsVerticalScrollIndicator={false}
                style={styles.scrollableItems}>
                <GrayText bottom={verticalScale(6)} top={verticalScale(12)}>
                  Популярные в этом месяце
                </GrayText>
                <ItemLine
                  title={'Я памятник себе воздвиг нерукотворный'}
                  likeCount={226}
                  enabledTopBorder
                />
              </ScrollView>
            </View>
          </Container>
        </TouchableWithoutFeedback>
      </AppSafeArea>
    </ImageBackground>
  );
};

export default Search;
