import React from 'react';
import {View, ScrollView, Keyboard} from 'react-native';
import styles from './styles';
import {AppSafeArea, Container, ItemLine} from '@ui';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';

const Author = () => {
  const dismissKeyboard = () => Keyboard.dismiss();

  return (
    <AppSafeArea>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <Container>
          <View style={styles.topContainer}>
            <FastImage
              source={{
                uri: 'https://history-doc.ru/wp-content/uploads/2019/03/Puschkin.jpg',
              }}
            />
          </View>
          <ScrollView
            contentContainerStyle={styles.scrollableItemsContentContainer}
            showsVerticalScrollIndicator={false}
            style={styles.scrollableItems}>
            <ItemLine
              title={'Я памятник себе воздвиг нерукотворный'}
              likeCount={226}
            />
          </ScrollView>
        </Container>
      </TouchableWithoutFeedback>
    </AppSafeArea>
  );
};

export default Author;
