import React from 'react';
import renderer from 'react-test-renderer';
import {ImageCard} from '@ui';
import {fireEvent, render} from '@testing-library/react-native';

test('imageCard should render correctly', () => {
  const tree = renderer
    .create(
      <ImageCard
        index={2}
        imageSource={
          'https://priioajn.files.wordpress.com/2019/08/landscape-2459981.jpg?w=1200'
        }
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('onLoadEnd should be called in ImageCard', async () => {
  const onImageLoadMock = jest.fn();
  const testId = 'testingImage';

  const {getByTestId} = render(
    <ImageCard
      testID={testId}
      onImageLoad={onImageLoadMock}
      index={2}
      imageSource={
        'https://priioajn.files.wordpress.com/2019/08/landscape-2459981.jpg?w=1200'
      }
    />,
  );

  fireEvent(getByTestId(testId), 'onLoadEnd');

  expect(onImageLoadMock).toBeCalled();
});
