import React from 'react';
import renderer from 'react-test-renderer';
import {ImageCard} from '@ui';

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
