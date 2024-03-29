import React from 'react';
import {View, Text, ImageBackground, ScrollView, Keyboard} from 'react-native';
import styles from './styles';
import {SearchIcon} from '@icons';
import {AppSafeArea, Container, GrayText, Input, ItemLine} from '@ui';
import {verticalScale} from 'react-native-size-matters';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StackPropParamList} from '@navigation/lib';

const Search = () => {
  const dismissKeyboard = () => Keyboard.dismiss();
  const navigation = useNavigation<StackPropParamList>();

  return (
    <ImageBackground
      style={styles.container}
      source={require('@images/background/gray.png')}>
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
                  imageSource={
                    'https://moreulybok.ru/wp-content/uploads/2021/05/aleksandr-pushkin7.jpg'
                  }
                  title={'Я памятник себе воздвиг нерукотворный'}
                  likeCount={226}
                  enabledTopBorder
                  likeMode
                  onPress={() => navigation.navigate('Author')}
                />
              </ScrollView>
            </View>
          </Container>
        </TouchableWithoutFeedback>
      </AppSafeArea>
    </ImageBackground>
  );
};

export {Search};
