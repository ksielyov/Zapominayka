import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Menu} from '@ui';
import {FlatList} from 'react-native-gesture-handler';
import {CardItem} from '@entities';

const text = `Полюбил бы я зиму,
Да обуза тяжка...
От нее даже дыму
Не уйти в облака.`;

const CardSwiper = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
        pagingEnabled
        data={[
          {key: 1, uri: 'https://stihi.ru/pics/2018/01/03/10527.jpg'},
          {
            key: 2,
            uri: 'https://i.pinimg.com/736x/29/6c/c0/296cc0b2e55f4c4ef30377b5862b3b2e.jpg',
          },
        ]}
        horizontal={true}
        renderItem={({item: {key, uri}}) => (
          <CardItem imageSource={uri} key={key} numeric={key} text={text} />
        )}
      />
    </View>
  );
};

export {CardSwiper};
