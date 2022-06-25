import React from 'react';
import {ScrollView, Text, ImageBackground} from 'react-native';
import styles from './styles';
import {AppSafeArea, Container, ImageCard, Menu} from '@ui';
import {verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {StackPropParamList} from '@navigation/lib';
import {cards} from '../../tempData/cards';

const CardPreview = () => {
  const navigation = useNavigation<StackPropParamList>();
  const onCardPress = (key: number) => navigation.navigate('Card', {key});

  return (
    <ImageBackground
      source={require('@images/background/gray.png')}
      style={styles.container}>
      <Menu />
      <Container>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollableContentContainer}
          style={styles.scrollableContainer}>
          <AppSafeArea>
            <Text style={styles.title}>
              Полюбил бы я зиму, да обуза тяжка...
            </Text>
            {cards.map(({key, uri}) => (
              <ImageCard
                key={key}
                onPress={() => onCardPress(key)}
                index={key}
                imageSource={uri}
                bottom={verticalScale(10)}
              />
            ))}
          </AppSafeArea>
        </ScrollView>
      </Container>
    </ImageBackground>
  );
};

export {CardPreview};
