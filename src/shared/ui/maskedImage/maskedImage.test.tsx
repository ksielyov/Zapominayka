import React from 'react';
import renderer from 'react-test-renderer';
import {MaskedImage} from '@ui';

test('maskedImage should render correctly', () => {
  const tree = renderer
    .create(
      <MaskedImage
        imageSource={
          'https://moreulybok.ru/wp-content/uploads/2021/05/aleksandr-pushkin7.jpg'
        }
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
