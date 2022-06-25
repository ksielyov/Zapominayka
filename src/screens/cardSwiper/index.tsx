import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Menu} from '@ui';
import {FlatList} from 'react-native-gesture-handler';
import {CardItem, CardStep} from '@entities';
import {cards} from '../../tempData/cards';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigation/stackNavigation/lib';

const text = `Полюбил бы я зиму,
Да обуза тяжка...
От нее даже дыму
Не уйти в облака.`;

const CardSwiper: FunctionComponent<
  NativeStackScreenProps<RootStackParamList, 'Card'>
> = ({route}) => {
  const [isReady, setIsReady] = useState(false);
  const swiper = useRef<FlatList>(null);
  const {key} = route.params;
  useEffect(() => {
    if (isReady && swiper.current) {
      swiper.current.scrollToIndex({index: key - 1, animated: true});
    }
  }, [isReady, key]);

  return (
    <View style={styles.container}>
      <Menu />
      <CardStep />
      <FlatList
        onLayout={() => setIsReady(true)}
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
        pagingEnabled
        ref={swiper}
        data={cards}
        horizontal={true}
        renderItem={({item}) => (
          <CardItem
            imageSource={item.uri}
            key={item.key}
            index={item.key}
            text={text}
          />
        )}
      />
    </View>
  );
};

export {CardSwiper};
