import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Menu} from '@ui';
import {FlatList} from 'react-native-gesture-handler';
import {CardItem, CardStep} from '@entities';

const text = `Полюбил бы я зиму,
Да обуза тяжка...
От нее даже дыму
Не уйти в облака.`;

const CardSwiper: FunctionComponent = () => {
  const cards = [
    {key: 1, uri: 'https://stihi.ru/pics/2018/01/03/10527.jpg'},
    {
      key: 2,
      uri: 'https://i.pinimg.com/736x/29/6c/c0/296cc0b2e55f4c4ef30377b5862b3b2e.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <Menu />
      <CardStep />
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
        pagingEnabled
        // onMomentumScrollEnd={() => alert(123)}
        data={cards}
        horizontal={true}
        renderItem={({item: {key, uri}}) => (
          <CardItem imageSource={uri} key={key} index={key} text={text} />
        )}
      />
    </View>
  );
};

export {CardSwiper};
