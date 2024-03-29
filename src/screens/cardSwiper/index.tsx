import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import {View, ViewabilityConfigCallbackPairs} from 'react-native';
import styles from './styles';
import {Menu} from '@ui';
import {FlatList} from 'react-native-gesture-handler';
import {CardItem, CardStep} from '@entities';
import {cards} from '../../shared/tempData/cards';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigation/stackNavigation/lib';
import {
  onFlatListViewableItemsChanged,
  onFlatListViewableItemsChangedArgument,
} from '@entities';

const text = `Полюбил бы я зиму,
Да обуза тяжка...
От нее даже дыму
Не уйти в облака.`;

const CardSwiper: FunctionComponent<
  NativeStackScreenProps<RootStackParamList, 'Card'>
> = ({route}) => {
  const {key} = route.params;
  const dots = cards.map(item => item.key - 1);

  const [isReady, setIsReady] = useState(false);
  const [currentPage, setCurrentPage] = useState(key - 1);

  const viewabilityConfig = {itemVisiblePercentThreshold: 100};
  const swiper = useRef<FlatList>(null);

  const onViewableItemsChanged: onFlatListViewableItemsChangedArgument<
    void
  > = event => {
    const page = onFlatListViewableItemsChanged(event);

    if (typeof page === 'number') {
      setCurrentPage(page);
    }
  };

  const viewabilityConfigCallbackPairs = useRef<ViewabilityConfigCallbackPairs>(
    [{viewabilityConfig, onViewableItemsChanged}],
  );

  useEffect(() => {
    if (isReady && swiper.current) {
      swiper.current.scrollToIndex({index: key - 1, animated: true});
    }
  }, [isReady, key]);

  return (
    <View style={styles.container}>
      <Menu />
      <CardStep currentIndex={currentPage} dots={dots} />
      <FlatList
        onLayout={() => setIsReady(true)}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
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
