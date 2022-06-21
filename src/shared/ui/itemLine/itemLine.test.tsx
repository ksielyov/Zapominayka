import renderer from 'react-test-renderer';
import {ItemLine} from '@ui';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

test('itemLine should render correctly', () => {
  const tree = renderer
    .create(
      <ItemLine
        title={'ItemLine UI test'}
        likeCount={324}
        imageSource={
          'https://moreulybok.ru/wp-content/uploads/2021/05/aleksandr-pushkin7.jpg'
        }
        onPress={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('itemLine should be pressed', () => {
  const testTitle = 'ItemLine UI test';
  const onPressMock = jest.fn();
  const {getByText} = render(
    <ItemLine
      title={testTitle}
      likeCount={324}
      imageSource={
        'https://moreulybok.ru/wp-content/uploads/2021/05/aleksandr-pushkin7.jpg'
      }
      onPress={onPressMock}
    />,
  );
  fireEvent.press(getByText(testTitle));
  expect(onPressMock).toBeCalled();
});
