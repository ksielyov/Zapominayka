import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import styles from './styles';
import {Container, ItemLine} from '@ui';
import FastImage from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {verticalScale} from 'react-native-size-matters';

const Author = () => {
  const {top} = useSafeAreaInsets();
  const topContainerInnerMarginTop = top + verticalScale(4);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <FastImage
          source={{
            uri: 'https://sun9-24.userapi.com/impf/c854220/v854220334/23db20/hnPBKCQg3CY.jpg?size=0x0&quality=90&proxy=1&sign=b24d86e3fc90d0c2334afdff860ee57a&c_uniq_tag=Dek0CR9HFHWx5C6FMyGoiJMzgMfOSum_BxKafdEq7eI&type=video_thumb',
          }}
          style={styles.authorImage}
        />
        <Container top={topContainerInnerMarginTop} absolute zIndex={9}>
          <Text style={styles.lastName}>Пушкин</Text>
          <Text style={styles.patronymic}>Александр Сергеевич</Text>
        </Container>
      </View>
      <Container>
        <ScrollView
          contentContainerStyle={styles.scrollableItemsContentContainer}
          showsVerticalScrollIndicator={false}
          style={styles.scrollableItems}>
          <ItemLine
            imageSource={
              'https://moreulybok.ru/wp-content/uploads/2021/05/aleksandr-pushkin7.jpg'
            }
            title={'Я памятник себе воздвиг нерукотворный'}
            likeCount={123}
            onPress={() => {}}
          />
          <ItemLine
            imageSource={
              'https://moreulybok.ru/wp-content/uploads/2021/05/aleksandr-pushkin7.jpg'
            }
            title={'Пушкин Александр Сергеевич'}
            likeCount={226}
            onPress={() => {}}
          />
          <ItemLine
            imageSource={
              'https://www.textures.com/system/gallery/photos/Nature/Leaves%20Dead/38593/LeavesDead0031_1_download600.jpg'
            }
            title={'Лучезарная осень'}
            likeCount={212}
            onPress={() => {}}
          />
        </ScrollView>
      </Container>
    </View>
  );
};

export {Author};
