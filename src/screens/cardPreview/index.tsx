import React from 'react';
import {ScrollView, Text, ImageBackground} from 'react-native';
import styles from './styles';
import {AppSafeArea, Container, ImageCard, Menu} from '@ui';
import {verticalScale} from 'react-native-size-matters';

const CardPreview = () => {
  return (
    <ImageBackground
      source={require('@images/background/gray.png')}
      style={styles.container}>
      <AppSafeArea>
        <Menu />
        <Container>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollableContentContainer}
            style={styles.scrollableContainer}>
            <Text style={styles.title}>
              Полюбил бы я зиму, да обуза тяжка...
            </Text>
            <ImageCard
              index={1}
              imageSource={'https://stihi.ru/pics/2018/01/03/10527.jpg'}
              bottom={verticalScale(10)}
            />
            <ImageCard
              index={2}
              imageSource={
                'https://priioajn.files.wordpress.com/2019/08/landscape-2459981.jpg?w=1200'
              }
              bottom={verticalScale(10)}
            />
            <ImageCard
              index={3}
              imageSource={
                'https://i.pinimg.com/736x/29/6c/c0/296cc0b2e55f4c4ef30377b5862b3b2e.jpg'
              }
              bottom={verticalScale(10)}
            />
            <ImageCard
              index={4}
              imageSource={
                'https://img5.goodfon.com/wallpaper/big/0/aa/jay-wennington-ulitsa-svet-svetofor.jpg'
              }
            />
          </ScrollView>
        </Container>
      </AppSafeArea>
    </ImageBackground>
  );
};

export {CardPreview};
